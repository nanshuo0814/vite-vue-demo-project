<template>
  <div container>
    <div class="login-container">
      <Header />
      <el-divider style="margin: 0" />
      <Form />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from "@/views/login/footer/index.vue";
import Header from "@/views/login/header/index.vue";
import Form from "@/views/login/form/index.vue";

</script>

<style lang="scss" scope>
/* ... (样式内容) */
.login-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
