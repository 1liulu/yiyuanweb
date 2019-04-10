<template>
  <div id="use">
    <mt-header class="header" fixed title="填写授权信息">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
      <div class="kong" ></div>
      <el-card shadow="always" body-style="padding: 0px;">
        <div class="top1">
          <table class="t1"  >
            <tr>
              <td class="d1" align="center" valign="middle" >
                <img src="../../static/user.png">
              </td>
              <td class="d2" >
                <div class="text1"></div>
                <div class="text2">
                  <p class="p1">{{user.name}}</p>
                  <p class="p2">{{user.sex==0?'男':'女'}}</p>
                  <p class="p3">{{user.uid}}</p>
                  <p class="p4">{{user.number}}份影像</p>
                </div>
                <div class="text3"></div>
              </td>
            </tr>
          </table>
        </div>
      </el-card>
      <div class="kong"></div>
      <div style="width: 100%;height: 2.5rem;background-color: #ffffff;">
        <table style="height: 100%;width: 100%;padding:0 3%">
          <tr>
            <td>授权信息</td>
          </tr>
        </table>
      </div>
      <div style="width: 100%;height: 7rem;background-color: #ffffff;">
        <table style="height: 100%;width: 100%;padding:0 5%">
          <tr>
            <td style="height: 33.3%;border-bottom: 1px solid #edebee;">
              <input type="text" v-model="info.name"   placeholder="请输入被授权人姓名"/>
            </td>
          </tr>
          <tr>
            <td style="height: 33.3%;border-bottom: 1px solid #edebee;">
              <input  type="text" v-model="info.phone"  placeholder="请输入被授权人电话号码"/>
            </td>
          </tr>
          <tr>
            <td style="height: 33.3%;border-bottom: 1px solid #edebee;">
              <input type="text" @click="openPicker" v-model="info.times"      placeholder="请选择授权到期日期"/>
            </td>
          </tr>
        </table>
      </div>
      <div class="kong" style="background-color: #ffffff"></div>
      <div class="kong" style="background-color: #ffffff"></div>
      <div class="kong" style="background-color: #ffffff"></div>
      <div class="kong"></div>
      <div style="width: 100%;height: 2.5rem;background-color: #ffffff; border-bottom: 1px solid #edebee;">
        <table style="height: 100%;width: 100%;padding:0 3%">
          <tr>
            <td>档案信息</td>
          </tr>
        </table>
      </div>
      <div style="background-color: #ffffff;">
        <table class="table1" >
          <tr>
            <td class="td1" >
              {{reportList.creation_time|formatDate2}}<br>
              <span style="font-size: 13px;color: #edebee">{{reportList.creation_time|formatDate1}}</span>
            </td>
            <td class="td2">
              枣庄市某医院&nbsp;&nbsp;<br>
              检查项目：{{reportList.items}}
            </td>
            <td class="td3" >
            </td>
          </tr>
        </table>
      </div>
      <div class="btn">
        <button  @click="onclicks()">确定</button>
      </div>
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        v-model="info.time"
        @confirm="handleConfirm">
      </mt-datetime-picker>
    </div>

  </div>

</template>
<style scoped>

  * {
    margin: 0;
    padding: 0;
    color: #100e0e;
  }
  .kong{
    height: 10px
  }
  .header {
    background-color: #ffffff;
    color: dimgrey;
    font-size: 16px;
  }
  .btn {
    margin: 1.5rem 30%;
    height: 2rem;
    font-size: 16px;

  }

  .btn button {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    border: none;
    outline: none;
    background-color: #1e90ff;
    color: #fff;
    font-size: 16px;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background: transparent;
    box-sizing: border-box;
    font-size: 16px;
  }

  .top1 {
    height: 7rem;
    background-color: #ffffff;
    width: 100%;

  }

  .t1 {
    width: 100%;
    height: 100%;
  }

  .top .d1 {
    width: 40%;
    height: 100%;
  }

  .top .d2 {
    width: 60%;
    height: 100%;
  }

  .t1 img {
    width: 46%;
  }

  .text1 {
    height: 15%;
  }

  .text3 {
    height: 15%;
  }

  .text2 {
    height: 70%;
    display: table-cell;
    vertical-align: middle;
  }

  .top .text2 p {
    line-height: 1.7rem;
  }

  .top .p2 {
    font-size: 12px;
  }

  .top .p3 {
    font-size: 12px;
  }

  .top .p4 {
    font-size: 12px;
    color: #ffffff;
  }

  .top .p1 {
    color: #ffffff;
    font-size: 20px;
  }

  .top1 .d1 {
    width: 30%;
    height: 100%;
  }

  .top1 .d2 {
    width: 70%;
    height: 100%;
  }
  .top1 .text2 p {
    line-height: 1.2rem;
  }

  .top1 .text2 .p1 {
    font-size: 16px;
  }

  .top1 .text2 .p2 {
    font-size: 12px;
  }

  .top1 .text2 .p3 {
    font-size: 12px;
  }

  .top1 .text2 .p4 {
    font-size: 12px;
    color: #cccccc;
  }
  .table1{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%
  }
  .table1 .td1{
    height:5rem;
    width: 30%;
    font-size: 16px;
    color: #1e90ff
  }
  .table1 .td2{
    width: 60%;
    font-size: 15px;
    line-height: 2rem;
    color: #666666
  }
  .table1 .td3{
    width: 10%;
    text-align:right
  }
</style>

<script>
  import {formatDate} from '../router/date.js';
  import { MessageBox } from 'mint-ui';
  export default {

    data() {
      return {
        user: [],
        cardnum:'',
        reportList:[],
        info:[],
      }
    },
    mounted() {
     this.user=this.token.user
     this.reportList=this.token.particulars
     this.info.time=new Date();
    },
    filters: {
      formatDate1(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy');
      },
      formatDate2(time) {
        var date = new Date(time);
        return formatDate(date, 'MM-dd');
      },
    },
    methods: {
      post(userid,name,phone,date,reportid) {
        var dates = new Date(date);
        let time=this.formatDate(dates, 'yyyy-MM-dd hh-mm')
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.addAuthorization(),
          params:{userid:userid,name:name,phone:phone,date:time,reportid:reportid},
          crossDomain: true
        }).then(response => {
          if (response.data.retCode == 0) {
            MessageBox('提示', '授权成功');
            this.$router.push({name:'user'})
          }else{
            MessageBox('提示', response.data.message);
          }

        })

      },
      onclicks(){
        MessageBox.confirm('确认授权?').then(action => {
          this.post(this.user.uid,this.info.name,this.info.phone,this.info.time,this.reportList.id)
        });
      },
      openPicker () {
        this.$refs.picker.open()
      },
      handleConfirm(){
        let that = this;
        var dates = new Date(that.info.time);
        that.info.times=this.formatDate(dates, 'yyyy-MM-dd hh-mm')

      },
      formatDate (date, fmt) {
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        };
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
          }
        }
        return fmt;
      },
      padLeftZero (str) {
        return ('00' + str).substr(str.length);
      }
    },

  }

</script>
