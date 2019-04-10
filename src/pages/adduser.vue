<template >
  <div id="particulars" >
    <mt-header class="header"  fixed title="添加就诊人">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
      <div class="login">
        <div class="title">
          亿新医疗云胶片
        </div>

        <div class="login_in">
          <div class="item">
            <i class="iconfont icon-institute"></i>
            <div class="item_left">
              <input type="text" v-model="user.name" placeholder="就诊人姓名"/>
            </div>
          </div>

          <div class="item">
            <div class="item other">
              <i class="iconfont icon-wendang"></i>
              <div class="item_left">
                <input type="text" v-model="user.cardnum" placeholder="就诊卡号"/>
              </div>
            </div>

          </div>





          <div class="btn">
            <button @click="login">确定</button>
          </div>


        </div>



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

</style>
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
<script>
  import { MessageBox } from 'mint-ui';
  export default{
    data(){
      return {
        user:[],
      }
    },
    mounted(){

    },

    methods: {
      login() {
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.addPatient(),
          params:{name:this.user.name,cardnum:this.user.cardnum},
          crossDomain: true
        }).then(response => {
          if (response.data.retCode == 0) {
            MessageBox('提示', '添加成功');
            this.$router.push('/use');
          }else {
            MessageBox('提示', response.data.message);
          }

        })

      },


    }

  }
</script>
