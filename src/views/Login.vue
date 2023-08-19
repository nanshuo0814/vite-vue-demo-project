<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import router from "../router";
import VueCookie from "vue-cookie";
import { ElMessage, ElMessageBox } from "element-plus";
import CryptoJS from "crypto-js";
import accountInfo from "../store/accountInfo";
import { useDark } from "@vueuse/core";
const isDark = useDark();

// 返回登录按钮的禁用情况
const isSubmit = computed(() => {
  return (
    formData.username && formData.password && formData.code && formData.respect
  );
});
// 登录表单
const formData = reactive({
  username: "",
  password: "",
  encryptedPassword: "", // 存储加密后的密码
  code: "",
  rememberMe: false,
});
const formDataRef = ref();
// 校验表单
const rules = {
  username: [
    { required: true, message: "小鱼号不能为空", trigger: "blur" },
    { min: 2, message: "用户名至少为2个字", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入小鱼码", trigger: "blur" },
    { min: 6, message: "小鱼码至少要有6位", trigger: "blur" },
  ],
  code: [
    { required: true, message: "请输入小鱼验证码", trigger: "blur" },
    { len: 6, message: "小鱼验证码应为6位", trigger: "blur" },
  ],
};
// 查看密码
const showPwd = ref(false);
const inputType = computed(() => (showPwd.value ? "text" : "password"));
// 数字验证码
const captcha = ref("");
// 生成数字验证码函数
const generateCaptcha = () => {
  const length = 6;
  // 去除了字母i,l,o和数字0
  const characters = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  captcha.value = result;
};
// 登录函数
const login = () => {
  if (!formData.respect) {
    ElMessageBox.confirm(
      "你是否同意小鱼儿🏠の用户协议和隐私协议?",
      "温馨提示",
      {
        distinguishCancelAndClose: true,
        confirmButtonText: "同意",
        cancelButtonText: "取消",
      }
    )
      .then(() => {
        formData.respect = true;
        ElMessage({
          type: "info",
          message: "你已成功勾选!",
        });
      })
      .catch(() => {
        ElMessage({
          type: "warning",
          message: "你已取消了,需要同意才可以进行下一步操作!",
        });
      });
    return;
  }
  verifyCaptcha(); // 调用验证码验证函数
  // 避免验证码和小鱼号和小鱼码同时报错
  if (captchaPassed.value) {
    checkUsernamePwd(); // 校验小鱼号和小鱼码是否正确
  }
  // 在 verifyCaptcha 函数内部判断验证码是否通过，如果不通过则不执行 router.push
  if (captchaPassed.value && usernameAndPassword.value) {
    // 存储小鱼号和小鱼码,勾选记住小鱼号的情况下
    if (formData.rememberMe) {
      // 设置小鱼号和小鱼码的cookie
      VueCookie.set("xiaoyuhao", formData.username, { expires: 1 }); // 1天时间小鱼码
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 2.5 * 60 * 60 * 1000); // 2个半小时小鱼码
      const encrypted = CryptoJS.MD5(formData.password).toString(); // 使用MD5算法加密密码
      VueCookie.set("xiaoyuma", encrypted, { expires: expirationDate });
    } else {
      // 删除小鱼码cookie,若没有勾选记住小鱼号的情况下
      VueCookie.delete("xiaoyuma");
    }
    router.push("/index");
    ElMessage({
      message: `${formData.username}用户,登录成功!`,
      type: "success",
    });
    // 存储用户token,过期时间为半小时
    const currentTime = new Date();
    console.log(
      `${formData.username}用户登录成功!  (${currentTime.toLocaleString()})`
    );
    const LoginInfo = {
      username: formData.username,
      token: CryptoJS.MD5(isAdmin.value).toString(),
    };
    currentTime.setTime(currentTime.getTime() + 30 * 60 * 1000); // 半个小时
    const xiaoyuhaoJson = JSON.stringify(LoginInfo);
    VueCookie.set("xiaoyuhaoToken", xiaoyuhaoJson, {
      expires: currentTime,
    });
  }
};
// 校验数字验证码函数
const captchaPassed = ref(false); // 标记验证码是否通过验证，默认为 false
const usernameAndPassword = ref(false); // 标记小鱼号和小鱼码是否正确,默认为 false
const verifyCaptcha = () => {
  if (formData.code.toLowerCase() === captcha.value.toLowerCase()) {
    captchaPassed.value = true; // 将验证码验证状态设置为通过
  } else {
    ElMessage({
      message: "验证码错误!",
      type: "warning",
    });
    captchaPassed.value = false; // 将验证码验证状态设置为失败
    changeCaptcha();
    formData.code = "";
  }
};
// 校验小鱼号和小鱼码是否正确的函数
const isAdmin = ref();
const checkUsernamePwd = () => {
  // 获取用户输入的小鱼号和小鱼码
  const usernameInput = formData.username;
  const passwordInput = formData.password;
  let encryptXiaoyuma = "";
  const ma = VueCookie.get("xiaoyuma");
  // 没有cookie的情况,加密
  if (!ma || passwordInput !== ma) {
    encryptXiaoyuma = CryptoJS.MD5(passwordInput).toString(); // 用户输入的小鱼码经过加密的密码
  } else {
    encryptXiaoyuma = ma;
  }
  // 有cookie
  // 校验小鱼号和小鱼码是否正确
  const matchedAccount = accountInfo.find(
    (account) =>
      account.username === usernameInput && account.password === encryptXiaoyuma
  );
  if (matchedAccount) {
    isAdmin.value = matchedAccount.isAdmin;
    // 校验通过，执行登录操作
    usernameAndPassword.value = true;
  } else {
    // 校验不通过，显示错误提示
    ElMessage({
      message: "小鱼号或小鱼码错误，请重新输入!",
      type: "warning",
    });
    usernameAndPassword.value = false;
    changeCaptcha();
    formData.code = "";
  }
};
// 刷新验证码
const changeCaptcha = () => {
  generateCaptcha();
};
onMounted(() => {
  generateCaptcha();
  formData.username = VueCookie.get("xiaoyuhao");
  formData.password = VueCookie.get("xiaoyuma");
});
const wxQRCodeJPG = "../../src/assets/wxQRCode.jpg";
const wxQRCodeJPGList = ["../../src/assets/wxQRCode.jpg"];
</script>

