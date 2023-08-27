// constant.js常量

const formItems = [
  {
    prop: "username",
    placeholder: "请输入你的小鱼号",
    icon: "🏠",
    type: "text",
    key: "username",
  },
  {
    prop: "password",
    placeholder: "请输入你的小鱼码",
    icon: "🔒",
    type: "password",
    key: "password",
  },
  {
    prop: "code",
    placeholder: "请输入小鱼验证码",
    icon: "🔑",
    type: "text",
    key: "code",
  },
];

const rules = {
  username: [
    { required: true, message: "小鱼号不能为空", trigger: "blur" },
    { min: 2, message: "用户名至少为2个字", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入小鱼码", trigger: "blur" },
    { min: 6, message: "小鱼码至少要有6位", trigger: "blur" },
  ],
  code: [
    { required: true, message: "请输入小鱼验证码", trigger: "blur" },
    { len: 6, message: "小鱼验证码应为6位", trigger: "blur" },
  ],
};

export { rules, formItems };
