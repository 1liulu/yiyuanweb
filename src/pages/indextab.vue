<template>
  <div id="indextab">
    <div class="content-div">

      <router-view/>
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>
<script>
  import Footer from "../components/tab.vue"

  export default {
    components: {
      'footer-bar': Footer
    },
    computed: {},
    data() {
      return {
        data: {"code": 1},
        user: []
      }
    },
    mounted() {


    },
    methods: {


    }

  }
  document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8;margin: 0;')
</script>

<style scoped>
  .content-div {
    margin-bottom: 40px;
  }
</style>
