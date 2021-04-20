import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import Vuex from 'vuex'
import store from "./store"
axios.defaults.baseURL = "http://localhost:8083/profittrea"
//设置每次请求可以挂在cookies
axios.default.withCredentials = true
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
//添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
      let token = localStorage.getItem('Authorization')
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });


new Vue({
  router,store:store,
  render: h => h(App)
}).$mount('#app')
