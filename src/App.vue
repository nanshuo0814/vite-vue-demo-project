<template>
  <div>
    <!-- 使用 Suspense 包裹异步组件 -->
    <Suspense>
      <template #default>
        <!-- 根据 resolvedLayoutComponent 动态渲染布局组件 -->
        <component :is="resolvedLayoutComponent">
          <!-- 渲染路由视图 -->
          <router-view></router-view>
        </component>
      </template>
      <template #fallback>
        <!-- 加载中状态时显示 Loading 组件 -->
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import Loading from "@/components/common/Loading/index.vue";

// 获取当前路由
const route = useRoute();

// 根据路由的 meta 信息确定要渲染的布局组件
const resolvedLayoutComponent = computed(() => {
  if (route.meta.layout === "blank") {
    // 如果布局为 "blank"，则直接使用 <div> 作为空白布局
    return "div";
  } else {
    // 如果布局不是 "blank"，动态导入 CommonLayout.vue 布局组件
    // 使用 /* @vite-ignore */ 注释来避免 Vite 的类型检查错误
    return defineAsyncComponent(() =>
      import(/* @vite-ignore */ `./layout/CommonLayout.vue`)
    );
  }
});
</script>

<style lang="scss" scoped></style>