<template>
  <div container>
    <div class="login-container">
      <div class="header-box">
        <div class="title-box">
          <span class="fish" style="width: 50px; height: 50px"></span>
          <span class="title">小鱼儿の🏠</span>
        </div>
        <el-switch
          style="position: absolute; right: 0; margin: 20px"
          v-model="isDark"
        />
      </div>
      <el-divider style="margin: 0" />
      <div class="login-box">
        <img src="../../public/PhaseOne/xiaoyuer.png" class="login-left-box" />
        <div class="login-right-box">
          <div class="login-form">
            <div class="login-title">小鱼儿の藏宝地</div>
            <el-form :model="formData" :rules="rules" ref="formDataRef">
              <el-form-item prop="username">
                <el-input
                  class="input"
                  placeholder="请输入你的小鱼号"
                  v-model="formData.username"
                  size="large"
                  clearable
                >
                  <template #prefix>
                    <span class="input">🏠</span>
                  </template>
                  <template #append>
                    <el-popover
                      placement="top-start"
                      :width="225"
                      trigger="hover"
                    >
                      <!-- <h4>游客小鱼号体验号</h4>
                      小鱼号: yuzai<br />
                      小鱼码: yuzai123 -->
                      <el-image
                        style="width: 200px; height: 274px"
                        :src="wxQRCodeJPG"
                        :zoom-rate="1.2"
                        :preview-src-list="wxQRCodeJPGList"
                        fit="cover"
                      />
                      <template #reference>
                        <el-button
                          ><el-icon><QuestionFilled /></el-icon
                        ></el-button>
                      </template>
                    </el-popover>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  class="input"
                  :type="inputType"
                  placeholder="请输入你的小鱼码"
                  v-model="formData.password"
                  size="large"
                  clearable
                >
                  <template #prefix>
                    <span class="input">🔒</span>
                  </template>
                  <template #append>
                    <el-popover placement="top" :width="150" trigger="hover">
                      <h5 class="center" v-show="!showPwd">点击查看小鱼码</h5>
                      <h5 class="center" v-show="showPwd">点击隐藏小鱼码</h5>
                      <template #reference
                        ><el-button @click="showPwd = !showPwd">
                          {{ showPwd ? "👀" : "🙈" }}
                        </el-button>
                      </template>
                    </el-popover>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input
                  class="input"
                  placeholder="请输入小鱼验证码"
                  v-model="formData.code"
                  size="large"
                  @keyup.enter="login"
                  clearable
                >
                  <template #prefix>
                    <span class="input">🔑</span>
                  </template>
                  <template #append>
                    <el-popover placement="top" :width="150" trigger="hover">
                      <h5 class="center">点击刷新小鱼验证码</h5>
                      <template #reference
                        ><el-button @click="changeCaptcha">
                          {{ captcha }}
                        </el-button>
                      </template>
                    </el-popover>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="formData.rememberMe" :true-label="1"
                  >记住小鱼号</el-checkbox
                >
                <div style="position: absolute; right: 0; font-weight: 500">
                  <el-tooltip placement="top" effect="light">
                    网站二维码
                    <template #content>
                      <img
                        style="width: 200px; height: 200px"
                        src="../../public/PhaseThree/xiaoyuerQRCode.png"
                      />
                    </template>
                  </el-tooltip>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button
                  style="width: 100%"
                  size="large"
                  @click="login"
                  :disabled="!isSubmit"
                  :class="{ 'submit-btn': isSubmit, 'unSubmit-btn': !isSubmit }"
                >
                  登录
                </el-button>
              </el-form-item>
              <div class="flex justify-space-between mb-4 flex-wrap gap-4">
                <el-checkbox v-model="formData.respect" :true-label="1">
                  拥护且同意小鱼儿🏠の
                  <el-button
                    style="margin-left: -12px"
                    type="primary"
                    link
                    @click="router.push('/agreement')"
                    >《用户协议》</el-button
                  >
                  <span style="margin: 0 -7px">和</span>
                  <el-button
                    type="primary"
                    link
                    @click="router.push('/privacy')"
                    >《隐私政策》</el-button
                  >
                </el-checkbox>
              </div>
            </el-form>
          </div>
        </div>
      </div>
      <div class="footer-box">
        <div class="footer-title">
          <div>
            Copyright © 2023-2024
            <a href="https://github.com/xiaoyuer-icu/xiaoyuer" target="_blank"
              >xiaoyuer</a
            >
          </div>
          <div class="fish" style="margin-left: 22px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.login-container {
  height: 100vh;
  width: 100%;
  .header-box {
    position: relative;
    top: 0;
    width: 100%;
    height: 70px;
    // box-shadow: 0 2px 20px rgba(202, 208, 217, 0.5);
    .title-box {
      position: absolute;
      width: 400px;
      height: 70px;
      margin-left: 15%;
      span {
        position: absolute;
        margin: 10px;
        margin-right: 15%;
      }
      .title {
        position: absolute;
        font-size: 40px;
        margin: 10px;
        margin-left: 20%;
        color: orange;
        font-weight: bolder;
      }
    }
  }
  .login-box {
    height: 85%;
    min-height: calc(100% - 156px);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    .login-right-box {
      box-sizing: border-box;
      width: 400px;
      min-height: 456px;
      padding: 30px 20px;
      box-shadow: 0 5px 20px rgba(202, 208, 217, 0.5);
      border-radius: 8px;
      position: relative;
      .login-title {
        text-align: center;
        font-size: 30px;
        margin: 5px 10px;
        margin-bottom: 15px;
        font-weight: bolder;
      }
      .input {
        font-size: 20px;
      }
      .submit-btn {
        background: linear-gradient(270deg, #67aef7 0%, #67aef7 100%),
          linear-gradient(270deg, #c4c4c4 0%, #e5e5e5 100%);
        border-radius: 4px;
        text-align: center;
        color: #fff;
      }
      .unSubmit-btn {
        background: linear-gradient(270deg, #c4c4c4 0%, #e5e5e5 100%);
        border-radius: 4px;
        text-align: center;
        color: #666;
      }
    }
  }
  .footer-box {
    height: 5%;
    .footer-title {
      font-size: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        color: #34a672;
        font-size: 22px;
      }
      .fish {
        width: 22px;
        height: 22px;
        background: url(../assets/yu.png) center/cover no-repeat; /* 替换为你的鱼图 url */
        animation: swim 4s linear infinite;
        transform-style: preserve-3d;
      }
      .center {
        text-align: center;
      }
    }
  }
}
@keyframes swim {
  0% {
    transform: translateX(0px) rotateY(0deg);
  }
  25% {
    transform: translateX(-20px) rotateY(0deg);
  }
  50% {
    transform: translateX(-20px) rotateY(180deg);
  }
  75% {
    transform: translateX(20px) rotateY(180deg);
  }
  88% {
    transform: translateX(20px) rotateY(0deg);
  }
  100% {
    transform: translateX(0px) rotateY(0deg);
  }
}
@media screen and (max-width: 960px) {
  .login-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .login-box {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .login-left-box {
      display: none;
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1200px) {
  .login-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .login-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .footer-box {
      margin: 0 auto;
      width: 720px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 2560px) {
  .login-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .login-box {
      width: 1200px;
      display: flex;
      justify-content: space-between;
    }

    .login-left-box {
      display: inline-block;
    }

    .footer-box {
      margin: 0 auto;
      width: 720px;
    }
  }
}
</style>
