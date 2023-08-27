<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
  <div class="header-box">
    <div class="title-box">
      <span class="fish" style="margin-left: -12px"></span>
      <span class="title">小鱼儿の🏠</span>
    </div>
    <el-switch
      style="position: absolute; right: 0; margin: 20px"
      v-model="isDark"
    />
  </div>
</template>

<style lang="scss" scoped>
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
      margin-left: 15%;
      color: orange;
      font-weight: bolder;
    }
    .fish {
      width: 50px;
      height: 50px;
      background: url(@/assets/yu.png) center/cover no-repeat; /* 替换为你的鱼图 url */
      animation: swim 4s linear infinite;
      transform-style: preserve-3d;
    }
  }
}
</style>
