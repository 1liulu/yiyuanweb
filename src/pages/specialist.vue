<template>
  <div id="use">
    <mt-header class="header" fixed title="专家列表">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">

      <div v-for="item in userlist">
        <div class="kong" ></div>
        <el-card shadow="always" body-style="padding: 0px;">
          <div class="top1">
            <table class="t1"  >
              <tr>
                <td class="d1" align="center" valign="middle" @click="onclicks(item.id)">
                  <img src="../../static/user.png">
                </td>
                <td class="d2" @click="onclicks(item.id)">
                  <div class="text1"></div>
                  <div class="text2">
                    <p class="p1">{{item.name}}</p>
                    <p class="p2">枣庄矿务局医院</p>
                    <p class="p4">手机号：{{item.phone}}</p>
                  </div>
                  <div class="text3"></div>
                </td>
              </tr>
            </table>
          </div>
        </el-card>
      </div>
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

  .top {
    height: 10rem;
    background-color: #1e90ff;
    width: 100%;

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

</style>

<script>
  import { MessageBox } from 'mint-ui';
  export default {

    data() {
      return {
        userlist: [],
        user: [],
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.specialistfinall(),
          data: null,
          crossDomain: true
        }).then(response => {
          //var jsonData = JSON.stringify(response.data, null, 4);
          if (response.data.retCode == 0) {
            this.userlist=response.data.message

          }

        })

      },
      onclicks(id){
        //选择专家付款
        //params:{uid:this.token.userid},
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.addorder(),
          params:{id:this.token.userid,did:id},
          crossDomain: true
        }).then(response => {
          //var jsonData = JSON.stringify(response.data, null, 4);
          if (response.data.retCode == 0) {
            let message=response.data.message
            this.pay(message.appid,message.timestamp,message.nonceStr,message.sign,message.prepayid,message.orderid,message.id);
          }else {
            MessageBox('提示', '订单失败');
          }

        })
      },
      pay(appid,timeStamp,nonceStr,paySign,prepayid,indentNum,id){
        /* 微信支付 */
        var appId =appId;   //微信id
        var timeStamp = timeStamp;  //时间戳
        var nonceStr = nonceStr;  //32位随机字符串
        var paySign = paySign;  //微信签名
        var prepayid = prepayid;
        var indentNum =indentNum;   //订单号
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "debug": false,
            "appId": appId,   //公众号
            "timeStamp":timeStamp, //时间戳
            "nonceStr": nonceStr, //32位随机字符串
            "package": prepayid,
            "signType": "MD5",    //微信签名方式
            "paySign":paySign //微信签名
          },
          function(res){
              if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                let that = this;
                that.$http({
                  method: 'post',
                  url: this.api.updateOrder(),
                  params:{id:id},
                  crossDomain: true
                }).then(response => {
                  //var jsonData = JSON.stringify(response.data, null, 4);
                })
                MessageBox('提示', '订单成功');
            }
          });
      },


    },

  }

</script>
