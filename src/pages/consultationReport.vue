<template>
  <div id="consultationReport">
    <mt-header class="header" fixed title="会诊详情">

      <mt-button icon="back" slot="left"><router-link to="message" style="color: #100e0em" >返回</router-link></mt-button>
    </mt-header>
    <div style="width: 100% ;position:absolute">
      <span>&nbsp;&nbsp;&nbsp;{{item.consultationReport.post_content}}</span>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../router/date.js'

  export default {
    data() {
      return {
        item: {}

      }
    },
    mounted() {
      this.item = this.$route.params.item
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy年MM月dd日');
      }
    },
  }
</script>

<style scoped>

</style>
