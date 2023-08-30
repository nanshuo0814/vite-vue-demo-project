// src/store/user.js

import { defineStore } from "pinia";
import vc from "@/utils/CookieManager";
import {
  ROLE_INFO,
  ICU_COOKIE_NAME,
  TOKEN_COOKIE_NAME,
  ROLES_COOKIE_NAME,
  XYG_KEY,
  calculateRoleHash,
  ADMIN_ROLE,
} from "@/utils/constant";
import { USER_KEY, USER_ROLE } from "../utils/constant";

export const userAuthStore = defineStore("user", {
  state: () => ({
    userInfo: {
      name: "",
      avatar: "",
      roles: "",
      icu: "",
      token: "",
    },
    status: {
      isUser: false,
      isAdmin: false,
      notLogin: true,
    },
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user-info",
        storage: localStorage,
        paths: ["userInfo"],
      },
      {
        key: "status",
        storage: localStorage,
        paths: ["status"],
      },
    ],
  },
  getters: {},
  actions: {
    // 获取用户信息
    getUserInfo() {
      try {
        // 获取Cookie
        const cookieICU = this.getICU();
        const md5ICU = calculateRoleHash(cookieICU);
        const token = this.getToken();
        const role = this.getRoles();
        const md5Roles = calculateRoleHash(role);
        // 分离Token判断
        const newToken = token.split("-");
        const xyg = newToken[0];
        const roles = newToken[1]; // 加密后的
        const icu = newToken[2];
        // 先判断前缀是否正确
        if (xyg === XYG_KEY) {
          // 判断roles和icu是否正确
          if (md5ICU === icu && roles === md5Roles) {
            // 判断角色是管理员还是普通用户
            const newRole = role === USER_KEY ? USER_ROLE : ADMIN_ROLE;
            this.updateUserInfo({
              name: ROLE_INFO[newRole].name,
              icu: cookieICU,
              roles: roles,
              avatar: ROLE_INFO[newRole].avatar,
            });
            this.refreshToken();
          } else {
            this.clearUserInfo(); // icu和roles都不相等，清空用户信息
          }
        } else {
          this.clearUserInfo(); // 前缀错误
        }
      } catch (error) {
        this.clearUserInfo(); // 未知错误，清空用户信息
      }
    },
    // 更新用户信息
    updateUserInfo({ name, icu, roles, avatar }) {
      this.userInfo.name = name;
      this.userInfo.icu = icu;
      this.userInfo.roles = roles;
      this.userInfo.avatar = avatar;
      this.getStatus();
    },
    // 获取用户状态
    getStatus() {
      const name = this.userInfo.name;
      if (name) {
        const admin = name === ADMIN_ROLE ? true : false;
        if (admin) {
          this.status.isAdmin = true;
          this.status.isUser = true;
          this.status.notLogin = false;
        } else {
          const user = name === USER_ROLE ? true : false;
          if (user) {
            this.status.isUser = true;
            this.status.isAdmin = false;
            this.status.notLogin = false;
          } else {
            this.clearStatus();
          }
        }
      } else {
        this.clearStatus();
      }
    },
    refreshToken() {
      vc.refreshCookieExpiration(TOKEN_COOKIE_NAME, 30);
    },
    clearUserInfo() {
      this.userInfo = {
        name: "",
        avatar: "",
        roles: "",
        icu: "",
        token: "",
      };
      this.clearStatus();
      this.deleteCookie();
    },
    clearStatus() {
      this.status = {
        isAdmin: false,
        isUser: false,
        notLogin: true,
      };
      this.deleteCookie();
    },
    deleteCookie() {
      vc.deleteCookie(ICU_COOKIE_NAME);
      vc.deleteCookie(TOKEN_COOKIE_NAME);
      vc.deleteCookie(ROLES_COOKIE_NAME);
    },
    getICU() {
      return vc.getCookie(ICU_COOKIE_NAME);
    },

    getToken() {
      return vc.getCookie(TOKEN_COOKIE_NAME);
    },

    getRoles() {
      return vc.getCookie(ROLES_COOKIE_NAME);
    },
  },
});
