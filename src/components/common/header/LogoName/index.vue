<script setup>
import router from '@/router';

// 定义一个刷新页面的函数
const refreshPage = () => {
  // 如果当前页面不是根路径或者不是 /index 页面
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/index"
  ) {
    // 导航到 /index 页面
    router.push("/index");
  } else {
    // 重新加载页面
    location.reload();
  }
};
</script>

<template>
  <div class="primary-title">
    <!-- 点击图片和文字时调用刷新页面函数 -->
    <img src="/public/PhaseOne/xiaoyuer.png" @click="refreshPage()" />
    <span class="title" @click="refreshPage()">小鱼儿</span>
  </div>
</template>

<style lang="scss" scoped>
.primary-title {
  position: absolute;
  width: 150px;
  height: 60px;
  margin-left: 2%;

  img {
    height: 50px;
    width: 50px;
    margin: 10px;
    margin-right: 0px;
    margin-top: 5px;
  }

  .title {
    position: absolute;
    font-size: 30px;
    margin: 13px 0px 0px 0px;
    font-weight: bolder;
  }

  .title:hover {
    background-color: #39c5bb;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }
}
</style>
