# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

While this project uses Vue.js, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

# xiaoyuer小网站项目

本小网站(小鱼儿)采用纯前端Vue+Vite的框架搭建,通过[Vercel](https://vercel.com/)网站部署。

## 第一阶段(2023/08/05)

在Vercel网站通过现成Vue的模板来初始化项目,并提交到GitHub仓库进行代码存储,然后在本地通过git工具来拉取该模板代码到本地,接着通过VScode代码编辑器来编写代码,进行初始化项目!!!

### 步骤+相关命令

先使用Git克隆GitHub仓库代码到本地仓库( `<repository-url>` 替换为您要克隆的仓库的 URL)

```
git clone <repository-url>
```

编写好代码后使用Git推送代码到GitHub仓库(`<branch-name>` 替换为远程仓库中的分支名称（通常是 master 或 main）)

```
git push origin <branch-name>
```

若自己在GitHub仓库修改了想同步到本地可以使用Git拉取GitHub仓库代码最新更改(`<branch-name>` 替换为远程仓库中的分支名称（通常是 master 或 main）)

```
git pull origin <branch-name>
```

ps: 如果不行使用命令来提交代码,也可以直接使用VScode编辑器连接GitHub仓库来提交!!!非常方便

本地运行

```
npm run dev
```

### 用到的技术和工具

```
版本: Vue: 3.3.4 + Vite: 4.4.8 + npm: 9.8.1 + pnpm: 8.0.0 + Git: 2.41.0.windows.1 
```

## 第二阶段(2023/08/06)

主要是对login页面的编写和优化一些存在的问题

### 优化项目

对项目原来存在的页面和无关的代码页面删除(真正意义上的"空项目"),且添加了一些配置到项目里,最后对项目的结构进行优化和添加了一些配置等等,具体如下:

- `router`路由的编写
- 404,403,401状态页面(.vue)的编写
- 用户协议和隐私协议的页面(.vue)的编写
- 空白的Index.vue页面(首页)
- Test.vue测试页面
- `store` 里的accountInfo存储小鱼号和小鱼码的信息
- `assets`负责管理资源(例如:图片等等)
- `utils`工具类
- `components`组件
- ...等等

![项目大致结构](/public/PhaseTwo/project1.0.png)

![具体的结构](/public/PhaseTwo/project1.1.png)

### login页面的编写

用到的技术

- "crypto-js": "^4.1.1" ,用于MD5加密
- "element-plus": "^2.3.8",饿了么组件库
- "vue-cookie": "^1.1.4",使用VueCookie的api
- vue-router": "^4.2.4" ,路由
- "sass": "^1.64.2", css代码的嵌套写法
- "sass-loader": "^13.3.2",css代码的嵌套写法
- "unplugin-auto-import": "^0.16.6", 按需导入element-plus组件
- "unplugin-vue-components": "^0.25.1",按需导入element-plus组件

- ...等等

ps:  
简单的实习了login功能,主要是通过模拟向后端发送数据,其实就是本地的校验小鱼号和小鱼码是否正确(单独存储在`store/accountInfo.js`里),同时也添加了数字验证码(通过`Math.random()`函数随机更新),模拟图片验证码,可以手动刷新验证码,当页面刷新时验证码也会同时刷新,当点击登录时,若验证码错误则提示(用到了`ELMessage`api来提示,其他的也同理),验证码输入框清空,验证码也刷新,给用户更好的体验效果。
我也使用了`VueCookie`的api对小鱼号和小鱼码进行持久化存储在客户端浏览器端(设置了过期时间),这样也可以保证用户下次登录时不用再次输入小鱼号和小鱼码进行登录了,更加人性化,在之后,我有加强了小鱼码的保护对通过`VueCookie`存储的用户信息进行加密,主要是对小鱼码进行加密(MD5),更好的保护用户账号的安全性。若想连接更加具体的请看源码!!!

相关的图片

![loginView](/public/PhaseTwo/loginView.png)

![agreement](/public/PhaseTwo/agreement.png)

![privacy](/public/PhaseTwo/privacy.png)

![404](/public/PhaseTwo/404View.png)

## 第三阶段(2023/08/07)

主要写网站的首页(Index.vue),修改了网站访问的首地址(默认是Index.vue,通过修改了router路由配置),更改了路由的权限等等,然后将login.vue页面的部分css代码(适应电脑或手机的尺寸代码)移动到style.css里面(主要是全局要用到的,避免代码的冗余),还有导航栏和页尾页进行了整合(公共的代码块),

### 首页

# 遇到棘手的bug

一、遇到的问题似乎与 pnpm-lock.yaml 文件与 package.json 文件不同步有关。这个问题通常是由于 package.json 文件和实际的锁定文件存在差异造成的。ps: 在我第二阶段提交代码的时候遇到的bug
为了解决这个问题，我可以尝试以下步骤：

ps: 自己搞了很久,主要是没经验,知道是版本问题,不知道怎么解决,而且一开始我自己电脑并没有安装`pnpm`,然后通过自己的不断摸索(在网上找没有解决方案,最后在ChatGPT官网提问得到了下面这个最终方案),最终找到了解决方案,就是版本不一致的问题,其实这个bug很简单,自己没经验不知道从何下手,其实就运行下面的第一条命令就解决了,这也让我接触到了`pnpm`这个工具,也算有收获吧

更新 pnpm 的锁定文件：
运行以下命令，将 pnpm-lock.yaml 文件与 package.json 同步更新：

```
pnpm update
```

清除 pnpm 缓存：
有时候问题可能是由于损坏或过时的 pnpm 缓存引起的。尝试使用以下命令清除缓存：

```
pnpm clear-cache
```

不使用冻结锁定文件安装依赖项：
如错误信息所建议的，你可以尝试在安装依赖项时不使用冻结锁定文件，运行以下命令：

```
pnpm install --no-frozen-lockfile
```

这将在安装依赖项时不遵循锁定文件，可能能够解决某些情况下的问题。

确保使用正确的 pnpm 版本：
确保你使用的 pnpm 版本与锁定文件版本兼容。如果你最近更新了 pnpm，可能需要确认其与当前项目设置的兼容性。
尝试完成这些步骤后，再次运行构建。如果问题仍然存在，可能有其他因素影响，需要进一步调查以找到问题的根本原因。此外，查阅项目文档和支持论坛，了解与 pnpm 和 Vercel 集成相关的特定问题可能会有所帮助。

二、...
