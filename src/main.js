import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import './assets/main.scss'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
