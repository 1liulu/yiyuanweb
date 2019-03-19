<template>
  <div>
    <mt-header class="header" fixed title="会诊列表">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-for="(item,index) in orderDetailsList" :key="index">
      <mt-cell>
        <span>用户名称：{{item.order.name}}</span>
        <span>创建时间：{{item.order.createtime|formatDate}}</span>
        <span>检查项目：{{item.consultationReport.id}}</span>
        <span v-if="item.consultationReport.status == '0'">状态：未写报告</span>
        <span v-if="item.consultationReport.status == '1'">状态：写报告</span>
        <img slot="icon" src="../../static/user.png" width="24" height="24">
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../router/date.js';

  export default {
    data() {
      return {
        orderDetailsList: []
      }
    },
    mounted() {
      this.load()
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy年MM月dd日');
      }
    },
    methods: {
      load() {
        let that = this;
        that.$http({
          method: 'post',
          url: this.api.Consultation(),
          data: null,
          crossDomain: true
        }).then(response => {
          //var jsonData = JSON.stringify(response.data, null, 4);
          if (response.data.retCode == 0) {
            this.orderDetailsList = response.data.message
            console.log(this.orderDetailsList)
          }

        })

      }
    },
    // computed: {
    //   load() {
    //     let that = this;
    //     that.$http({
    //       method: 'post',
    //       url: this.api.Consultation(),
    //       data: null,
    //       crossDomain: true
    //     }).then(response => {
    //       //var jsonData = JSON.stringify(response.data, null, 4);
    //       if (response.data.retCode == 0) {
    //         this.orderDetailsList = response.data.message
    //         console.log(this.orderDetailsList)


    //       }

    //     })

    //   }
    // }

  }
</script>
