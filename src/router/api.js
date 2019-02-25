

import token from './defined.js'

export default {
  url:"http://192.168.6.105/",
  //用户个人中心
  wxindex(){
   return this.url+"wxindex/user?token="+token.token;
  },
  //就诊人列表
  Patientlist(){
    return this.url+"Patient/list?token="+token.token;
  }
}
