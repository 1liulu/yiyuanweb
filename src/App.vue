<template>
  <div id="app">
    <div class="content-div">

      <router-view/>
    </div>
    <footer-bar v-if="$route.path != '/binding' && $route.path != '/particulars' " class="footer"></footer-bar>
  </div>
</template>

<script>
  import Footer from './components/tab.vue'

  export default {
    name: 'app',
    components: {
      'footer-bar': Footer
    },
    created() {
     /* var token = this.$route.query.token;
      if (typeof token !== 'undefined') {
        var exp = new Date();
        exp.setTime(exp.getTime() + 3600 * 1000);//过期时间60分钟
        document.cookie = 'token=' + token + ";expires=" + exp.toGMTString();
      }
      if (getCookie('token') == null) {
        location.href = config.projectUrl + '/auth?returnUrl=' + encodeURIComponent(config.projectUrl + '/#/');
      }*/
    },
    computed: {}
    ,
    mounted() {
      this.load()
    }
    ,
    methods: {
      load() {
        this.token.settoken(this.$route.query.token)
        console.log(this.token.token)
        console.log(this.$route.query.type)
          if (this.$route.query.type == 1) {
            this.$router.push({
              path: "/binding"
            })
          }else{
            this.$router.push({
              path: "/indextab"
            })
          }

      }

    }
  }

  document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8;margin: 0;')

</script>
<style scoped>
  .content-div {
    margin-bottom: 40px;
  }
</style>
