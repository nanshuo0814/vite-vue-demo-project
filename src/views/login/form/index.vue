<script setup>
import Items from "./items/index.vue";
</script>

<template>
  <div class="login-box">
    <!-- 页面左边的logo图片 -->
    <div class="login-left-box">
      <img src="../../../../public/PhaseOne/xiaoyuer.png" />
    </div>
    <!-- 页面右边的Login表单盒子 -->
    <div class="form-box">
      <div class="login-form">
        <div class="login-title">小鱼儿の藏宝地</div>
        <!-- 登录表单盒子 -->
        <Items />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-box {
  height: 85%;
  min-height: calc(100% - 156px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  .form-box {
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
@media screen and (max-width: 960px) {
  .login-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login-left-box {
    display: none;
  }
}
@media screen and (min-width: 960px) and (max-width: 1200px) {
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

@media screen and (min-width: 1200px) and (max-width: 2560px) {
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
</style>