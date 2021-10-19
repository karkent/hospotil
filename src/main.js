// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import ElementUI from 'element-ui'
import qs from 'qs'
import '../src/css/myCss.css'
import * as echarts from 'echarts'
// import store from "./store"

Vue.prototype.$qs = qs
// Vue.config.productionTip = false
Vue.prototype.$axios =Axios
// Vue.prototype.$store = store
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI)
Axios.defaults.baseURL = 'api'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router: router,
  // 渲染
  render: h => h(App)
}).$mount('#app')
