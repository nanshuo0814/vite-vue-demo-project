<template>
  <div>
    <Suspense>
      <template #default>
        <component :is="resolvedLayoutComponent">
          <router-view></router-view>
        </component>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const resolvedLayoutComponent = computed(() => {
  if (route.meta.layout === "blank") {
    return "div";
  } else {
    // 在动态导入语句上添加 /* @vite-ignore */ 注释
    return defineAsyncComponent(() =>
      import(/* @vite-ignore */ `./components/CommonLayout.vue`)
    );
  }
});
</script>

<style lang="scss" scoped></style>
