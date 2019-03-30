<template>
  <div id="getinfo">
    <div style="width: 100% ;position:absolute">
      <mt-navbar v-model="selected" class="navbar" fixed>
        <mt-tab-item id="1" class="n1" >检查报告</mt-tab-item>
        <mt-tab-item id="2" class="n1" >医学影像</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="kong"></div>
          <div style="width: 100%;background-color: #ffffff">
            <div class="s1">
              <table style="width: 100%;height: 100%">
                <tr>
                  <td style="text-align:center;vertical-align:middle;line-height: 1.6rem">
                    <p style="color: #696969;font-size: 14px">人民医院</p>
                    <p style="color: #202020 ;font-size: 16px">{{info.name}}</p>
                    <p style="color: #9a9a9a;font-size: 14px">检查号:{{info.check_no}}&nbsp;&nbsp;&nbsp;&nbsp;病人id：{{info.patient_id}}</p>
                  </td>
                </tr>
              </table>
            </div>
            <div class="s2">
              <table style="width: 100%;height: 100%;font-size: 13px;">
                <tr>
                  <td style="color:#696969;">姓名：{{info.username}}</td>
                  <td style="color:#696969;">性别：{{info.sex==0?'男':'女'}}</td>
                </tr>
                <tr>
                  <td style="color:#696969;">年龄：{{info.age}}</td>
                  <td style="color:#696969;">申请科室：{{info.apply_departments}}</td>
                </tr>
                <tr>
                  <td style="color:#696969;">检查项目：{{info.items}}</td>
                  <td style="color:#696969;"></td>
                </tr>
                <tr>
                  <td style="color:#696969;">申请日期：{{info.apply_date|formatDate}}</td>
                  <td style="color:#696969;">申请医生：{{info.apply_doctor}}</td>
                </tr>
              </table>
            </div>
            <div class="s3">
              <table style="width: 100%;height: 100%;font-size: 13px;">
                <tr>
                  <td style="color: #202020 ;">检查所见：{{info.examination_finding}}</td>
                </tr>
                <tr>
                  <td style="color: #202020 ;">印象：</td>
                </tr>
                <tr>
                  <td style="color: #202020 ;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.impression}}</td>
                </tr>
              </table>
            </div>
            <div class="s4">
              <table style="width: 100%;height: 100%;font-size: 13px;">
                <tr>
                  <td style="color:#696969;">检查时间：{{info.inspection_time|formatDate}}</td>
                  <td style="color:#696969;">报告时间：{{info.report_time|formatDate}}</td>
                </tr>
                <tr>
                  <td style="color:#696969;">报告医生：{{info.report_docto}}</td>
                  <td style="color:#696969;">审核医生：{{info.audit_docto}}</td>
                </tr>
                <tr>
                  <td style="color:#696969;">签名：</td>
                  <td style="color:#696969;">签名：</td>
                </tr>
              </table>
            </div>
            <div class="s5">
              <table style="width: 100%;height: 2rem;font-size: 11px;">
                <tr>
                  <td style="color:#c7c7c7;">注：此报告仅作为临床参考，不作为最终诊断</td>
                </tr>

              </table>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="kong"></div>
          <div>
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

    height: 6rem;
    border-bottom: #ebebeb 1px solid;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align:center;
  }
  .s2{
    height: 7rem;
    border-bottom: #ebebeb 1px solid;
    margin-left: 1rem;
    margin-right: 1rem;
    padding:0.7rem 5%;
  }
  .s3{

    height:6rem;
    border-bottom: #ebebeb 1px solid;
    margin-left: 1rem;
    margin-right: 1rem;
    padding:0.7rem 5%;
  }
  .s4{

    height: 6rem;
    border-bottom: #ebebeb 1px solid;
    margin-left: 1rem;
    margin-right: 1rem;
    padding:0.7rem 5%;

  }
  .s5{

    height: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding:0 5%;
  }


 .s2 td{
   width: 50%;
 }
  .s4 td{
    width: 50%;
  }
</style>

<script>
  import {formatDate} from '../router/date.js';
  export default {
    data() {
      return {
        pid:'',
        selected:'1',
        info:[],
    }
    },
    mounted() {
      this.pid=this.$route.params.pid
      this.load()
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    methods: {

      load(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.reportDetails(),
          params:{id:this.pid},
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            console.log(response.data)
            this.info=response.data.message
          }

        })

      },

    }

  }
</script>
