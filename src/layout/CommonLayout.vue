<script setup>
import Header from "@/components/common/header/index.vue";
import Footer from "@/components/common/footer/index.vue";
import { ref, onMounted } from "vue";

const isHeaderSticky = ref(false);
const showBackToTop = ref(false);
const hoverBackToTop = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
  const scrollY = window.scrollY;
  isHeaderSticky.value = scrollY > 0;
  showBackToTop.value = scrollY > 0; // 显示返回顶部按钮的阈值，根据需要调整
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <!-- 头部 -->
  <el-container>
  <el-header>
    <div :class="{ 'sticky-header': isHeaderSticky }">
      <Header />
      <el-divider v-if="isHeaderSticky" style="margin: 0" />
    </div>
  </el-header>
  <!-- 主要内容区域 -->
  <el-main>
    <router-view></router-view>
  </el-main>

  <!-- 水平分割线 -->
  <el-divider style="margin: 0" />
  <el-footer>
  <!-- 底部 -->
  <Footer />
    </el-footer>
  </el-container>
  <!-- 返回顶部按钮 -->
  <div
    v-if="showBackToTop"
    class="back-to-top"
    @click="scrollToTop"
    @mouseover="hoverBackToTop = true"
    @mouseleave="hoverBackToTop = false"
  >
    返回顶部
  </div>
</template>

<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer {
  margin: 0;
  padding: 0;
}
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.1s;
  background-image: radial-gradient(transparent 1px, #e6e8eb 20px);
  background-size: 4px 4px;
  backdrop-filter: saturate(100%) blur(400px);
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #909399;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-to-top:hover {
  background-color: #39c5bb;
}
@media screen and (max-width: 600px) {
  .back-to-top{
    display: none;
  }
}
</style>
