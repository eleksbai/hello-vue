// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import 'vue-awesome/icons'
// import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.component('icon', Icon)

const store = new Vuex.Store({
  state: {
    count: 0,
    isLogin: false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login (state) {
      state.isLogin = true
    }
  }

})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!store.state.isLogin) { // 通过vuex state获取当前的token是否存在
      next({
        path: 'login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
