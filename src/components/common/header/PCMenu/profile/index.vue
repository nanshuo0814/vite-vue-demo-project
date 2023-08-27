<script setup>
import { toRefs } from "vue";
import vc from "@/utils/CookieManager";
import em from "@/utils/message";
import {
  TOKEN_COOKIE_NAME,
  ROLES_COOKIE_NAME,
  ICU_COOKIE_NAME,
} from "@/utils/constant";
import LINKS from "@/utils/link";
import { userAuthStore } from "@/store/user";

const store = userAuthStore();
const { status, userInfo } = toRefs(store);

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

const openBlog = () => {
  window.open(LINKS.BOLG_LINK, "_blank");
};

// 打开用户信息
const openUserInfo = () => { 
  // 获取用户信息
  // TODO 以后要是加上了一个用户主页的话就在那个方法里获取用户信息store.getUserInfo();
  store.getUserInfo();
}
</script>

<template>
  <span v-if="status.notLogin" class="notLogin">
    <router-link to="/login" style="text-decoration: none">未登录</router-link>
  </span>
  <span v-else class="avatar">
    <el-dropdown trigger="click" >
      <el-avatar @click="openUserInfo" :size="45" :src="userInfo.avatar" />
      <template #dropdown>
        <el-dropdown-item v-if="status.isAdmin" @click="openBlog">
          <el-icon size="17"> <Promotion /> </el-icon>博客
        </el-dropdown-item>
        <el-dropdown-item @click="logout"
          ><el-icon size="17"> <SwitchButton /> </el-icon>退出</el-dropdown-item
        >
      </template>
    </el-dropdown>
  </span>
</template>

<style lang="scss" scoped>
.avatar {
  position: absolute;
  right: 5px;
  margin: 0;
  top: -2px;
}
.notLogin {
  position: absolute;
  right: 0;
  top: 10px;
}
</style>
