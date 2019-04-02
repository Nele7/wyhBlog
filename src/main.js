import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import './assets/css/common.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './assets/js/axios'
import con from './config/'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = api 
Vue.prototype.$con = con
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
