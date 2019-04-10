<template>
  <div id="use">
    <mt-header class="header" fixed title="会诊列表">
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
                <td class="d1" align="center" valign="middle"  @click="onclicks(item.report.patient_id)">
                  <img src="../../static/user.png">
                </td>
                <td class="d2" @click="onclicks(item.report.patient_id)">
                  <div class="text1"></div>
                  <div class="text2" style="font-size: 14px;">
                    <span style="color: #6f7180">姓名：{{item.u_user.name}}</span><br>
                    <span style="color: #6f7180">诊断医生：{{item.d_user.name}}</span><br>
                    <span v-if="item.order.is_handle==1" style="color: #6f7180">诊断结果：{{item.consultationReport.post_content}}</span>
                    <span v-if="item.order.is_handle==2" style="color:red">等待专家诊断中</span>
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
  export default {

    data() {
      return {
        userlist: [],
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
          url: this.api.Consultationlist(),
          data: null,
          crossDomain: true
        }).then(response => {
          if (response.data.retCode == 0) {
            this.userlist=response.data.message
            console.log(response.data.message)

          }

        })

      },
      onclicks(id){
        this.$router.push({name:'getinfo',params:{pid:id}})
      },


    },

  }

</script>
