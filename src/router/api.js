

import token from './defined.js'
export default {
  url:"http://192.168.199.154/",
  //url:"http://jp.starint.cn/hospital/",
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
  //会诊管理
  Consultation(){
    return this.url+"Consultation/list?token="+token.token;
  },
  //微信登陆
  wechatlogin(){
    return this.url +"wx/wechatlogin"
  },
  //用户绑定
  userbind(){
    return this.url +"wx/user?token="+token.token;
  },
  //发送验证码
  sendmsg(){
    return this.url +"wx/sms";
  },
  //查看报告详情
  reportDetails() {
    return this.url + "Patient/reportDetails?token="+token.token;
  },
  //删除家庭组成员
  deluser() {
    return this.url + "Patient/deluser?token="+token.token;
  },
  //添加家庭组成员
  addPatient() {
    return this.url + "Patient/addPatient?token="+token.token;
  },

}
