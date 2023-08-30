<script setup>
import { onBeforeMount } from "vue";
import { userAuthStore } from "@/store/user";
// 抽象出打开链接的函数
const openLink = (url) => {
  window.open(url, "_blank");
};

const resources = [
  {
    name: "Vite",
    imgSrc: "PhaseOne/Vite.png",
    link: "https://cn.vitejs.dev/",
    color: "orange",
    width: "50px",
    height: "50px",
  },
  {
    name: "Vue",
    imgSrc: "PhaseOne/Vue.png",
    link: "https://cn.vuejs.org/",
    color: "rgb(64, 226, 64)",
    width: "60px",
    height: "60px",
  },
  {
    name: "Element Plus",
    imgSrc: "PhaseOne/element-plus-logo.svg",
    link: "https://element-plus.gitee.io/zh-CN/",
    width: "150px",
    height: "100px",
  },
];

const useUserStore = userAuthStore();

onBeforeMount(() => {
  useUserStore.getUserInfo();
  useUserStore.getStatus();
});
</script>

<template>
  <div class="container">
    <div class="title">
      <div class="xiaoyuer-title">Xiaoyuer<span>V2.2.2</span></div>
      <div class="other-title">Learning Resource Website</div>
      
      <div class="cards-box">
        <el-button
          v-for="resource in resources"
          :key="resource.name"
          class="cards"
          @click="() => openLink(resource.link)"
        >
          <img
            :src="resource.imgSrc"
            :style="{ width: resource.width, height: resource.height }"
          />
          <span
            v-if="resource.name !== 'Element Plus'"
            class="text"
            :style="{ color: resource.color }"
            >{{ resource.name }}</span
          >
        </el-button>
      </div>
    </div>
    <div class="image-container">
      <img src="../../public/PhaseThree/index.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  img {
    width: 300px;
    height: 250px;
  }
  .el-button+.el-button {
    margin-left: 0px;
}
}

.container {
  text-align: center;

  .title {
    margin-top: 40px;

    .xiaoyuer-title {
      font-size: 4rem;
      color: #e4de1f;
      span{
        background-color: #626aef;
        color: white;
        border-radius: 10px;
        font-size: 20px;
        padding: 5px;
        padding-bottom: 0;
        padding-top: 0;
      }
    }

    .other-title {
      font-size: 40px;
      margin-bottom: 10px;
    }
    .cards-box {
      margin-top: 50px;

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

    // img {
    //   width: 400px;
    //   height: 300px;
    // }
  }
}
</style>
