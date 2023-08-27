<script setup>
import { toRefs } from "vue";
import dark from "../../../dark/index.vue";
import vc from "@/utils/CookieManager";
import LINKS from "@/utils/link";
import em from "@/utils/message";
import {
  TOKEN_COOKIE_NAME,
  ROLES_COOKIE_NAME,
  ICU_COOKIE_NAME,
} from "@/utils/constant";
import { userAuthStore } from "@/store/user";

// 获取用户身份和信息的 store 实例
const store = userAuthStore();
const { status, userInfo } = toRefs(store);

// 打开博客链接
const openBlog = () => {
  window.open(LINKS.BOLG_LINK, "_blank");
};

// 退出功能
const logout = () => {
  em.showCustomConfirmMessageBox(
    "你是否确定退出登录?",
    "温馨提示",
    "确定",
    "取消"
  )
    .then(() => {
      // 删除Cookie
      vc.deleteCookie(TOKEN_COOKIE_NAME);
      vc.deleteCookie(ROLES_COOKIE_NAME);
      vc.deleteCookie(ICU_COOKIE_NAME);
      em.showSuccessMessage("退出登录成功!");
      // 刷新页面
      location.reload();
    })
    .catch(() => {
      em.showInfoMessage("已取消退出登录!");
    });
};
</script>

<template>
  <div class="avatar-box">
    <div class="left-section">
      <!-- 显示登录链接或用户头像 -->
      <span class="login-link" v-if="status.notLogin">
        <div>
          <router-link to="/login">
            <el-avatar :size="100">
              <img src="@/assets/not-login.png" />
            </el-avatar>
          </router-link>
        </div>
      </span>
      <span v-else>
        <el-avatar class="avatar" :size="45" :src="userInfo.avatar" />
      </span>
    </div>
    <div class="right-section">
      <!-- 切换深浅色模式开关 -->
      <span class="dark"><dark size="large"/></span>
      <!-- 显示登录提示或博客链接 -->
      <div v-if="status.notLogin" class="notLogin">←点击左边头像去登录</div>
      <el-button
        type="primary"
        v-if="status.isAdmin"
        @click="openBlog"
        class="admin-home"
      >
        <el-icon size="17"> <Promotion /> </el-icon>博客
      </el-button>
      <!-- 显示退出按钮 -->
      <el-button
        v-if="status.isUser"
        type="danger"
        @click="logout"
        class="logout"
      >
        <el-icon size="17"> <SwitchButton /> </el-icon>退出
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar-box {
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .left-section {
    width: 100%;
    display: flex;
    margin-left: 20px;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .el-button + .el-button {
      margin-left: 0;
    }

    .admin-home {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .logout {
      margin-bottom: 22px;
      font-size: 18px;
    }

    .dark {
      margin-bottom: 5px !important;
    }

    .notLogin {
      margin-bottom: 10px;
      font-size: 22px;
    }
  }

  .avatar {
    width: 110px;
    height: 110px;
  }

  .login-link {
    margin-left: 10px;
    align-items: center;
  }
}
</style>
