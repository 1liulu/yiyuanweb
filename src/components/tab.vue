<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="index">
        <img :src="img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="use">
        <img :src="img3" slot="icon">应用中心
      </mt-tab-item>
      <mt-tab-item id="user">
        <img :src="img5" slot="icon">我的
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
        img1: "../../static/s.png",
        img3: "../../static/s.png",
        img5: "../../static/s.png"
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
            this.img1 = "../../static/s.png"
          } else {
            this.img1 = "../../static/s.png"
          }
          if (this.selected == "use") {
            this.$router.push('/use');
            this.img3 = '../../static/s.png'
          } else {
            this.img3 = '../../static/s.png'
          }
          if (this.selected == "user") {
            this.$router.push('/user')
            this.img5 = "../../static/s.png";
          } else {
            this.img5 = "../../static/s.png";
          }
        }
      }
    }
  }
</script>
