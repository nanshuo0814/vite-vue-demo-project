<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import router from "../router";
import { useDark } from "@vueuse/core";
import VueCookie from "vue-cookie";
const isDark = useDark();
import CryptoJS from "crypto-js";
import { Sunny, Opportunity } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

const timeDiff = ref();
const updateTimeDifference = () => {
  const targetDate = new Date("2023-08-14");
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = Math.abs(
    Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  );
  const hoursDifference = Math.abs(
    Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
  );
  const minutesDifference = Math.abs(
    Math.floor((timeDifference / (1000 * 60)) % 60)
  );
  const secondsDifference = Math.abs(Math.floor((timeDifference / 1000) % 60));
  timeDiff.value = `${daysDifference}天${hoursDifference}小时${minutesDifference}分钟${secondsDifference}秒`;
};
onMounted(() => {
  updateTimeDifference(); // 首次加载时先更新一次时间差
  setInterval(updateTimeDifference, 1000); // 每隔1秒更新一次时间差
});
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
  xiaoyuer: "PhaseOne/profile.jpg",
  yuzai: "PhaseOne/xiaoyuer.png",
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
const goSuperStarLearn = () => {
  window.open(
    "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=http%3A%2F%2Fi.chaoxing.com",
    "_blank"
  );
};
const goEducationNetwork = () => {
  window.open(
    "http://jw.gzgs.edu.cn/eams/login.action;jsessionid=5413581FDF6ECDD07798F0A1B69AEB37",
    "_blank"
  );
};
const goVPN = () => {
  window.open(
    "https://vpn.gzgs.edu.cn/portal/?redirectid=0.7301703537180835#!/login",
    "_blank"
  );
};
const goNetworkSchool = () => {
  window.open("https://study.gzgsmooc.org.cn/login?path=%2F", "_blank");
};
const goExamPlatform = () => {
  window.open("http://172.23.191.32/", "_blank");
};
const ChatGPT = () => {
  window.open("http://chat.xiaoguang.eu.org/", "_blank");
};
const panduola = () => {
  window.open("https://chat.zhile.io/", "_blank");
};
const V2free = () => {
  window.open("https://w1.v2free.net/", "_blank");
};
const Clash = () => {
  window.open("https://clashhub.org/clash-for-windows/", "_blank");
};
const Vercel = () => {
  window.open("https://vercel.com/", "_blank");
};
const unDraw = () => {
  window.open("https://undraw.co/", "_blank");
};
const removebg = () => {
  window.open("https://www.remove.bg/zh/upload", "_blank");
};
const QRCode = () => {
  window.open("https://www.wwei.cn/url", "_blank");
};
const idmore = () => {
  window.open("https://www.vidmore.com/zh/watermark-remover/#", "_blank");
};
const iconfont = () => {
  window.open("https://www.iconfont.cn/", "_blank");
};
const uTools = () => {
  window.open("https://www.u.tools/", "_blank");
};
const mindshow = () => {
  window.open("https://mindshow.fun/", "_blank");
};
const yhdm = () => {
  window.open("http://yhdm08.com/", "_blank");
};
const pdai = () => {
  window.open("https://pdai.tech/", "_blank");
};
const react = () => {
  window.open("https://zh-hans.react.dev/", "_blank");
};
const nuxt = () => {
  window.open("https://nuxt.com/", "_blank");
};
const windicss = () => {
  window.open("https://cn.windicss.org/", "_blank");
};
const axios = () => {
  window.open("https://axios-http.com/zh/docs/intro", "_blank");
};
const MybatisPlus = () => {
  window.open("https://baomidou.com/", "_blank");
};
const tencent = () => {
  window.open("https://cloud.tencent.com/", "_blank");
};
const aliyun = () => {
  window.open("https://www.aliyun.com/", "_blank");
};
const GitHub = () => {
  window.open("https://github.com/", "_blank");
};
const Gitee = () => {
  window.open("https://www.gitee.com/", "_blank");
};
const leetcode = () => {
  window.open("https://leetcode.com/", "_blank");
};
const nowcoder = () => {
  window.open("https://nowcoder.com/", "_blank");
};
const csdn = () => {
  window.open("https://www.csdn.net/", "_blank");
};
const warning = () => {
  ElMessage({
    message: "你当前无权限访问该功能,请先登录...",
    type: "warning",
  });
};
const drawer = ref(false);
const resource = ref(false);
const dev = ref(false);
const school = ref(false);
const others = ref(false);
const utils = ref(false);
const wxQRCodeJPG = "https://www.xiaoguang.eu.org/PhaseThree/wxQRCode.jpg";
const wxQRCodeJPGList = ["https://www.xiaoguang.eu.org/PhaseThree/wxQRCode.jpg"];
</script>

