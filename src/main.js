import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {initAxios} from './utils/axios-init'


Vue.use(VueAxios, axios)
initAxios();

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.isAuthenticated = function () {

  return localStorage.token !== null && localStorage.token !== undefined;
}


new Vue({
  render: h => h(App),
}).$mount('#app')
