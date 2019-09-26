// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import storage from './utils/storage'
import ElementUI from 'element-ui'
import './assets/css/common.scss'
import axios from 'axios'
import './utils/dateFormat'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false


Vue.prototype.$axios = axios
Vue.prototype.goLogin = () => {
  storage.s_clear() // 清空所有sessionStorage
  router.push('/login')
  return false
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
