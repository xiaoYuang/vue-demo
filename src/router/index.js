import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import * as cookie from 'utils/cookie'

Vue.use(Router)

// 路由器配置
const router = new Router({
  routes: routes
})

// // 配置白名单路由
// const whiteList = ['/login']

// // 路由守卫 -- 利用cookie来保持登录状态 还可以用vuex来保持
// router.beforeEach((to, from, next) => {
//   if (cookie.get('TOKEN')) {
//     // 已经登录
//     if (to.path === '/login') {
//       next({path: '/home'})
//     } else {
//       next()
//     }
//   } else {
//     // 还没有登录
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router
