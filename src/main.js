import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import './assets/css/common.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
