<script setup>
import dark from "../dark/index.vue";
import profile from "./profile/index.vue";
import { userAuthStore } from "@/store/user";
import { computed } from "vue";
import router from "@/router";
import { menuSections } from "@/utils/menuSections";

const store = userAuthStore();

// 打开菜单
const handleMenuClick = (title) => {
  store.getUserInfo(); // 获取最新的pinia状态
  if (title === "学校" && store.status.notLogin) {
    router.push("/401");
  }
};

// 判断是否为学校选项且未登录状态
const shouldSkipDropdown = (section) => {
  return section.title === "学校" && store.status.notLogin;
};

// 菜单计算属性,每个菜单项下的二级主菜单给了个权限canView,代表什么身份(管理员,普通用户,未登录)可以访问
const menuWithViewPermission = computed(() => {
  return menuSections.map((section) => {
    return {
      ...section,
      links: section.links.map((link) => {
        return {
          ...link,
          canView: !link.permission
            ? false
            : link.permission === "all"
            ? true
            : store.status[link.permission],
        };
      }),
    };
  });
});

// 打开链接
const openLink = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <!-- 菜单 -->
  <div class="menu">
    <div
      v-for="section in menuWithViewPermission"
      :key="section.title"
      class="link-container"
      :class="section.class"
      @click="handleMenuClick(section.title)"
    >
      <!-- 下拉框的子菜单 -->
      <el-dropdown trigger="click">
        <span>{{ section.title }}</span>
        <template #dropdown>
          <el-dropdown-menu v-if="!shouldSkipDropdown(section)">
            <div v-for="linkItem in section.links" :key="linkItem.label">
              <el-dropdown-item
                v-if="linkItem.canView"
                @click="openLink(linkItem.link)"
              >
                {{ linkItem.label }}
              </el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- <el-divider class="left-divider" direction="vertical" /> -->
    <!-- 暗黑模式 -->
    <div class="dark">
      <dark  />
    </div>
    
    <!-- <el-divider class="right-divider" direction="vertical" /> -->
    <!-- 头像 -->
    <profile />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: 800px;
  height: 50px;
  position: absolute;
  right: 0;
  margin: 10px;
  font-size: 20px;
  .dark {
    position: absolute;
    right: 68px;
    margin-top: 8px !important;
  }
  .left-divider {
    position: absolute;
    right: 55px;
    margin-top: 6px !important;
    font-size: 35px;
  }
  .right-divider {
    position: absolute;
    right: 104px;
    margin-top: 6px !important;
    font-size: 35px;
  }
  .link-container {
    position: absolute;
    cursor: pointer;

    span {
      font-size: 1.5rem;
    }
  }

  .others {
    right: 368px;
    top: 8px;
  }
  
  .program {
    right: 188px;
    top: 8px;
  }

  .resource {
    right: 128px;
    top: 8px;
  }

  .school {
    right: 308px;
    top: 8px;
  }

  .utils {
    right: 248px;
    top: 8px;
  }
}
@media screen and (max-width: 600px) {
  .menu {
    display: none;
  }
}
</style>
