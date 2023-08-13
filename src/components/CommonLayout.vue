<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import router from "../router";
import { useDark } from "@vueuse/core";
import VueCookie from "vue-cookie";
const isDark = useDark();
import CryptoJS from "crypto-js";
import { Sunny, Opportunity } from "@element-plus/icons-vue";

import { ElMessage, ElMessageBox } from "element-plus";

const exit = () => {
  ElMessageBox.confirm("你是否确定退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      VueCookie.delete("xiaoyuhaoToken");
      // 刷新页面
      location.reload();
      ElMessage({
        type: "success",
        message: "退出登录成功!",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消退出登录!",
      });
    });
};

const refreshPage = () => {
  if (
    window.location.pathname !== "/" ||
    window.location.pathname !== "/index"
  ) {
    router.push({ path: "/index" });
  } else {
    window.location.reload();
  }
};
const isLogin = ref(false);
const getLoginStatus = () => {
  const info = VueCookie.get("xiaoyuhaoToken");
  if (info) {
    isLogin.value = true;
  }
};
const isAdmin = computed(() => {
  const token = VueCookie.get("xiaoyuhaoToken");
  try {
    const tokenJson = JSON.parse(token);
    const isAdminToken = tokenJson.token;
    return isAdminToken === CryptoJS.MD5("1").toString();
  } catch (error) {
    const currentTime = new Date();
    console.log(
      `当前处于未登录状态,请先登录... (${currentTime.toLocaleString()})`
    );
  }
});
const state = reactive({
  xiaoyuer: "/public/PhaseOne/profile.jpg",
  yuzai: "/public/PhaseOne/xiaoyuer.png",
});
const avatar = ref(isAdmin.value ? state.xiaoyuer : state.yuzai);
onMounted(() => {
  getLoginStatus();
});
const ai = () => {
  window.open("https://c2.binjie.fun/", "_blank");
};
const xiaopozhan = () => {
  window.open("https://ydg.icu/", "_blank");
};
</script>

<template>
  <div class="container">
    <el-header>
      <div class="header-box">
        <div class="title-box">
          <img
            src="../../public/PhaseOne/xiaoyuer.png"
            @click="refreshPage()"
          />
          <span class="title" @click="refreshPage()">小鱼儿</span>
        </div>
        <div class="other-header">
          <div class="resource">
            <el-dropdown trigger="click">
              <span>资源</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="ai">AI国内网站</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <span class="dark">
            <el-switch
              v-model="isDark"
              :active-action-icon="Opportunity"
              :inactive-action-icon="Sunny"
            />
          </span>
          <span v-if="!isLogin" class="notLogin">
            <router-link to="/login" style="text-decoration: none"
              >未登录</router-link
            >
          </span>
          <span v-else class="avatar">
            <el-dropdown trigger="click">
              <el-avatar :size="45" :src="avatar" />
              <template #dropdown>
                <el-dropdown-item v-if="isAdmin" @click="xiaopozhan">
                  <el-icon size="17"> <Promotion /> </el-icon>小破站
                </el-dropdown-item>
                <el-dropdown-item @click="exit"
                  ><el-icon size="17"> <SwitchButton /> </el-icon
                  >退出</el-dropdown-item
                >
              </template>
            </el-dropdown>
          </span>
        </div>
      </div>
    </el-header>
    <el-divider style="margin: 0" />
    <el-main><router-view></router-view></el-main>
    <el-divider style="margin: 0" />
    <el-footer>
      <div class="footer-box">
        <div class="footer-title">
          <div>
            Copyright © 2023-2024
            <a href="https://github.com/xiaoyuer-icu/xiaoyuer" target="_blank"
              >xiaoyuer</a
            >
          </div>
          <div class="fish"></div>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;

  .el-header {
    margin: 0;
    padding: 0;
    // box-shadow: 0 2px 20px rgba(202, 208, 217, 0.5);
  }

  .el-main {
    // background-color: gray;
    // box-shadow: 0 2px 20px rgba(48, 83, 135, 0.5);
  }

  .el-footer {
    margin: 0;
    padding: 0;
    // box-shadow: 0 2px 20px rgba(202, 208, 217, 0.5);
  }

  .header-box {
    position: relative;
    top: 0;
    height: 60px;

    .title-box {
      position: absolute;
      width: 150px;
      height: 60px;
      margin-left: 2%;

      img {
        height: 50px;
        width: 50px;
        margin: 10px;
        margin-right: 0px;
        margin-top: 5px;
      }

      .title {
        position: absolute;
        font-size: 30px;
        margin: 13px 0px 0px 0px;
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

      img {
        cursor: pointer;
      }
    }

    .other-header {
      width: 380px;
      height: 50px;
      position: absolute;
      right: 0;
      margin: 10px;
      font-size: 20px;

      .resource {
        position: absolute;
        right: 32%;
        top: 10px;
        cursor: pointer;

        span {
          font-size: 1.3rem;
        }
      }

      .notLogin {
        position: absolute;
        right: 0;
        top: 10px;
      }

      .avatar {
        position: absolute;
        right: 5px;
        margin: 0;
        top: -2px;
      }

      .dark {
        position: absolute;
        right: 18%;
        margin-top: 6px !important;
      }
    }
  }

  .footer-box {
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
  margin-left: 18px;
}

.center {
  text-align: center;
}

@keyframes swim {
  0% {
    transform: translateX(0px) rotateY(0deg);
  }

  25% {
    transform: translateX(-15px) rotateY(0deg);
  }

  50% {
    transform: translateX(-15px) rotateY(180deg);
  }

  75% {
    transform: translateX(15px) rotateY(180deg);
  }

  88% {
    transform: translateX(15px) rotateY(0deg);
  }

  100% {
    transform: translateX(0px) rotateY(0deg);
  }
}
</style>
