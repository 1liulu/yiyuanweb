<template >
  <div id="particulars" >
    <mt-header class="header"  fixed title="选择报告">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
      <div class="top">
        <ul>
          <li id="li1">
            <div style="height: 20%;"></div>
            <div style="height: 70%;">
              <img src="../../static/user.png">
            </div>
            <div style="height: 10%;"></div>
          </li>
          <li class="li2">
            <span style="font-size: 18px">{{user.name}}</span>&nbsp;&nbsp;&nbsp;{{user.sex==0?'男':'女'}}&nbsp;&nbsp;&nbsp;{{user.age}}岁<br>
          </li>
        </ul>
      </div>
      <div class="kong"></div>
      <div v-for="item in reportList">
        <table class="table1" @click="onclicks(item)">
          <tr>
            <td class="td1" >
              {{item.creation_time|formatDate2}}<br>
              <span style="font-size: 13px;color: #edebee">{{item.creation_time|formatDate1}}</span>
            </td>
            <td class="td2">
              枣庄市某医院&nbsp;&nbsp;<br>
              检查项目：{{item.items}}
            </td>
            <td class="td3" >
              <img src="../../static/right.png" style="width: 50%">
            </td>
          </tr>
        </table>
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
  .top {
    height: 9.5rem;
    background-color: #1e90ff;
    width: 100%;
  }

  .top ul {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #ffffff;
  }

  #li1 {
    height: 80%;
    width: 100%;
  }

  #li1 img {
    height: 100%;
  }

  .li2 {
    height: 20%;
    width: 100%;
    font-size: 14px;
  }
  .table1{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%
  }
  .td1{
    height:5rem;
    width: 30%;
    font-size: 16px;
    color: #1e90ff
  }
  .td2{
    width: 60%;
    font-size: 15px;
    line-height: 2rem;
    color: #666666
  }
  .td3{
    width: 10%;
    text-align:right
  }
</style>

<script>
  import {formatDate} from '../router/date.js';
  export default{
    data(){
      return {
        uid:'',
        user:[],
        reportList:[]
      }
    },
    mounted(){
      this.uid=this.token.userid
      this.load()
    },
    filters: {
      formatDate1(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy');
      },
      formatDate2(time) {
        var date = new Date(time);
        return formatDate(date, 'MM-dd');
      }
    },
    methods: {

      load(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.particulars(),
          params:{uid:this.uid},
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            this.user=response.data.message
            this.reportList=response.data.message.reportList
          }

        })

      },
      onclicks(item){
        this.token.setparticulars(item)
        this.$router.push({name:'shouquan'})

      },

    }

  }
</script>
