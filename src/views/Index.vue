<script setup>
const goVite = () => {
  window.open("https://cn.vitejs.dev/", "_blank");
};
const goVue = () => {
  window.open("https://cn.vuejs.org/", "_blank");
};
const goElment = () => {
  window.open("https://element-plus.gitee.io/zh-CN/", "_blank");
};
</script>

<template>
  <div class="container">
    <div class="title">
      <div class="xiaoyuer-title">Xiaoyuer</div>
      <div class="other-title" style="margin-bottom: 10px">
        Learning Resource Website
      </div>
      <div class="cards-box">
        <el-button class="cards"  style="margin-right: 20px;" @click="goVite"
          ><img
            src="../../src/assets/Vite.png"
            style="width: 50px; height: 50px"
          /><span class="text" style="color: orange">Vite</span></el-button
        >
        <el-button class="cards" style="margin-right: 20px;" @click="goVue"
          ><img
            src="../../src/assets/Vue.png"
            style="width: 60px; height: 60px"
          /><span class="text" style="color: rgb(64, 226, 64)"
            >Vue</span
          ></el-button
        >
        <el-button class="cards" style="margin-right: 20px;" @click="goElment"
          ><img
            src="../../src/assets/element-plus-logo.svg"
            style="width: 150px; height: 100px"
        /></el-button>
      </div>
    </div>
    <div class="image-container">
      <img class="img" src="../../public/PhaseThree/index.svg" />
    </div>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  .title {
    margin-top: 40px;
    .xiaoyuer-title {
      font-size: 4rem;
      color: #e4de1f;
    }
    .other-title {
      font-size: 40px;
    }
    .cards-box {
      margin-top: 50px;
      .el-button + .el-button {
        margin: 0;
      }
      .cards {
        width: 200px;
        height: 50px;
        .text {
          font-size: 30px;
        }
      }
    }
  }
  .image-container {
    margin-top: 50px;
    .img {
      width: 400px;
      height: 300px;
    }
  }
}

@media screen and (max-width: 960px) {
}
</style>