<template>
  <div class="container">
    <!-- 回到顶部的按钮 -->
    <!-- <el-backtop :right="50" :bottom="650">
      <el-button type="success" plain
        ><el-icon><Top /></el-icon>回到顶部</el-button
      ></el-backtop
    > -->
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
          <div class="others">
            <el-dropdown trigger="click">
              <span>其他</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="yhdm" v-if="isLogin"
                    >樱花动漫(动漫,电视剧...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="leetcode"
                    >LeetCode官网(刷题,面试...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="nowcoder"
                    >nowcoder官网(题库,招聘...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="csdn"
                    >CSDN(专业开发者社区)</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="school">
            <el-dropdown v-if="isLogin" trigger="click">
              <span>学校</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="goSuperStarLearn"
                    >超星学习通</el-dropdown-item
                  >
                  <el-dropdown-item @click="goEducationNetwork"
                    >广工商教务网</el-dropdown-item
                  >
                  <el-dropdown-item @click="goNetworkSchool"
                    >广工商网校</el-dropdown-item
                  >
                  <el-dropdown-item @click="goExamPlatform"
                    >考试U+平台</el-dropdown-item
                  >
                  <el-dropdown-item @click="goVPN">广工商VPN</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <div v-else style="margin-top: -3px" @click="warning">
              <span style="font-size: 1.3rem">学校</span>
            </div>
          </div>
          <div class="utils">
            <el-dropdown trigger="click">
              <span>工具</span>
              <template #dropdown>
                <el-dropdown-menu
                  ><el-dropdown-item @click="mindshow" v-if="isAdmin"
                    >mindshow(AI生成PPT)</el-dropdown-item
                  >
                  <el-dropdown-item @click="QRCode" v-if="isLogin"
                    >二维码生成器(网址)</el-dropdown-item
                  >
                  <el-dropdown-item @click="removebg"
                    >抠图网站(消除背景)</el-dropdown-item
                  >
                  <el-dropdown-item @click="idmore"
                    >idmore在线免费去水印</el-dropdown-item
                  >
                  <el-dropdown-item @click="uTools"
                    >uTools工具插件(超级面板)</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="program">
            <el-dropdown trigger="click">
              <span>开发</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="Vercel" v-if="isAdmin"
                    >Vercel静态代码部署平台</el-dropdown-item
                  >
                  <el-dropdown-item @click="unDraw" v-if="isLogin"
                    >unDraw图片网站(svg,png...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="GitHub"
                    >GitHub国外代码托管平台</el-dropdown-item
                  >
                  <el-dropdown-item @click="Gitee"
                    >Gitee国内代码托管平台</el-dropdown-item
                  >
                  <el-dropdown-item @click="pdai"
                    >Java全栈知识体系</el-dropdown-item
                  >
                  <el-dropdown-item @click="react"
                    >react中文开发文档</el-dropdown-item
                  >
                  <el-dropdown-item @click="nuxt"
                    >nuxt开发文档</el-dropdown-item
                  >
                  <el-dropdown-item @click="tencent"
                    >腾讯云(云服务器...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="aliyun"
                    >阿里云(云服务器...)</el-dropdown-item
                  >
                  <el-dropdown-item @click="windicss"
                    >windiCSS开发文档</el-dropdown-item
                  >
                  <el-dropdown-item @click="axios"
                    >axios中文开发文档</el-dropdown-item
                  >
                  <el-dropdown-item @click="MybatisPlus"
                    >MybatisPlus中文开发文档</el-dropdown-item
                  >
                  <el-dropdown-item @click="iconfont"
                    >iconfont图标库(阿里巴巴)</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="resource">
            <el-dropdown trigger="click">
              <span>资源</span>
              <template #dropdown>
                <el-dropdown-menu
                  ><el-dropdown-item v-if="isAdmin" @click="panduola"
                    >ChatGPT潘多拉网站(需要账号)</el-dropdown-item
                  >
                  <el-dropdown-item v-if="isAdmin" @click="V2free"
                    >V2free(节点搭配Clash软件用)</el-dropdown-item
                  >
                  <el-dropdown-item v-if="isAdmin" @click="Clash"
                    >Clash软件(搭配V2free使用)</el-dropdown-item
                  ><el-dropdown-item v-if="isLogin" @click="ai"
                    >ChatGPT国内免费网站(免登录)</el-dropdown-item
                  >
                  <el-dropdown-item @click="ChatGPT"
                    >ChatGPT自用到12月1日过期</el-dropdown-item
                  >
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
                  <el-icon size="17"> <Promotion /> </el-icon>博客
                </el-dropdown-item>
                <el-dropdown-item @click="exit"
                  ><el-icon size="17"> <SwitchButton /> </el-icon
                  >退出</el-dropdown-item
                >
              </template>
            </el-dropdown>
          </span>
        </div>
        <div class="menu-box">
          <el-button type="success" @click="drawer = true">
            <el-icon size="30"><More /></el-icon>
          </el-button>
          <el-drawer v-model="drawer" :with-header="false" size="80%">
            <div>
              <div class="avatar-box">
                <div class="left-section">
                  <span
                    style="margin-left: 10px; align-items: center"
                    v-if="!isLogin"
                  >
                    <div>
                      <router-link to="/login" style="text-decoration: none"
                        ><el-avatar :size="100">
                          <img
                            src="../../src/assets/not-login.png"
                          /> </el-avatar
                      ></router-link>
                    </div>
                  </span>
                  <span v-else>
                    <el-avatar class="avatar" :size="45" :src="avatar" />
                  </span>
                </div>
                <div class="right-section">
                  <span class="dark">
                    <el-switch
                      size="large"
                      v-model="isDark"
                      :active-action-icon="Opportunity"
                      :inactive-action-icon="Sunny"
                    />
                  </span>
                  <div v-if="!isLogin" class="notLogin">
                    ←点击左边头像去登录
                  </div>
                  <el-button
                    type="primary"
                    v-if="isAdmin"
                    @click="xiaopozhan"
                    class="admin-home"
                    ><el-icon size="17"> <Promotion /> </el-icon>博客</el-button
                  >
                  <el-button
                    v-if="isLogin"
                    type="danger"
                    @click="exit"
                    class="exit"
                    ><el-icon size="17"> <SwitchButton /> </el-icon
                    >退出</el-button
                  >
                </div>
              </div>
              <el-divider />
              <div class="menus-items">
                <div class="menus-title">
                  <el-button
                    @click="resource = true"
                    size="large"
                    style="font-size: 2.2rem; color: #67c23a"
                    text
                    plain
                    ><el-icon size="36"><Orange /></el-icon
                    ><span>资源</span></el-button
                  >
                  <el-drawer
                    size="40%"
                    direction="btt"
                    v-model="resource"
                    :with-header="false"
                    class="resource-drawer"
                    ><el-button v-if="isAdmin" @click="panduola">
                      ChatGPT潘多拉网站(需要账号)
                    </el-button>
                    <el-button v-if="isAdmin" @click="V2free">
                      V2free(节点搭配Clash软件用)
                    </el-button>
                    <el-button v-if="isAdmin" @click="Clash">
                      Clash软件(搭配V2free使用) </el-button
                    ><el-button v-if="isLogin" @click="ai">
                      ChatGPT国内免费网站(免登录)
                    </el-button>
                    <el-button @click="ChatGPT"
                      >ChatGPT自用到12月1日过期</el-button
                    >
                  </el-drawer>
                </div>
                <div class="menus-title">
                  <el-button
                    @click="dev = true"
                    size="large"
                    style="font-size: 2.2rem; color: #e6a23c"
                    text
                    plain
                    ><el-icon size="36"><CoffeeCup /></el-icon
                    ><span>开发</span></el-button
                  >
                  <el-drawer
                    size="40%"
                    direction="btt"
                    v-model="dev"
                    :with-header="false"
                    class="resource-drawer"
                    ><el-button @click="Vercel" v-if="isAdmin"
                      >Vercel静态代码部署平台</el-button
                    >
                    <el-button @click="unDraw" v-if="isAdmin"
                      >unDraw图片网站(svg,png...)</el-button
                    >
                    <el-button @click="GitHub"
                      >GitHub国外代码托管平台</el-button
                    >
                    <el-button @click="Gitee">Gitee国内代码托管平台</el-button>
                    <el-button @click="pdai">Java全栈知识体系</el-button>
                    <el-button @click="react">react中文开发文档</el-button>
                    <el-button @click="nuxt">nuxt开发文档</el-button>
                    <el-button @click="tencent">腾讯云(云服务器...)</el-button>
                    <el-button @click="aliyun">阿里云(云服务器...)</el-button>
                    <el-button @click="windicss">windiCSS开发文档</el-button>
                    <el-button @click="axios">axios中文开发文档</el-button>
                    <el-button @click="MybatisPlus"
                      >MybatisPlus中文开发文档</el-button
                    ><el-button @click="iconfont"
                      >iconfont图标库(阿里巴巴)</el-button
                    >
                  </el-drawer>
                </div>
                <div class="menus-title">
                  <el-button
                    @click="utils = true"
                    size="large"
                    style="font-size: 2.2rem; color: #409eff"
                    text
                    plain
                    ><el-icon size="36"><ForkSpoon /></el-icon
                    ><span>工具</span></el-button
                  >
                  <el-drawer
                    size="40%"
                    direction="btt"
                    v-model="utils"
                    :with-header="false"
                    class="resource-drawer"
                  >
                    <el-button @click="mindshow" v-if="isAdmin"
                      >mindshow(AI生成PPT)</el-button
                    ><el-button v-if="isLogin" @click="QRCode"
                      >二维码生成器(网址)</el-button
                    >
                    <el-button @click="removebg">抠图网站(消除背景)</el-button>
                    <el-button @click="removebg">抠图网站(消除背景)</el-button>
                    <el-button @click="idmore">idmore在线免费去水印</el-button>
                    <el-button @click="uTools"
                      >uTools工具插件(超级面板)</el-button
                    ></el-drawer
                  >
                </div>
                <div class="menus-title">
                  <el-button
                    @click="school = true"
                    size="large"
                    style="font-size: 2.2rem; color: #f56c6c"
                    text
                    plain
                    ><el-icon size="36"><School /></el-icon
                    ><span>学校</span></el-button
                  >
                  <el-drawer
                    size="40%"
                    direction="btt"
                    v-model="school"
                    :with-header="false"
                    class="resource-drawer"
                  >
                    <el-button v-if="isLogin" @click="goSuperStarLearn"
                      >超星学习通</el-button
                    >
                    <el-button v-if="isLogin" @click="goEducationNetwork"
                      >广工商教务网</el-button
                    >
                    <el-button v-if="isLogin" @click="goNetworkSchool"
                      >广工商网校</el-button
                    >
                    <el-button v-if="isLogin" @click="goExamPlatform"
                      >考试U+平台</el-button
                    >
                    <el-button v-if="isLogin" @click="goVPN"
                      >广工商VPN</el-button
                    >
                    <div style="font-size: 18px; color: #f56c6c" v-else>
                      你当前无权限访问该功功能,请先登录...
                    </div>
                  </el-drawer>
                </div>
                <div class="menus-title">
                  <el-button
                    @click="others = true"
                    size="large"
                    style="font-size: 2.2rem; color: #909399"
                    text
                    plain
                    ><el-icon size="36"><Grape /></el-icon
                    ><span>其他</span></el-button
                  >
                  <el-drawer
                    size="40%"
                    direction="btt"
                    v-model="others"
                    :with-header="false"
                    class="resource-drawer"
                  >
                    <el-button @click="yhdm" v-if="isLogin"
                      >樱花动漫(动漫,电视剧...)</el-button
                    >
                    <el-button @click="leetcode"
                      >LeetCode官网(刷题,面试...)</el-button
                    >
                    <el-button @click="nowcoder"
                      >nowcoder官网(题库,招聘...)</el-button
                    >
                    <el-button @click="csdn">CSDN(专业开发者社区)</el-button>
                  </el-drawer>
                  <el-divider style="" />
                  <div>
                    <div>更多功能正在开发中...</div>
                    <div style="margin-bottom: 10px">
                      有想法的同学可以联系我哦
                    </div>
                    <el-image
                      style="width: 200px; height: 274px"
                      :src="wxQRCodeJPG"
                      :zoom-rate="1.2"
                      :preview-src-list="wxQRCodeJPGList"
                      fit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </el-drawer>
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
      <div class="time">本站居然已运行了{{ timeDiff }}</div>
    </el-footer>
  </div>
</template>

<style lang="scss" scoped>
.time {
  text-align: center;
  margin-top: 5px;
  font-size: 22px;
}
.container {
  height: 100vh;
  width: 100%;
  .el-header {
    margin: 0;
    padding: 0;
  }

  .el-main {
    margin: 0;
    padding: 0;
  }

  .el-footer {
    margin: 0;
    padding: 0;
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
      width: 800px;
      height: 50px;
      position: absolute;
      right: 0;
      margin: 10px;
      font-size: 20px;
      .others {
        position: absolute;
        right: 368px;
        top: 10px;
        cursor: pointer;
        span {
          font-size: 1.3rem;
        }
      }
      .school {
        position: absolute;
        right: 308px;
        top: 10px;
        cursor: pointer;
        span {
          font-size: 1.3rem;
        }
      }
      .utils {
        position: absolute;
        right: 248px;
        top: 10px;
        cursor: pointer;
        span {
          font-size: 1.3rem;
        }
      }
      .program {
        position: absolute;
        right: 188px;
        top: 10px;
        cursor: pointer;
        span {
          font-size: 1.3rem;
        }
      }
      .resource {
        position: absolute;
        right: 128px;
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
        right: 68px;
        margin-top: 6px !important;
      }
    }
    .menu-box {
      position: absolute;
      right: 10px;
      top: 6px;
      .avatar-box {
        width: 100%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        .left-section {
          width: 100%;
          display: flex;
          margin-left: 20px;
        }
        .right-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          .el-button + .el-button {
            margin-left: 0;
          }
          .admin-home {
            margin-bottom: 10px;
            font-size: 18px;
          }
          .exit {
            margin-bottom: 22px;
            font-size: 18px;
          }
          .dark {
            margin-bottom: 5px;
          }
          .notLogin {
            margin-bottom: 10px;
            font-size: 22px;
          }
        }
        .avatar {
          width: 110px;
          height: 110px;
        }
      }
      .menus-items {
        text-align: center;
        margin: 30px;
        .menus-title {
          margin-top: 30px;
          .resource-drawer {
            .el-button {
              margin-top: 18px;
              font-size: 22px;
              width: 100%;
            }
            .el-button + .el-button {
              margin-left: 0px;
            }
          }
        }
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
      .fish {
        width: 22px;
        height: 22px;
        background: url(../assets/yu.png) center/cover no-repeat;
        animation: swim 4s linear infinite;
        transform-style: preserve-3d;
        margin-left: 18px;
      }
    }
  }
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
@media screen and (max-width: 600px) {
  .other-header {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .menu-box {
    display: none;
  }
}
</style>
