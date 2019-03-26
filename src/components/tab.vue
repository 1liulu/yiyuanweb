<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="user">
        <img :src="img1" slot="icon">影像授权
      </mt-tab-item>
      <mt-tab-item id="use">
        <img :src="img3" slot="icon">电子影像
      </mt-tab-item>
      <mt-tab-item id="message">
        <img :src="img5" slot="icon">会诊管理
      </mt-tab-item>
      <mt-tab-item id="index">
        <img :src="img7" slot="icon">个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
         selected: 'index',
        img1: "../../static/user1.png",
        img3: "../../static/use1.png",
        img5: "../../static/message1.png",
        img7: "../../static/index1.png"
      }
    },
    computed: {
      isShow: function () {
        return true;
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected == "index") {
            this.$router.push('/index');
            this.img7 = "../../static/index2.png"
          } else {
            this.img7 = "../../static/index1.png"
          }
          if (this.selected == "use") {
            this.$router.push('/use');
            this.img3 = '../../static/use2.png'
          } else {
            this.img3 = '../../static/use1.png'
          }
          if (this.selected == "user") {
            this.$router.push('/user')
            this.img1 = "../../static/user2.png";
          } else {
            this.img1 = "../../static/user1.png";
          }
          if (this.selected == "message") {
            this.$router.push('/message')
            this.img5 = "../../static/message2.png";
          } else {
            this.img5 = "../../static/message1.png";
          }
        }
      }
    }
  }
</script>
