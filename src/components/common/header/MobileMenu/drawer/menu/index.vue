<script setup>
import { menuSections } from "@/utils/menuSections";
import { computed } from "vue";
import { userAuthStore } from "@/store/user";

const store = userAuthStore();
const { notLogin } = store.status;

// 打开链接的函数
const openLink = (link) => {
  window.open(link, "_blank");
};

// 菜单
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

// 打开抽屉
const handleMenuClick = (section) => {
  store.getUserInfo(); // 获取最新的pinia状态
  section.const.value = true; // 打开菜单抽屉
};
</script>

<template>
  <div class="menus-items">
    <!-- 遍历每个菜单部分 -->
    <div
      class="menus-title"
      v-for="section in menuWithViewPermission"
      :key="section.title"
    >
      <!-- 菜单标题按钮 -->
      <el-button
        @click="handleMenuClick(section)"
        size="large"
        :style="`font-size: 2.2rem; color: ${section.color}`"
        text
        plain
      >
        <!-- 根据图标类型渲染对应的图标 -->
        <el-icon v-if="section.icon === 'Orange'" size="36">
          <Orange />
        </el-icon>
        <el-icon v-if="section.icon === 'CoffeeCup'" size="36">
          <CoffeeCup />
        </el-icon>
        <el-icon v-if="section.icon === 'ForkSpoon'" size="36">
          <ForkSpoon />
        </el-icon>
        <el-icon v-if="section.icon === 'OfficeBuilding'" size="36">
          <OfficeBuilding />
        </el-icon>
        <el-icon v-if="section.icon === 'Grape'" size="36">
          <Grape />
        </el-icon>
        <span>{{ section.title }}</span>
      </el-button>

      <!-- 链接菜单抽屉 -->
      <el-drawer
        size="40%"
        direction="btt"
        v-model="section.const.value"
        :with-header="false"
        class="resource-drawer"
      >
        <!-- 遍历每个链接并渲染对应的按钮 -->
        <div v-for="linkItem in section.links" :key="linkItem.label">
          <el-button v-if="linkItem.canView" @click="openLink(linkItem.link)">
            {{ linkItem.label }}
          </el-button>
        </div>

        <!-- 如果是学校部分且未登录，显示权限提示 -->
        <div v-if="notLogin && section.title === '学校'" class="school">
          你当前无权限访问该功能，请先登录...
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menus-items {
  text-align: center;
  margin: 30px;

  .menus-title {
    margin-top: 30px;

    .resource-drawer {
      .school {
        color: #f56c6c;
        font-size: 20px;
      }
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
</style>
