<!-- 暗黑模式组件 -->
<script setup>
import { useDark } from "@vueuse/core";
import { Sunny, Sunrise } from "@element-plus/icons-vue";
const isDark = useDark();
</script>

<template>
  <el-switch
    class="dark"
    v-model="isDark"
    :active-action-icon="Sunrise"
    :inactive-action-icon="Sunny"
  />
</template>
<style lang="scss" scoped>
.dark {
  font-size: 17px;
  --el-switch-on-color: rgb(235, 194, 194);
  --el-switch-off-color: rgb(194, 200, 235);
  --el-switch-border-color: #b7bac1;
}
</style>
