<script setup>
import LogoName from "./LogoName/index.vue";
import PCMenu from "./PCMenu/index.vue";
import MobileMenu from "./MobileMenu/index.vue";
</script>
<template>
  <el-header>
    <!-- 导航栏盒子 -->
    <div class="header-box">
      <!-- 主页名字和logo -->
      <LogoName />
      <!-- PC端菜单 -->
      <PCMenu />
      <!-- 手机端菜单和logo -->
      <MobileMenu />
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.header-box {
  position: relative;
  top: 0;
  height: 60px;
}
</style>
