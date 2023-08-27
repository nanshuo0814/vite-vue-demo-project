import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import piniaPluginPersist  from "pinia-plugin-persist";

// 创建 Vue 应用实例
const app = createApp(App);

// 创建 Pinia 实例并使用 piniaPluginPersist 插件
const pinia = createPinia();
pinia.use(piniaPluginPersist);

// 将 Element Plus 的图标组件注册为全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 使用 Pinia 和 Vue Router，将 Pinia 实例和 Vue Router 实例注册到应用中
app.use(pinia).use(router);

// 将 Vue 应用实例挂载到具有 id 为 "app" 的 HTML 元素上，启动应用
app.mount("#app");
