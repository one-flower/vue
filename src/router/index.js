import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由的懒加载，打包会生成一个单独的文件
    // /* webpackChunkName: "about" */是命名
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/router/father",
    name: "routerFather",
    component: () => import("@/views/router/father-child/father"),
  },
  {
    path: "/router/router1",
    name: "router1",
    component: () => import("@/views/router/router/router1"),
  },
  {
    path: "/router/router2",
    name: "router2",
    component: () => import("@/views/router/router/router2"),
  },
  {
    path: "/router/:id",
    name: "router3",
    component: () => import("@/views/router/router/router3"),
  },
  // 通配符匹配 *
  {
    path: "*",
    name: "router3",
    component: () => import("@/views/router/router/router4"),
  },
]

const router = new VueRouter({
  routes
})

export default router
