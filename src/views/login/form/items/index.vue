<script setup>
import { ref, onMounted, computed } from "vue";
import router from "@/router";
import vc from "@/utils/CookieManager";
import { formItems, rules } from "./js/constant";
import {
  XIAOYUMA,
  XIAOYUHAO,
  WXRQCODEJPG,
  WXRQCODEJPGLIST,
} from "@/utils/constant";
import {
  formData,
  isSubmit,
  captcha,
  generateCaptcha,
  changeCaptcha,
  login,
  icu,
  name,
  avatar,
  roles,
} from "./js/method";
import { userAuthStore } from "@/store/user";

// 存储用户信息到Pinia
const userStore = userAuthStore();
// 登录方法
const handleLogin = () => {
  login();
  // 存储用户信息到 Pinia
  userStore.updateUserInfo({
    name: name.value,
    icu: icu.value,
    roles: roles.value,
    avatar: avatar.value,
  });
};

// 查看密码
const showPwd = ref(false);
const formDataRef = ref();
// 数字验证码
const inputType = computed(() => (showPwd.value ? "text" : "password"));

onMounted(() => {
  // 获取数字验证码
  generateCaptcha();
  // 获取Cookie表单数据响应到输入框
  formData.username = vc.getCookie(XIAOYUHAO);
  formData.password = vc.getCookie(XIAOYUMA);
  // 验证码置空
  formData.code = "";
});
</script>

<template>
  <el-form :model="formData" :rules="rules" ref="formDataRef">
    <template v-for="item in formItems" :key="item.key">
      <el-form-item :prop="item.prop">
        <el-input
          class="input"
          :type="item.key === 'password' ? inputType : item.type"
          :placeholder="item.placeholder"
          v-model="formData[item.prop]"
          size="large"
          @keyup.enter="item.key === 'code' ? handleLogin() : null"
          clearable
        >
          <template #prefix>
            <span class="input">{{ item.icon }}</span>
          </template>
          <!-- 点击查看微信二维码 -->
          <template #append v-if="item.prop === 'username'">
            <el-popover placement="top-start" :width="225" trigger="hover">
              <!-- <h4>游客小鱼号体验号</h4>
                      小鱼号: yuzai<br />
                      小鱼码: yuzai123 -->
              <el-image
                style="width: 200px; height: 274px"
                :src="WXRQCODEJPG"
                :zoom-rate="1.2"
                :preview-src-list="WXRQCODEJPGLIST"
                fit="cover"
              />
              <template #reference>
                <el-button
                  ><el-icon><QuestionFilled /></el-icon
                ></el-button>
              </template>
            </el-popover>
          </template>
          <!-- 点击查看密码和隐藏密码 -->
          <template #append v-if="item.prop === 'password'">
            <el-popover placement="top" :width="150" trigger="hover">
              <h5 class="center" v-show="!showPwd">点击查看小鱼码</h5>
              <h5 class="center" v-show="showPwd">点击隐藏小鱼码</h5>
              <template #reference>
                <el-button @click="showPwd = !showPwd">{{
                  showPwd ? "👀" : "🙈"
                }}</el-button>
              </template>
            </el-popover>
          </template>
          <!-- 点击刷新验证码 -->
          <template v-if="item.prop === 'code'" #append>
            <el-popover placement="top" :width="150" trigger="hover">
              <h5 class="center">点击刷新小鱼验证码</h5>
              <template #reference>
                <el-button @click="changeCaptcha">{{ captcha }}</el-button>
              </template>
            </el-popover>
          </template>
        </el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-checkbox v-model="formData.rememberMe">记住小鱼号</el-checkbox>
      <div style="position: absolute; right: 0; font-weight: 500">
        <el-tooltip placement="top" effect="light">
          网站二维码
          <template #content>
            <img
              style="width: 200px; height: 200px"
              src="../../../../../public/PhaseThree/xiaoyuerQRCode.png"
            />
          </template>
        </el-tooltip>
      </div>
    </el-form-item>
    <!-- 登录按钮 -->
    <el-form-item>
      <el-button
        style="width: 100%"
        size="large"
        @click="handleLogin"
        :disabled="!isSubmit"
        :class="{
          'submit-btn': isSubmit,
          'unSubmit-btn': !isSubmit,
        }"
      >
        登录
      </el-button>
    </el-form-item>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-checkbox v-model="formData.respect">
        拥护且同意小鱼儿🏠の
        <el-button
          style="margin-left: -12px"
          type="primary"
          link
          @click="router.push('/agreement')"
          >《用户协议》</el-button
        >
        <span style="margin: 0 -7px">和</span>
        <el-button type="primary" link @click="router.push('/privacy')"
          >《隐私政策》</el-button
        >
      </el-checkbox>
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
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
  background: linear-gradient(270deg, #c4c4c4 0%, #e5e5e5 100%) !important;
  border-radius: 4px;
  text-align: center;
  color: #666 !important;
}
</style>
