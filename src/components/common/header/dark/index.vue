<!-- 暗黑模式组件 -->
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark(); // 暗黑模式true
// import { Sunny, Sunrise } from "@element-plus/icons-vue";
</script>

<template>
  <!-- 方案一: 使用ElementPlus官方的组件库 -->
  <!-- <el-switch
    class="dark"
    v-model="isDark"
    :active-action-icon="Sunrise"
    :inactive-action-icon="Sunny"
  /> -->
  <!-- 方案二: 自定义的样式 -->
  <!-- <div class="font">{{ isDark ? "关灯啦" : "开灯啦" }}</div> -->
  <div
    class="switch"
    :class="isDark ? '' : 'light'"
    @click="isDark = !isDark"
  >
    <div class="bar"></div>
  </div>
</template>
<style lang="scss" scoped>
// 方案一
// .dark {
//   font-size: 17px;
//   --el-switch-on-color: rgb(194, 200, 235);
//   --el-switch-off-color: rgb(194, 200, 235);
//   --el-switch-border-color: #b7bac1;
// }
// 方案二
.font {
  font-size: 15px;
  margin-top: -18px;
  text-align: center;
}
.switch {
  padding: 5px;
  padding-left: 3px;
  transition: 3s ease-in-out;
  width: 40px;
  height: 13px;
  border-radius: 50px;
  background: lightslategray;
  // box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0);
   box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* 添加光标样式来表示可以点击 */
}

.bar {
  width: 17px;
  height: 17px;
  margin-top: -2px;
  background: rgb(194, 200, 235);
  border-radius: 50%;
  transition: 0.3s ease-in-out !important;
  transform: translateX(25px);
  /* 初始位置 */
}

.light .bar {
  transform: translateX(0px);
  /* 切换到亮色主题时的位置 */
}
</style>
