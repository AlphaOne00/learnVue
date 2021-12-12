import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向函数,路由的默认路径方法。
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // 使用的html模式，url中间没有#拼接
  mode: 'history',
  base: process.env.BASE_URL,
  // 该属性可以指定默认的激活的class名
  linkActiveClass: 'active',
  routes
})

export default router
