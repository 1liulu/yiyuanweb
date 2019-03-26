import Vue from 'vue'
import Router from 'vue-router'
import indextab from '../pages/indextab.vue'
import index from '../pages/index.vue'
import user from '../pages/user.vue'
import use from '../pages/use.vue'
import message from '../pages/message.vue'
import token from './defined.js'
import code from './defined.js'
import api from './api.js'
import particulars from '../pages/particulars.vue'

import binding from '../pages/binding.vue'
Vue.use(Router);
Vue.prototype.token=token;
Vue.prototype.code=code;
Vue.prototype.api=api;
export default new Router({
  routes: [
    {
      path:"/binding",
      name: 'binding',
      component: binding
    },
    {
      path: '/indextab',
      name: 'indextab',
      component: indextab
    },
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
    {
      path: '/message',
      name: 'message',
      component: message
    },
    // {
    //   path: '/consultationReport',
    //   name: 'consultationReport',
    //   component: consultationReport
    // },
  ]
})
