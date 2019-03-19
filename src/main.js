import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'

import axios from 'axios';
import '../static/font/iconfont.css'
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
