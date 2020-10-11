import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
axios.interceptors.request.use(function (config) {
  config.headers.token = localStorage.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.isAuthenticated = function () {
  console.log("token is " + localStorage.token);
  console.log("token !== null is "+( localStorage.token!==null));
  return localStorage.token !== null && localStorage.token !== undefined;
}


new Vue({
  render: h => h(App),
}).$mount('#app')
