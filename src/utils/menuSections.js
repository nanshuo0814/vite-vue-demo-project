import LINKS from "@/utils/link";
import { ref } from "vue";

// 创建响应式变量来表示不同的菜单部分是否展开
const resource = ref(false);
const dev = ref(false);
const school = ref(false);
const others = ref(false);
const utils = ref(false);

// 定义菜单的各个部分及其链接
const menuSections = [
  {
    title: "资源",
    icon: "Orange",
    const: resource,
    color: "#67c23a",
    class: "resource",
    links: [
      {
        label: "ChatGPT潘多拉网站(需要账号)",
        link: LINKS.PANDUOLA,
        permission: "isAdmin",
      },
      {
        label: "V2free(节点搭配Clash软件用)",
        link: LINKS.V2FREE,
        permission: "isAdmin",
      },
      {
        label: "Clash软件(搭配V2free使用)",
        link: LINKS.CLASH,
        permission: "isAdmin",
      },
      {
        label: "ChatGPT国内免费网站(免登录)",
        link: LINKS.AI,
        permission: "isUser",
      },
      {
        label: "ChatGPT自用到12月1日过期",
        link: LINKS.CHAT_GPT,
        permission: "all",
      },
    ],
  },
  {
    title: "开发",
    icon: "CoffeeCup",
    const: dev,
    class: "program",
    color: "#e6a23c",
    links: [
      {
        label: "Vercel静态代码部署平台",
        link: LINKS.VERCEL,
        permission: "isAdmin",
      },
      {
        label: "unDraw图片网站(svg,png...)",
        link: LINKS.UNDRAW,
        permission: "isUser",
      },
      {
        label: "GitHub国外代码托管平台",
        link: LINKS.GITHUB,
        permission: "all",
      },
      { label: "Gitee国内代码托管平台", link: LINKS.GITEE, permission: "all" },
      { label: "Java全栈知识体系", link: LINKS.PDAI, permission: "all" },
      { label: "react中文开发文档", link: LINKS.REACT, permission: "all" },
      { label: "nuxt开发文档", link: LINKS.NUXT, permission: "all" },
      { label: "腾讯云(云服务器...)", link: LINKS.TENCENT, permission: "all" },
      { label: "阿里云(云服务器...)", link: LINKS.ALIYUN, permission: "all" },
      { label: "windiCSS开发文档", link: LINKS.WINDICSS, permission: "all" },
      { label: "axios中文开发文档", link: LINKS.AXIOS, permission: "all" },
      {
        label: "MybatisPlus中文开发文档",
        link: LINKS.MYBATIS_PLUS,
        permission: "all",
      },
      {
        label: "iconfont图标库(阿里巴巴)",
        link: LINKS.ICONFONT,
        permission: "all",
      },
    ],
  },
  {
    title: "工具",
    icon: "ForkSpoon",
    const: utils,
    color: "#409eff",
    class: "utils",
    links: [
      {
        label: "mindshow(AI生成PPT)",
        link: LINKS.MINDSHOW,
        permission: "isAdmin",
      },
      { label: "二维码生成器(网址)", link: LINKS.QRCODE, permission: "isUser" },
      { label: "抠图网站(消除背景)", link: LINKS.REMOVEBG, permission: "all" },
      { label: "idmore在线免费去水印", link: LINKS.IDMORE, permission: "all" },
      {
        label: "uTools工具插件(超级面板)",
        link: LINKS.U_TOOLS,
        permission: "all",
      },
    ],
  },
  {
    title: "学校",
    icon: "OfficeBuilding",
    const: school,
    color: "#f56c6c",
    class: "school",
    links: [
      {
        label: "超星学习通",
        link: LINKS.GO_SUPER_STAR_LEARN,
        permission: "isUser",
      },
      {
        label: "广工商教务网",
        link: LINKS.GO_EDUCATION_NETWORK,
        permission: "isUser",
      },
      {
        label: "广工商网校",
        link: LINKS.GO_NETWORK_SCHOOL,
        permission: "isUser",
      },
      {
        label: "考试U+平台",
        link: LINKS.GO_EXAM_PLATFORM,
        permission: "isUser",
      },
      { label: "广工商VPN", link: LINKS.GO_VPN, permission: "isUser" },
    ],
  },
  {
    title: "其他",
    icon: "Grape",
    const: others,
    class: "others",
    color: "#909399",
    links: [
      {
        label: "樱花动漫(动漫,电视剧...)",
        link: LINKS.YHDM,
        permission: "isUser",
      },
      {
        label: "LeetCode官网(刷题,面试...)",
        link: LINKS.LEETCODE,
        permission: "all",
      },
      {
        label: "nowcoder官网(题库,招聘...)",
        link: LINKS.NOWCODER,
        permission: "all",
      },
      { label: "CSDN(专业开发者社区)", link: LINKS.CSDN, permission: "all" },
    ],
  },
];

export { menuSections };
