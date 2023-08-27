// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import { userAuthStore } from "@/store/user";
import Test from "@/views/Test.vue";
import Login from "@/views/login/index.vue";
import Index from "@/views/Index.vue";
import agreement from "@/views/repeat/agreement.vue";
import privacy from "@/views/repeat/privacy.vue";
import silingyi from "@/views/error/401.vue";
import silingsan from "@/views/error/403.vue";
import silingsi from "@/views/error/404.vue";

// 定义路由页面
const routes = [
  // TestView
  {
    path: "/test",
    name: "测试",
    component: Test,
    meta: {
      // 需要权限
      isAdmin: true, // 管理员权限
      // isUser: true, // 用户权限
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
    component: Index,
  },
  // loginView
  {
    path: "/login",
    name: "登录",
    component: Login,
    meta: {
      layout: "blank",
    },
  },

  // 用户协议View
  {
    path: "/agreement",
    name: "用户协议",
    component: agreement,
    meta: {
      layout: "blank",
    },
  },
  // 隐私协议View
  {
    path: "/privacy",
    name: "隐私协议",
    component: privacy,
    meta: {
      layout: "blank",
    },
  },
  // 未授权View
  {
    path: "/401",
    name: "未授权",
    component: silingyi,
    meta: {
      layout: "blank",
    },
  },
  // 禁止访问View
  {
    path: "/403",
    name: "禁止访问",
    component: silingsan,
    meta: {
      layout: "blank",
    },
  },
  // 资源不存在View
  {
    path: "/:pathMatch(.*)*",
    name: "资源不存在",
    component: silingsi,
    meta: {
      layout: "blank",
    },
  },
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由跳转页面前操作
router.beforeEach((to, from, next) => {
  const store = userAuthStore(); // 获取用户权限状态的 store
  store.getUserInfo(); // 获取用户信息，可能是异步操作
  const { isAdmin, notLogin } = store.status; // 获取状态是否登录和权限
  // 获取页面的权限
  const user = to.meta.isUser;
  const admin = to.meta.isAdmin;
  // debugger
  // 用户状态不是登录
  if (notLogin) {
    // 去往的页面不是首页和登录页
    if (to.path !== "/index" && to.path !== "/" && to.path !== "/login") {
      // 判断需要权限
      if (user || admin) {
        // 去401页面,让用户选择去登录页还是返回上一步
        router.push("/401");
      } else {
        // 放行
        next();
      }
    } else {
      // 放行,是去登录页或首页
      next();
    }
  } else {
    // 用户状态是登录
    // 如果去往的页面需要管理员权限
    if (admin) {
      // 如果是管理员
      if (isAdmin) {
        next();
      } else {
        // 提示用户无权限,选择跳转去登录页还是返回上一步
        router.push("/403");
      }
    } else {
      // 不需要管理员权限
      next();
    }
  }
});

export default router;
