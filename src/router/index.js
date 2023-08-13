// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import VueCookie from "vue-cookie";
import { ElMessage } from "element-plus";

const routes = [
  // TestView
  {
    path: "/test",
    name: "测试",
    component: () => import(/* @vite-ignore */ `../views/Test.vue`),
    meta: {
      // 需要权限
      authorize: false,
      layout: "blank", 
    },
  },
  // 首页
  {
    path: "/",
    // 重定向
    redirect: "/index",
  },
  {
    path: "/index",
    name: "首页",
    component: () => import(/* @vite-ignore */ `../views/Index.vue`),
  },
  // loginView
  {
    path: "/login",
    name: "登录",
    component: () => import(/* @vite-ignore */ `../views/Login.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },

  // 用户协议View
  {
    path: "/agreement",
    name: "用户协议",
    component: () => import(/* @vite-ignore */ `../views/repeat/agreement.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
  // 隐私协议View
  {
    path: "/privacy",
    name: "隐私协议",
    component: () => import(/* @vite-ignore */ `../views/repeat/privacy.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
  // 未授权View
  {
    path: "/401",
    name: "未授权",
    component: () => import(/* @vite-ignore */ `../views/error/401.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
  // 禁止访问View
  {
    path: "/403",
    name: "禁止访问",
    component: () => import(/* @vite-ignore */ `../views/error/403.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
  // 资源不存在View
  {
    path: "/:pathMatch(.*)*",
    name: "资源不存在",
    component: () => import(/* @vite-ignore */ `../views/error/404.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
  // xiaoyuerView
  {
    path: "/xiaoyuer",
    name: "xiaoyuerPersonPage",
    component: () => import(/* @vite-ignore */ `../views/xiaoyuer/index.vue`),
    meta: {
      authorize: false,
      layout: "blank", 
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// import CryptoJS from "crypto-js";

//若无token，则跳回登录页面
router.beforeEach((to, from, next) => {
  
  // token,用cookie来测试
  const token = VueCookie.get("xiaoyuhaoToken");
  // 判断是否跳转到登录页
  if (!token && to.path != "/login" && to.meta.authorize && to.path != "/index") {
    router.push("/login");
    ElMessage({
      message: `登录状态已过期或无权限查看,请联系xiaoyuer或重新登录!!!`,
      type: "warning",
    });
  } else if (token) {
    const currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + 30 * 60 * 1000); // 半个小时
    VueCookie.set("xiaoyuhaoToken", token, {
      expires: currentTime,
    });
  }
  // 放行
  next();
});
export default router;
