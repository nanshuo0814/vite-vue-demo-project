<script setup></script>

<template>
  <div class="container">
    <el-container>
      <el-header
        ><div class="header-box">
          <div class="title-box">
            <span class="fish" style="width: 35px; height: 35px"></span>
            <span class="title" @click="refreshPage()">小鱼儿</span>
          </div>
        </div></el-header
      >
      <el-main><router-view></router-view></el-main>
      <el-footer
        ><div class="footer-box">
          <div class="footer-title">
            <div>
              Copyright © 2023-2024
              <a href="https://github.com/YDG-0814/xiaoyuer" target="_blank"
                >xiaoyuer</a
              >
            </div>
            <div class="fish" style="margin-left: 22px"></div>
          </div></div
      ></el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: #fff;

  .header-box {
    position: relative;
    top: 0;
    width: 100%;
    height: 50px;
    background: #ffffff;
    box-shadow: 0 2px 20px rgba(202, 208, 217, 0.5);

    .title-box {
      position: absolute;
      width: 400px;
      height: 70px;
      margin-left: 2%;
      span {
        position: absolute;
        margin: 10px;
        margin-right: 15%;
      }

      .title {
        position: absolute;
        font-size: 30px;
        margin: 10px;
        margin-left: 17%;
        color: orange;
        font-weight: bolder;
      }
      .title:hover {
        // background-color: #00c4b6;
        background-color: #39c5bb;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .footer-box {
    height: 5%;

    .footer-title {
      font-size: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: #34a672;
        font-size: 22px;
      }
    }
  }
}

.fish {
  width: 22px;
  height: 22px;
  background: url(../assets/yu.png) center/cover no-repeat;
  /* 替换为你的鱼图 url */
  animation: swim 4s linear infinite;
  transform-style: preserve-3d;
}

.center {
  text-align: center;
}

@keyframes swim {
  0% {
    transform: translateX(0px) rotateY(0deg);
  }
  25% {
    transform: translateX(-20px) rotateY(0deg);
  }
  50% {
    transform: translateX(-20px) rotateY(180deg);
  }
  75% {
    transform: translateX(20px) rotateY(180deg);
  }
  88% {
    transform: translateX(20px) rotateY(0deg);
  }
  100% {
    transform: translateX(0px) rotateY(0deg);
  }
}
</style>
