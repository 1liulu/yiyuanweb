

import token from './defined.js'

export default {
  url:"http://192.168.6.103/",
  //用户个人中心
  wxindex(){
   return this.url+"wxindex/user?token="+token.token;
  },
  //就诊人列表
  Patientlist(){
    return this.url+"Patient/list?token="+token.token;
  },
  //影像授权列表
  authorizationlist(){
    return this.url+"authorization/list?token="+token.token;
  },
  //过期授权列表
  overduelist(){
    return this.url+"authorization/overduelist?token="+token.token;
  },
  //过期授权列表
  particulars(){
    return this.url+"Patient/particulars?token="+token.token;
  },
  Consultation(){
    return this.url+"Consultation/list?token="+token.token;
  }
}
