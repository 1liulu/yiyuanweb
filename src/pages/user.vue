<template>
  <div id="use">
    <div style="width: 100% ;position:absolute">
      <mt-navbar v-model="selected" class="navbar" fixed>
        <mt-tab-item id="1" class="n1" >影像授权</mt-tab-item>
        <mt-tab-item id="2" class="n1" >过期授权</mt-tab-item>
      </mt-navbar>
      <div class="kong" ></div>
      <div class="kong" ></div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="kong" ></div>
          <div class="s1"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">

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
    height: 7px
  }
  .navbar{
    height: 3rem;
  }
  .n1{
    font-size:20px;
  }
  .s1{
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
  }
</style>

<script>
  export default {
    data() {
      return {
        selected:'1'
      }
    },
    mounted() {

    },
    computed: {

    }

  }
</script>
