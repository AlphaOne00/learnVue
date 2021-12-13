import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/Home.vue')
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
    /* 元数据 */
    meta: {
      title: '首页'
    },
    component: Home
  },
  /* 路由的懒加载，只有当需要该路由界面的时候才会加载 */
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  // 使用的html模式，url中间没有#拼接
  mode: 'history',
  base: process.env.BASE_URL,
  // 该属性可以指定默认的激活的class名
  linkActiveClass: 'active',
  routes
})

/* vue-router的全局导航守卫，需要传入一个参数，并调用next()函数,冲route的元数据中取数
   有路由嵌套的时候可以使用metched数组的第一个元素的meta */
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
}) 

export default router
