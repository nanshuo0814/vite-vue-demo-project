# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

While this project uses Vue.js, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

# Git工具的使用
Git是一款非常流行的分布式版本控制系统，以下是一些常用的Git命令：

1. git init：初始化一个新的Git仓库。
2. git clone <仓库地址>：克隆（下载）一个远程仓库到本地。
3. git add <文件名>：将文件添加到暂存区。
4. git commit -m "提交描述"：将暂存区的文件提交到版本库，并添加提交描述。
5. git status：查看工作区和暂存区的状态。
6. git log：查看提交日志。
7. git pull：从远程仓库拉取最新代码。
8. git push：推送本地提交到远程仓库。
9. git branch：查看本地分支列表。
10. git checkout <分支名>：切换到指定分支。
11. git merge <分支名>：合并指定分支到当前分支。
12. git remote add <别名> <仓库地址>：关联远程仓库。
13. git remote -v：查看远程仓库列表。
14. git diff：查看工作区和暂存区的差异。
15. git reset <文件名>：将文件从暂存区移出。

要将本地更新同步到GitHub仓库，可以按照以下命令步骤执行：

1. 首先，确保你已经将GitHub仓库克隆到了本地。如果还没有克隆，可以使用以下命令：

   ```
   git clone <仓库地址>
   ```

2. 进入克隆的本地仓库目录：

   ```
   cd <仓库目录>
   ```

3. 在进行任何修改之前，先确保你在主分支上（一般为`master`或`main`分支）：

   ```
   git checkout <主分支名称>
   ```

4. 然后，进行你需要的修改，比如编辑文件、添加新文件等。

5. 当你完成修改后，可以通过以下命令将修改添加到暂存区：

   ```
   git add .
   ```

   这里使用`.`来表示所有修改的文件。如果你只想添加某个特定的文件，可以将`.`替换为文件名。

6. 然后，提交你的修改到版本库，并添加提交描述：

   ```
   git commit -m "提交描述"
   ```

7. 最后，使用以下命令将本地更新推送到GitHub远程仓库：

   ```
   git push origin <主分支名称>
   ```

   这里使用`origin`表示远程仓库的别名，`<主分支名称>`表示你的主分支名称（如`master`或`main`）。

执行上述步骤后，你的本地更新将会被推送到GitHub仓库，并与远程仓库同步。注意，如果你在推送之前有其他人对仓库进行了修改并且已经推送到远程仓库，你需要先执行`git pull`命令来拉取最新的代码，再进行推送操作，以免出现冲突。

这只是一些常见的Git命令，Git还有更多强大的功能和命令，建议参考官方文档或其他教程来学习更多。



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
版本: Vue: 3.3.4 + Vite: 4.4.9 + npm: 8.19.14 + pnpm: 7.33.6 + Git: 2.41.0.windows.1 
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
- "element-plus": "^2.3.9",饿了么组件库
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

## 第三阶段(2023/08/19)

主要写网站的首页(Index.vue)和CommonLayout.vue通用的组件(导航栏和页尾页进行了整合(公共的代码块),整合成一个组件通用,优化前,全部在一个文件里900行代码,很多重复赘余,往后对其进行拆分),还对屏幕进行了适应(手机和电脑),,其中手机端由于导航栏无法容纳太多的内容,所以对其进行了整合在"抽屉"里(element-Plus的组件库el-drawer,里面的标题里的内容也使用了"抽屉",更加的人性化),然后修改了网站访问的首地址(默认是Index.vue,通过修改了router路由配置),更改了路由的权限等等...

### 首页

#### PC端

未登录的情况
![index](/public/PhaseThree/image.png)

登录之后
![Alt text](/public/PhaseThree/image-1.png)
![Alt text](/public/PhaseThree/image-6.png)

#### 手机端

未登录情况

![Alt text](/public/PhaseThree/image-2.png)
![Alt text](/public/PhaseThree/image-4.png)

登录之后

![Alt text](/public/PhaseThree/image-3.png)
![Alt text](/public/PhaseThree/image-5.png)

## 第四阶段(2023/08/20)