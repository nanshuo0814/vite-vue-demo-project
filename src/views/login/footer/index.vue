<script setup></script>

<template>
  <div class="footer-box">
    <div class="footer-title">
      <div>
        Copyright © 2023-2024
        <a href="https://github.com/xiaoyuer-icu/xiaoyuer" target="_blank"
          >xiaoyuer</a
        >
      </div>
      <div class="fish" style="margin-left: 22px"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

    .center {
      text-align: center;
    }
    .fish {
      width: 22px;
      height: 22px;
      background: url(@/assets/yu.png) center/cover no-repeat; /* 替换为你的鱼图 url */
      animation: swim 4s linear infinite;
      transform-style: preserve-3d;
    }
  }
}
@media screen and (min-width: 960px) and (max-width: 1200px) {
  .footer-box {
    margin: 0 auto;
    width: 720px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 2560px) {
  .footer-box {
    margin: 0 auto;
    width: 720px;
  }
}
</style>
