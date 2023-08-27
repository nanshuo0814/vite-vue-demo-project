import CryptoJS from "crypto-js";

// Cookie名称常量
const ICU_COOKIE_NAME = "icu";
const TOKEN_COOKIE_NAME = "xiaoyuhaoToken";
const ROLES_COOKIE_NAME = "roles";
const XIAOYUHAO_TOKEN_COOKIE = "xiaoyuhaoToken";

// 用于加密和身份验证的密钥和值
const XIAOYUMA = "xiaoyuma";
const XIAOYUHAO = "xiaoyuhao";
const XYG_KEY = "xyg";
const ICU_KEY = "icu";
const ROLES_KEY = "roles";
const PREFIX_KEY = "xyg";
const CHARACTERS = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789";

// 角色和权限常量
const ADMIN_ROLE = "xiaoyuer";
const USER_ROLE = "yuzai";
const ADMIN_ROLES_HASH = CryptoJS.MD5("xiaoyuer").toString();
const USER_ROLES_HASH = CryptoJS.MD5("yuzai").toString();
const ZERO = "0";
const ADMIN_KEY = "admin";
const USER_KEY = "user";

// 根据给定的角色计算其哈希值
function calculateRoleHash(role) {
  return CryptoJS.MD5(role).toString();
}

// 角色信息，包含名称、头像和角色哈希值
const ROLE_INFO = {
  [ADMIN_ROLE]: {
    name: "xiaoyuer",
    avatar: "PhaseOne/profile.jpg",
    roleHash: calculateRoleHash(ADMIN_ROLE),
  },
  [USER_ROLE]: {
    name: "yuzai",
    avatar: "PhaseOne/xiaoyuer.png",
    roleHash: calculateRoleHash(USER_ROLE),
  },
};

// 微信二维码链接
const WXRQCODEJPG = "https://www.xiaoguang.eu.org/PhaseThree/wxQRCode.jpg";
const WXRQCODEJPGLIST = [
  "https://www.xiaoguang.eu.org/PhaseThree/wxQRCode.jpg",
];

// 导出所有常量和函数
export {
  ROLE_INFO,
  calculateRoleHash,
  ICU_COOKIE_NAME,
  TOKEN_COOKIE_NAME,
  ROLES_COOKIE_NAME,
  XYG_KEY,
  ADMIN_ROLE,
  USER_ROLE,
  XIAOYUHAO_TOKEN_COOKIE,
  ADMIN_ROLES_HASH,
  USER_ROLES_HASH,
  ICU_KEY,
  ROLES_KEY,
  PREFIX_KEY,
  CHARACTERS,
  XIAOYUMA,
  XIAOYUHAO,
  ZERO,
  WXRQCODEJPG,
  WXRQCODEJPGLIST,
  ADMIN_KEY,
  USER_KEY
};
