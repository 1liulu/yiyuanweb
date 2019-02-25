<template >
  <div id="index" >
    <mt-header class="header"  fixed title="个人中心">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
    <div class="top">
      <ul>
        <li id="li1">
          <div style="height: 30%;"></div>
          <div style="height: 60%;">
            <img src="../../static/user.png">
          </div>
          <div style="height: 10%;"></div>
        </li>
        <li class="li2">
          {{user.patient.name}}&nbsp;&nbsp;&nbsp;{{user.patient.sex==0?'男':'女'}}&nbsp;&nbsp;&nbsp;{{user.patient.age}}岁<br>
          {{user.patient.phone}}
        </li>
      </ul>
      <div class="kong" ></div>
      <el-card shadow="always" body-style="padding: 0px;background-color: #f8f8f8;">
        <div class="feature">
        <table>
          <tr>
            <td>
              <mt-button class="mtbutton" >
                <img src="../../static/qian.png" height="22" width="22" slot="icon"><br>
                我的钱包
              </mt-button>
            </td>
            <td>
              <mt-button class="mtbutton" >
                <img src="../../static/shezhi.png" height="22" width="22" slot="icon"><br>
                账户设置
              </mt-button>
            </td>
            <td>
              <mt-button class="mtbutton" >
                <img src="../../static/3D.png" height="22" width="22" slot="icon"><br>
                3D打印申请
              </mt-button>
            </td>
          </tr>
        </table>
        </div>
      </el-card>
      <div class="kong" ></div>
      <div class="kong" ></div>
      <el-card class="phone" shadow="always" body-style="width: 100%;height: 1.1rem;background-color: #ffffff;">
        <table>
          <tr>
            <td>
              客服电话：155555555557777777777777777
            </td>
          </tr>
        </table>
      </el-card>
    </div>
    </div>
  </div>

</template>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .kong{
    height: 15px
  }
  .header{
    background-color: #ffffff;
    color: dimgrey;
    font-size: 16px;
  }
  .top{
    height: 11rem;
    background-color: #1e90ff;
    width: 100%;
  }
  .top ul{
    width: 100%;
    height: 100%;
    text-align:center;
    color: #ffffff;
  }
  #li1{
    height: 70%;
    width: 100%;
  }
  #li1 img{
    height: 100%;
  }
  .li2{
    height: 30%;
    width: 100%;
    font-size: 14px;
  }
  .feature{
    width: 100%;
    height: 7rem;
  }
  .feature table{
    width: 100%;
    height: 100%;
    text-align:center
  }
  .feature td{
    width: 33.3%;
    height: 100%;
  }
  .phone table{
    width: 100%;
    height: 100%;
    text-align:center;
    color: #bfbfbf;
    font-size: 13px;
  }

  .mtbutton{
    height: 80%;
    width: 90%;
    font-size: 13px;
    color: #828282;
    background-color: #ffffff;
  }

</style>

<script>
  export default{
    data(){
      return {
        data:{"code":1},
        user:[]
      }
    },
    mounted(){
      this.load();
    },
    computed: {
      load(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.wxindex(),
          data:null,
          crossDomain: true
        }).then(response=> {
          //var jsonData = JSON.stringify(response.data, null, 4);
          console.log(response.data)
          if(response.data.retCode==0){
            that.user=response.data.message
          }

        })

      }

    }

  }
</script>
