<template>
  <div id="use">
    <mt-header class="header" fixed title="就诊人列表">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
      <div class="top">
        <table class="t1">
          <tr>
            <td class="d1" align="center" valign="middle">
              <img src="../../static/user.png">
            </td>
            <td class="d2">
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
      <div v-for="item in userlist">
        <div class="kong" ></div>
        <el-card shadow="always" body-style="padding: 0px;">
        <div class="top1">
          <table class="t1">
              <tr>
                <td class="d1" align="center" valign="middle">
                  <img src="../../static/user.png">
                </td>
                <td class="d2">
                  <div class="text1"></div>
                  <div class="text2">
                    <p class="p1">{{item.name}}</p>
                    <p class="p2">{{item.sex==0?'男':'女'}}</p>
                    <p class="p3">{{item.uid}}</p>
                    <p class="p4">{{item.number}}份影像</p>
                  </div>
                  <div class="text3"></div>
                </td>
                <td class="d3"></td>
                <td class="d4">删除</td>
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
    width: 46%;
    height: 100%;
  }
  .top1 .d3 {
    width: 1%;
    height: 100%;
    background-color: #f8f8f8;
  }
  .top1 .d4 {
    width: 23%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
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
  export default {
    data() {
      return {
        userlist: [],
        user: [],
      }
    },
    mounted() {
      this.load
    },
    computed: {
      load() {
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.Patientlist(),
          data: null,
          crossDomain: true
        }).then(response => {
          //var jsonData = JSON.stringify(response.data, null, 4);
          if (response.data.retCode == 0) {
            that.userlist = response.data.message.list
            that.user = response.data.message.patient
            console.log(that.userlist)
            console.log(that.user)
          }

        })

      }
    }

  }
</script>
