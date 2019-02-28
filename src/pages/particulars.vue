<template >
  <div id="particulars" >
    <mt-header class="header"  fixed title="就诊人列表">
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
            <span style="font-size: 18px">用户1</span>&nbsp;&nbsp;&nbsp;{{0==0?'男':'女'}}&nbsp;&nbsp;&nbsp;0岁<br>
          </li>
        </ul>
      </div>
      <div class="kong"></div>
      <div>
        <table class="table1" >
          <tr>
            <td class="td1" >
              06-25<br>
              <span style="font-size: 13px;color: #edebee">2018</span>
            </td>
            <td class="td2">
              枣庄市某医院&nbsp;&nbsp;<el-button type="primary" style="font-size: 8px" size="mini" round>远程专家诊断</el-button><br>
              检查项目：胸部正位
            </td>
            <td class="td3">
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
  export default{
    data(){
      return {
        uid:{"uid":91}
      }
    },
    mounted(){
      this.load
    },
    computed: {

      load(){
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.particulars(),
          data:{'uid':91},
          crossDomain: true
        }).then(response=> {
          if(response.data.retCode==0){
            console.log(response.data.message)
          }

        })

      },

    }

  }
</script>
