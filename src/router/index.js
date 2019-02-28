import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import user from '../pages/user.vue'
import use from '../pages/use.vue'
import token from './defined.js'
import api from './api.js'
import particulars from '../pages/particulars.vue'
Vue.use(Router);
Vue.prototype.token=token;
Vue.prototype.api=api;
export default new Router({
  routes: [

    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/use',
      name: 'use',
      component: use
    },
    {
      path: '/particulars',
      name: 'particulars',
      component: particulars
    },
  ]
})
