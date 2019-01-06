
### 项目结构介绍
[https://www.jianshu.com/p/7b6cf95b0cd5](https://www.jianshu.com/p/7b6cf95b0cd5)

* npm: js的包管理工具, 类似于pip
* cnpm:　淘宝镜像源, 等同于npm
* yarn: js的包管理工具进化版. **优先使用**
### 重要文件介绍
* package.json　第三方模块配置文件，类似于requirements.txt
* index.html html 入口文件
* src/main.js　引入相关模块
* src/App.vue　引入模板
* src/router/index.js　入口路由
* 

### 安装cnpm
npm 出问题就删除node_modules文件夹
```
npm install cnpm -g --registry=https://registry.npm.taobao.org
#　全局安装出现异常则删除 /node_modules/
sudo rm -rf /usr/local/lib/node_modules/
```

### 安装yarn, npm和yarn比较
```
# 添加存储库
sudo apt remove cmdtest 
# 需注意同名软件包冲突(ubuntu-18.04)
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn

#　命令使用比较
npm install === yarn 
npm install taco --save === yarn add taco
npm uninstall taco --save === yarn remove taco
npm install taco --save-dev === yarn add taco --dev
npm update --save === yarn upgrade
```
### 全局安装 vue/cli
```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 项目使用一般方法
```
按照以往，我的步骤都是：

git clone xxx
npm install
npm run dev


这时，JJ给我来了下面一段

git clone xxx
yarn
yarn start
```

### Demo项目 hello-vue
Vue + Vue-router + Element-ui 搭建一个非常简单的dashboard demo

参考　[https://segmentfault.com/a/1190000012015667](https://segmentfault.com/a/1190000012015667)

准备删除 [https://segmentfault.com/a/1190000007124470](https://segmentfault.com/a/1190000007124470)

使用ide WebStorm
```
# 使用框架快速搭建新项目
vue init webpack hello-vue
# 一路回车，碰到Yes,use NPM | Yes,use Yarn 　选择　Yes,use Yarn
cd hello-vue
# 使用git进行版本管理
git init 
git add .
git commit -m "vue init webpack hello-vue"
# 安装 element-ui
yarn add element-ui
#　WebStorm说明代码页面右击，选择 Fix Eslint Problems
# 修复格式异常的报错
# webstorm commit 页面的　reaange code　会使标签内的属性重新排序
# 美观优化 
yarn add --dev normalize.css   # 没看出来
yarn add --dev vue-awesome   # 图标模块
#　主要内容路由
# 使用路由和懒加载
```


### 箭头函数 => 
廖雪峰教程
[https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001438565969057627e5435793645b7acaee3b6869d1374000](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001438565969057627e5435793645b7acaee3b6869d1374000)
```javascript
// 原始对象
var menu = [{
  name: '基础',
  id: 'basic',
  icon: 'th-large',
  sub: [{
    name: 'Layout 布局',
    componentName: 'BasicLayout'
  }, {
    name: 'Container 布局容器',
    componentName: 'BasicContainer'
  }]
}, {
  name: '表单',
  id: 'form',
  icon: 'tree',
  sub: [{
    name: 'Radio 单选框',
    componentName: 'FormRadio'
  }, {
    name: 'Checkbox 多选框',
    componentName: 'FormCheckbox'
  }]
}]

// 原始路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

//　js循环语句和路由懒加载应用
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})

// 遍历数组中的对象 item
menus.forEach(function(item){...})
//遍历item中的sub数组中的对象 sub(即一个二级导航)
item.sub.forEach((function(sub){...})
// 每个二级导航配置路由
  routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
      })

// 路由懒加载的关键语句
component: () => import(`@/components/${sub.componentName}`)
```

forEach方法中的function回调支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
```
var ar = [1,2,3]
// 打印数字
ar.forEach(function(item){console.log(item)})

```

### 
参考教程
[https://segmentfault.com/a/1190000012015667](https://segmentfault.com/a/1190000012015667)








# hello-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
