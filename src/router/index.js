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
import specialist from '../pages/specialist.vue'
import consultant from '../pages/consultant.vue'
import getparticulars from '../pages/getparticulars.vue'
import shouquan from '../pages/shouquan.vue'
import uselist from '../pages/uselist.vue'
import getinfo from '../pages/getinfo.vue'
import binding from '../pages/binding.vue'
import adduser from '../pages/adduser.vue'
import { PaletteButton } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
Vue.use(Router);
Vue.prototype.token=token;
Vue.prototype.code=code;
Vue.prototype.api=api;
Vue.component(PaletteButton.name, PaletteButton);
Vue.component(DatetimePicker.name, DatetimePicker);
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
    {
      path: '/getinfo',
      name: 'getinfo',
      component: getinfo
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: adduser
    },
    {
      path: '/specialist',
      name: 'specialist',
      component: specialist
    },
    {
      path: '/consultant',
      name: 'consultant',
      component: consultant
    },
    {
      path: '/uselist',
      name: 'uselist',
      component: uselist
    },
    {
      path: '/getparticulars',
      name: 'getparticulars',
      component: getparticulars
    },
    {
      path: '/shouquan',
      name: 'shouquan',
      component: shouquan
    },
    // {
    //   path: '/consultationReport',
    //   name: 'consultationReport',
    //   component: consultationReport
    // },
  ]
})
