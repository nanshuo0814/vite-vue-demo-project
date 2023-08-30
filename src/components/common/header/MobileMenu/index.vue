<script setup>
import { ref } from "vue";
import drawerItems from "./drawer/index.vue";
import { userAuthStore } from "@/store/user";

const store = userAuthStore();

const drawer = ref(false);
const openMenu = () => {
  drawer.value = true;
  store.getUserInfo();
};
</script>

<template>
  <div class="menu-box">
    <!-- 点击按钮打开抽屉菜单 -->
    <el-button type="success" @click="openMenu()" v-if="!drawer">
      <el-icon size="30"><More /></el-icon>
    </el-button>
  </div>
  <el-drawer v-model="drawer" :with-header="false" size="80%">
    <!-- 菜单区 -->
    <drawerItems />
  </el-drawer>
</template>

<style lang="scss" scoped>
.menu-box {
  position: absolute;
  right: 10px;
  top: 6px;
  .menus-items {
    text-align: center;
    margin: 30px;
    .menus-title {
      margin-top: 30px;
      .resource-drawer {
        .el-button {
          margin-top: 18px;
          font-size: 22px;
          width: 100%;
        }
        .el-button + .el-button {
          margin-left: 0px;
        }
      }
    }
  }
}
@media screen and (min-width: 600px) {
  .menu-box {
    display: none;
  }
}
</style>
