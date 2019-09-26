import Vue from 'vue'
import axios from 'axios'
/* import qs from 'qs' */
import router from '../router'
import storage from '../utils/storage'

const V = new Vue()
// 环境设置
let baseUrl = process.env.NODE_ENV === 'production' ? getProductionBaseUrl() : '';

function getProductionBaseUrl () {
   return window.location.hostname == 'travel.bndxqc.com' ? `${window.location.protocol}//${window.location.hostname}` : `${window.location.protocol}//${window.location.hostname}/api`
}

// 封装post
export function post (url, data) {
   return new Promise((resolve, reject) => {
      axios.post(url, data).then(res => {
         resolve(res.data)
      }, err => {
         reject(err)
      })
         .catch((error) => {
            reject(error)
         })
   })
}

// 封装get
export function get (url, data) {
   return new Promise((resolve, reject) => {
      axios.get(url, data).then(res => {
         resolve(res)
      }, err => {
         reject(err)
      })
         .catch((error) => {
            reject(error)
         })
   })
}

// delete
export function Delete (url, data) {
   console.log('datade', data)
   return new Promise((resolve, reject) => {
      axios.delete(url, data).then(res => {
         resolve(res.data)
      }, err => {
         reject(err)
      })
         .catch((error) => {
            reject(error)
         })
   })
}

// 请求拦截

axios.interceptors.request.use(config => {
   if (config.url === '/bida-user/oauth/token') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      config.headers.Authorization = 'Basic Ym9uYWRlX2JnOmJvbmFkZV9iZw=='
   } else {
      const L_TOKEN = storage.l_getItem('ACCESS_TOKEN')
      config.headers.Authorization = L_TOKEN && `Bearer ${L_TOKEN.access_token}`
   }
   config.url = baseUrl + config.url
   return config
})
// // 响应时拦截
axios.interceptors.response.use((res) => {
   if (!storage.l_getItem('username') && !storage.l_getItem('ACCESS_TOKEN')) {
      Vue.prototype.goLogin()  // 调用登录失效的方法
   }
   return res;
}, error => {
   // 错误提醒
   // Message.error('服务请求出错')
   let status;
   console.log('error.response', error.response)
   if (error.response) {
      status = error.response.status
   } else {
      return Promise.reject(error)
   }
   if (status == 401) {
      const path = router.currentRoute.path
      // 首页的出差请求则不弹出登录
      if (path != '/login') {
         // 接口触发登录，token过期，需要传递路由覆盖之前存储的路由，登录成功后跳回这个路由
         V.$alert('token过期，请登录', '提示', {
            confirmButtonText: '确定'
         });
         Vue.prototype.goLogin()
      }
   }
   if (status === 500) {
      // 提示
   }
   return Promise.reject(error)
})
