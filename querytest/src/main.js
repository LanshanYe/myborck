import Vue from 'vue'
import App from './App.vue'
import axios from './utils/request'

Vue.config.productionTip = false
Vue.prototype.$r = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
