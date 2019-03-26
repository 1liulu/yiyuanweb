<template>
  <div id="use">
    <div style="width: 100% ;position:absolute">
      <mt-navbar v-model="selected" class="navbar" fixed>
        <mt-tab-item id="1" class="n1" >影像授权</mt-tab-item>
        <mt-tab-item id="2" class="n1" >过期授权</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div v-for="item in list">
            <div class="kong" ></div>
            <el-card shadow="always" body-style="padding: 0px;">
              <div class="s1">
                <div class="t1">
                  <table valign="middle">
                    <tr>
                      <td>授权给了：{{item.doctorname}}</td>
                    </tr>
                  </table>
                </div>
                <div class="t2">
                  <table valign="middle">
                    <tr>
                      <td  class="d1" style="">
                        <img src="../../static/user.png" style="width:90%"  ><br>

                      </td>
                      <td class="d2" style="">
                        <p>
                          <span style="color:#1e90ff;font-size: 17px">{{item.username}}</span><br>
                          <span style="color:#cccccc;font-size: 12px">共0份影像</span>
                        </p>
                      </td>
                      <td  class="d3" >
                        <img src="../../static/right.png" style="width: 50%">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="t3">
                  <table  valign="middle">
                    <tr>
                      <td class="d1">发起时间：{{item.starttime|formatDate}}</td>
                      <td class="d2" style="text-align:right" >有效时间：{{item.endtime|formatDate}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </el-card>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div v-for="item in overlist">
            <div class="kong" ></div>
            <el-card shadow="always" body-style="padding: 0px;">
              <div class="s1">
                <div class="t1">
                  <table valign="middle">
                    <tr>
                      <td>授权给了：{{item.doctorname}}</td>
                    </tr>
                  </table>
                </div>
                <div class="t2">
                  <table valign="middle">
                    <tr>
                      <td  class="d1" style="">
                        <img src="../../static/user.png" style="width:90%"  ><br>

                      </td>
                      <td class="d2" style="">
                        <p>
                          <span style="color:#1e90ff;font-size: 17px">{{item.username}}</span><br>
                          <span style="color:#cccccc;font-size: 12px">共0份影像</span>
                        </p>
                      </td>
                      <td  class="d3" >
                        <img src="../../static/right.png" style="width: 50%">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="t3">
                  <table  valign="middle">
                    <tr>
                      <td class="d1">发起时间：{{item.starttime|formatDate}}</td>
                      <td class="d2" style="text-align:right" >有效时间：{{item.endtime|formatDate}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </el-card>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
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
    height: 20px
  }
  .navbar{
    height: 3rem;
  }
  .n1{
    font-size:20px;
  }
  .s1{
    width: 100%;
    height: 10rem;
    background-color: #ffffff;
  }
  .t1{
    height: 20%;
    width: 100%;
    border-bottom: 1px solid #edebee;
  }
  .t1 table{
    width: 100% ;
    height: 100%;
    padding-left: 5%;
  }
  .t1 td{
    font-size: 13px;
    color: #666666;
  }
  .t2{

    height: 55%;
    width: 100%;
  }
  .t2 table{
    width: 100%;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .t3{
    border-top: 1px solid #edebee;
    height: 25%;
    width: 100%;

  }
  .t3 table{
    width: 100% ;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .t3 .d1{
    color: #dddddd;
    font-size: 13px;
  }
  .t3 .d2{
    color: #fe1c1c;
    font-size: 13px;
  }
  .t2 .d1{
    width: 18%;
    height: 100%;
  }
  .t2 .d2{
    width: 70%;
    height: 100%;
  }
  .t2 .d3{
    width: 12%;
    height: 100%;
    text-align:right
  }
</style>

<script>
  import {formatDate} from '../router/date.js';
  export default {
    data() {
      return {
        selected:'1',
        list:[],
        overlist:[],
      }
    },
    mounted() {
      this.load1()
      this.load()

    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy年MM月dd日');
      }
    },
    methods: {

      load(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.authorizationlist(),
          data:null,
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            that.list=response.data.message
          }

        })

      },
      load1(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.overduelist(),
          data:null,
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            that.overlist=response.data.message
          }

        })

      }
    }

  }
</script>
