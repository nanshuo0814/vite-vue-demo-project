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
      <div class="xiaoyuer-title">Xiaoyuer</div>
      <div class="other-title">Learning Resource Website</div>
      <div class="cards-box">
        <el-button v-for="resource in resources" :key="resource.name" class="cards"
          @click="() => openLink(resource.link)">
          <img :src="resource.imgSrc" :style="{ width: resource.width, height: resource.height }" />
          <span v-if="resource.name !== 'Element Plus'" class="text" :style="{ color: resource.color }">{{ resource.name
          }}</span>
        </el-button>
      </div>
    </div>
    <div class="image-container">
      <img class="img" src="../../public/PhaseThree/index.svg" />
    </div>
  </div>

  <!-- <div class="left-text-right-image">
    <div class="left">
      <div class="xiaoyuer-title">Xiaoyuer</div>
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
    <div class="right">
      <img class="img" src="../../public/PhaseThree/index.svg" />
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
// .left-text-right-image {
//   display: flex;
//   align-items: center;
// }

// .left {
//   flex: 1;
//   padding: 20px;
//   .xiaoyuer-title {
//     font-size: 28px;
//   }
// }

// .right {
//   flex: 1;
//   padding: 20px;
// }

// .right img {
//   max-width: 100%;
//   height: auto;
//   background-color: red;
//   // width: 320px;
//   // height: 320px;
// }

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
      margin-bottom: 10px;
    }

    .cards-box {
      margin-top: 50px;

      .cards {
        width: 200px;
        height: 50px;
        margin-right: 20px;

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
</style>
