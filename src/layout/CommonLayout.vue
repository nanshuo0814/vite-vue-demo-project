<script setup>
import Header from "@/components/common/header/index.vue";
import Footer from "@/components/common/footer/index.vue";
</script>

<template>
  <!-- 回到顶部的按钮 -->
      <!-- <el-backtop :right="50" :bottom="650">
      <el-button type="success" plain
        ><el-icon><Top /></el-icon>回到顶部</el-button
      ></el-backtop
    > -->
  <!-- 页面布局容器 -->
  <div class="container">
    <!-- 头部 -->
    <Header />

    <!-- 水平分割线 -->
    <!-- <el-divider style="margin: 0" /> -->

    <!-- 主要内容区域 -->
    <el-main>
      <router-view></router-view>
      <!-- 使用 Vue Router 渲染不同页面 -->
    </el-main>

    <!-- 水平分割线 -->
    <el-divider style="margin: 0" />

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  /* 让容器占据整个视窗的高度 */
  // height: 100vh;
  /* 让容器占据整个视窗的宽度 */
  // width: 100%;
  /* 重置 el-header、el-main 和 el-footer 的 margin 和 padding */
  .el-header,
  .el-main,
  .el-footer {
    margin: 0;
    padding: 0;
  }
}
</style>
