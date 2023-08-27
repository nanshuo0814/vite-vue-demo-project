<script setup>
import { WXRQCODEJPGLIST, WXRQCODEJPG } from "@/utils/constant";
</script>

<template>
  <div class="footer">
    <!-- 更多功能和二维码 -->
    <div>更多功能正在开发中...</div>
    <div class="think">有想法的同学可以联系我哦</div>
    <el-image
      class="img"
      :src="WXRQCODEJPG"
      :zoom-rate="1.2"
      :preview-src-list="WXRQCODEJPGLIST"
      fit="cover"
    />
  </div>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  .think {
    margin-bottom: 10px;
  }
  .img {
    width: 200px;
    height: 274px;
  }
}
</style>
