import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = []

menus.forEach((item) => {
  routes.push({
    path: `/${item.componentName}`,
    name: item.componentName,
    component: () => import(`@/components/${item.componentName}`)
  })
})

routes.push({
  path: `/login`,
  name: 'Login',
  component: () => import(`@/components/Login`)
})

routes.push({
  path: `/`,
  name: 'Home',
  component: () => import(`@/components/Home`)
})

routes.push({
  path: `/t1`,
  name: 'T1',
  component: () => import(`@/components/T1`)
})

routes.push({
  path: `/t2`,
  name: 'T2',
  component: () => import(`@/components/T2`)
})

export default new Router({ routes })
