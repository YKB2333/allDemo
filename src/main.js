import Vue from 'vue'
import App from './App.vue'
import router from './router';
import MintUI from 'mint-ui'//---------引入的mintui框架
import axios from 'axios'

import "./scss/base.scss"
import "./assets/utils/rem"
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.min.css'


Vue.prototype.$axios = axios //方法
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
