// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import qs from 'qs'


const myaxios = axios// 不跨域的axios
// 如果要跨域的话, 对axios进行一些设置,当前使用的是跨域的
const axiosInstance = axios.create({
  headers: {'Content-Type': 'application/json;charset=UTF-8'},// 设置传输内容的类型和编码
  withCredentials: true,// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});
Vue.prototype.baseURL = "http://luqiwen.cn:8080/api";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = qs
let bus = new Vue()
Vue.prototype.bus = bus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
