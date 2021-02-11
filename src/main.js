import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCurrency from 'vue-currency-filter'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.prototype.$http = axios;

Vue.use(VueCurrency, {
  name: 'rupiah',
  symbol : 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://infiniteroom.herokuapp.com/api/v2'
const token = localStorage.getItem('Authorization')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// require('dotenv').config();

axios.defaults.baseURL = process.env.VUE_APP_API_URL
// axios.defaults.headers.common['Authorization'] = process.env.VUE_APP_API_AUTHORIZATION;
axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMzQ1MzBkZS0yN2VhLTQxMGItYjQxYS1mNTBmZTc0ODc2OWQiLCJuYW1hIjoiYWRtaW4gbm9ybWFsIiwicm9sZSI6MSwibGV2ZWwiOjAsImlhdCI6MTYxMzAyNTQ5NSwiZXhwIjoxNjEzMTExODk1fQ.u6Y3n7rofom33dMJIM2IynECAmQvHz1h3GLWHTxdvO0';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
