<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="login">
    <div class="title">
      亿新医疗云胶片
    </div>

    <div class="login_in">
      <div class="item">
        <i class="iconfont icon-institute"></i>
        <div class="item_left">
          <div @click="isPick=!isPick"> {{loginData.mechanism}}</div>
        </div>
      </div>

      <div class="item">
        <div class="item other">
          <i class="iconfont icon-wendang"></i>
          <div class="item_left">
            <input type="text" v-model="loginData.cardnum" placeholder="就诊ID"/>
          </div>
        </div>

        <div class="ID">ID在哪？这个可以自动撑开</div>
      </div>

      <div class="item">
        <i class="iconfont icon-shouji"></i>
        <div class="item_left">
          <input
            type="text"
            v-model="loginData.phone"
            placeholder="请输入您的手机号码"
          />
        </div>
      </div>

      <div class="item">
        <div class="item other">
          <i class="iconfont icon-buoumaotubiao32"></i>
          <div class="item_left">
            <input id="CODE"
              type="text"
              v-model="loginData.code"
              placeholder="输入验证码"
              v-on:input="inputFuc"
            />
          </div>
        </div>

        <div  class="ID" :class="{'time':getCodeTime>0}" @click="onclicks">
          {{getCodeTime==0?"获取验证码":getCodeTime+"s后重新获取"}}
        </div>
      </div>

      <div class="btn">
        <button @click="login">确定</button>
      </div>

      <div class="statement">
        <i :class="{ active: active }" @click="active = !active"></i>
        同意《电子影像协议 》
      </div>
    </div>


    <div class="pickBox" v-if="isPick">
      <div class="btns">
        <span @click="isPick = false">取消</span>
        <span @click="picker" style="color:#1e90ff;">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
  </div>
</template>

<script>
import {defined} from "../router/defined.js"
  export default {
    data() {
      return {
        isPick: false,
        pickerValue: "",
        slots: [
          {
            flex: 1,
            values: ['机构1', '机构2', '机构3', '机构4', '机构5'],
            className: 'slot',
            textAlign: 'center'
          }
        ],
        getCodeTime: 0,
        loginData: {
          mechanism: "机构1",
          cardnum: "",
          phone: "",
          code: ""
        },
        active: true
      };
    },
    created() {
    },
    methods: {
      inputFuc(){


        if(this.code.code == this.loginData.code){
          //alert("ssss")
        }else{
          if(this.loginData.code.length==4){
            this.loginData.code=""
            alert("验证码错误")
          }

        }
      },
      picker() {
        this.loginData.mechanism = this.pickerValue;
        this.isPick = false;
      },
      onValuesChange(picker, values) {
        this.pickerValue = values[0]
      },
      getCode() {
        if (this.getCodeTime == 0) {
          this.getCodeTime = 60;
          let me = this;
          let time = setInterval(() => {
            if (me.getCodeTime > 0) {
              me.getCodeTime--
            } else {
              clearInterval(time)
            }
          }, 1000);
        } else {
          return
        }
      },
      isPoneAvailable(str) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
          return false;
        } else {
          return true;
        }
      },
      login() {
        if (!this.loginData.mechanism) {
          alert("请输入机构");
          return;
        }

        if (!this.loginData.cardnum) {
          alert("请输入就诊ID");
          return;
        }

        if (!this.loginData.phone) {
          alert("请输入手机号码");
          return;
        }



        if (!this.isPoneAvailable(this.loginData.phone)) {
          alert("手机号码格式不正确")
          return
        }

        this.bingding(this.loginData.phone,this.loginData.cardnum)



        // //登录
        // this.$http.get(this.api.userbind(), {params:{cardnum:this.loginData.cardnum, phone:this.loginData.phone,code:this.loginData.phone}}).then(res => {
        //   console.log(res)
        //   if (res.data.retcode == 1) {
        //     alert("登录成功！")
        //     this.$router.push({
        //       path: "/index"
        //     })
        //   } else {
        //     alert("未能成功登录！")
        //   }
        // })
      },
      bingding(phone,num){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.userbind(),
          params:{phone:phone,cardnum:num},
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            this.token.settoken(response.data.message)
            this.$router.push({
                path: "/index"
            })
          }
        })

      },
      onclicks() {
        if (this.getCodeTime == 0) {
          this.getCodeTime = 60;
          let me = this;
          let time = setInterval(() => {
            if (me.getCodeTime > 0) {
              me.getCodeTime--
            } else {
              clearInterval(time)
            }
          }, 1000);
        } else {
          return
        }

        this.$http.get(this.api.sendmsg(),
          {params:{phone:this.loginData.phone}}
        ).then(response => {
          console.log(response.data.code)
          this.code.setcode(response.data.code)
          if (response.data.retCode == 0) {
          }

        })

      },
    }
  };
</script>

<style scoped>
  .login .title {
    text-align: center;
    margin-top: 90px;
    font-size: 24px;
    color: #1e90ff;
  }

  .login .login_in {
    margin-top: 80px;
    padding: 0 50px;
  }

  .login .login_in .item {
    border-bottom: 1px solid #1e90ff;
    color: #1e90ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }

  .login .login_in > .item {
    margin-top: 2rem;
  }

  .login .login_in .item input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    box-sizing: border-box;
    font-size: 16px;
  }

  .login .login_in .item.other {
    border: none;
    flex: 1;
  }

  .item_left {
    flex: 1;
    padding-left: 15px;
    color: #333;
    font-size: 13px;
  }

  .ID {
    font-size: 12px;
  }

  .ID.time {
    color: #ccc;
  }

  .btn {
    margin-top: 20px;
    height: 28px;
  }

  .btn button {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    border: none;
    outline: none;
    background-color: #1e90ff;
    color: #fff;
  }

  .statement {
    font-size: 12px;
    color: #1e90ff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  .statement > i {
    width: 12px;
    height: 12px;
    border: 1px solid #1e90ff;
    margin-right: 5px;
    border-radius: 2px;
  }

  .statement > i.active {
    background-color: #1e90ff;
    position: relative;
  }

  .statement > i.active::after {
    content: "";
    display: block;
    width: 50%;
    height: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(-45deg);
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }

  .pickBox {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    padding: 30px 0 0;
  }

  .pickBox .btns {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 0 15px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
</style>
