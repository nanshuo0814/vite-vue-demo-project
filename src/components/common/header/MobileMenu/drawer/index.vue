<script setup>
import avatar from "./avatar/index.vue";
import PageFooting from "./PageFooting/index.vue";
import Menu from "./menu/index.vue";
</script>

<template>
  <!-- 用户头像区域 -->
  <avatar/>
  
  <el-divider />

  <!-- 菜单 -->
  <Menu />

  <el-divider />

  <!-- 页尾 -->
  <PageFooting />
</template>

<style lang="scss" scoped></style>
