import { ref, computed, reactive } from "vue";
import vc from "@/utils/CookieManager";
import CryptoJS from "crypto-js";
import accountInfo from "@/store/accountInfo";
import uuid from "@/utils/uuid";
import em from "@/utils/message";
import { ElMessage, ElMessageBox } from "element-plus";
import router from "@/router";
import {
  ROLE_INFO,
  CHARACTERS,
  XIAOYUMA,
  XIAOYUHAO,
  ICU_KEY,
  ZERO,
  ADMIN_KEY,
  USER_KEY,
  TOKEN_COOKIE_NAME,
  ROLES_KEY,
  XYG_KEY,
  USER_ROLE,
  ADMIN_ROLE,
} from "@/utils/constant";

// 登录表单
const formData = reactive({
  username: "", // 小鱼号
  password: "", // 小鱼码
  code: "", // 验证码
  rememberMe: false, // 是否记住账号
  respect: false, // 是否同意协议
});
const captcha = ref(""); // 验证码
const captchaPassed = ref(false); // 标记验证码是否通过验证，默认为 false
const usernameAndPassword = ref(false); // 标记小鱼号和小鱼码是否正确，默认为 false
const role = ref(""); // 接受account.js的roles(0或1)

// 返回的Pinia的数据
const name = ref("");
const icu = ref("");
const roles = ref("");
const avatar = ref("");

// 返回登录按钮的禁用情况
const isSubmit = computed(() => {
  return (
    formData.username && formData.password && formData.code && formData.respect
  );
});

// 生成数字验证码函数
const generateCaptcha = () => {
  const length = 6;
  // 去除了字母i,l,o和数字0
  const characters = CHARACTERS;
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  captcha.value = result;
};

// 刷新验证码
const changeCaptcha = () => {
  generateCaptcha();
};

// 校验验证码
const verifyCaptcha = () => {
  if (formData.code.toLowerCase() === captcha.value.toLowerCase()) {
    captchaPassed.value = true; // 将验证码验证状态设置为通过
  } else {
    em.showWarningMessage("验证码错误!");
    captchaPassed.value = false; // 将验证码验证状态设置为失败
    changeCaptcha();
    formData.code = "";
  }
};

const checkUsernamePwd = () => {
  // 获取用户输入的小鱼号和小鱼码
  const usernameInput = formData.username;
  const passwordInput = formData.password;
  let encryptXiaoyuma = "";
  const ma = vc.getCookie(XIAOYUMA);
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
    role.value = matchedAccount.roles; // 1: 管理员, 0: 普通用户
    // 校验通过，执行登录操作
    usernameAndPassword.value = true;
  } else {
    // 校验不通过，显示错误提示
    em.showWarningMessage("小鱼号或小鱼码错误，请重新输入!");
    usernameAndPassword.value = false;
    changeCaptcha();
    formData.code = "";
  }
};

// 执行登录操作
const goLogin = () => {
  verifyCaptcha(); // 调用验证码验证函数
  if (captchaPassed.value) {
    checkUsernamePwd(); // 校验小鱼号和小鱼码是否正确
  }
  if (captchaPassed.value && usernameAndPassword.value) {
    if (formData.rememberMe) {
      vc.setCookie(XIAOYUHAO, formData.username, 24 * 60); // 1天时间小鱼号
      vc.setEncryptedCookie(XIAOYUMA, formData.password, 2.5 * 60); // 2个半小时小鱼码
    } else {
      vc.deleteCookie(XIAOYUMA);
    }
    name.value = formData.username;
    icu.value = uuid.generateRandomUUID(); // 设置uuid
    roles.value = role.value === ZERO ? USER_KEY : ADMIN_KEY; // 设置用户角色
    const newRoles = roles.value === USER_KEY ? USER_ROLE : ADMIN_ROLE;
    avatar.value = ROLE_INFO[newRoles].avatar; // 设置用户头像
    const md5UU = CryptoJS.MD5(icu.value).toString(); // 加密icu
    const md5Roles = CryptoJS.MD5(roles.value).toString(); // 加密角色
    const token = XYG_KEY + "-" + md5Roles + "-" + md5UU; // Token值
    vc.setCookie(ICU_KEY, icu.value); // 设置icu的Cookie
    vc.setCookie(ROLES_KEY, roles.value); // 设置角色Cookie
    vc.setCookie(TOKEN_COOKIE_NAME, token, 30); // 设置CookieToken
    const currentTime = new Date();
    console.log(
      `${formData.username}用户登录成功!  (${currentTime.toLocaleString()})`
    );
    em.showSuccessMessage(`${formData.username}用户,登录成功!`);
    router.push("/");
  }
};

// 登录函数
const login = () => {
  if (!formData.respect) {
    em.showConfirmMessageBox("你是否同意小鱼儿🏠の用户协议和隐私协议?")
      .then(() => {
        formData.respect = true;
        em.showInfoMessage("你已成功勾选!");
        goLogin();
      })
      .catch(() => {
        em.showWarningMessage("你已取消了,需要同意才可以进行下一步操作!");
      });
  } else {
    goLogin();
  }
};

export {
  formData,
  isSubmit,
  captcha,
  generateCaptcha,
  changeCaptcha,
  login,
  icu,
  roles,
  avatar,
  name,
};
