<template>
  <div class="big-box">
    <!--头部-->
    <v-header title="物业缴费"></v-header>
    <!--输入框-->
    <div class="search">
      <van-search
        placeholder="业主名字+房号例:(张三2-101)"
        show-action
        shape="round"
      >
        <div slot="action" >搜索</div>
      </van-search>
    </div>
    <!--主要内容-->
    <div class="container">
      <!--账单-->
      <div class="header">
        <h2>六月账单(例)</h2>
        <p class="header-name">总金额</p>
        <p class="header-price">￥000</p>
        <p>房屋地址：张三2-101</p>
      </div>
    </div>
    <!--固定费用-->
    <div class="main-one">
      <h3>固定费用</h3>
      <p>管理费： 0.00</p>
      <p>车位费： 0.00</p>
    </div>
    <!--本次费用明细-->
    <div class="main-one">
      <h3>本次费用明细</h3>
      <p>管理费： 0.00</p>
      <p>公共水电分摊： 0.00</p>
      <p>水费： 0.00</p>
      <p>电费： 0.00</p>
    </div>
    <!--往月欠费-->
    <div class="main-one">
      <h3>往月欠费</h3>
      <p>管理费： 0.00</p>
      <p>公共水电分摊： 0.00</p>
    </div>
    <!--立即缴费-->
    <div class="main-btn">
      <button>立即缴费</button>
    </div>
    <p class="footer">温馨提示：付款前请备注业主房号</p>
  </div>
</template>

<script>
  import header from '@/components/header'
  export default {
    components:{
      'v-header':header,
    }
  }
</script>

<style scoped>
  .big-box{
    height: 115vh;
  }
  .search{
    height: 80px;
    background: white;
    padding-top: 12px;
  }
  .header{
    text-align: center;
    line-height: 28px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
 padding-bottom: 10px;
  }
  .header-name{
    font-size: 16px;
    color: #999;
  }
  .header-price{
    color: orange;
    font-size: 25px;
    padding-right: 25px;
  }
  .main-one{
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }
  .main-one h3{
    font-weight: 700;
    margin-bottom: 5px;
  }
  .main-one p{
    font-size: 15px;
    color: #999;
  }
  .main-btn {
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
  }
  .main-btn button{
    background: orange;
    color: #fff;
    width: 180px;
    height: 60px;
    border: none;
    border-radius: 3px;
  }
  .footer{
    font-size: 14px;
    padding-left: 10px;
    margin-top: 20px;
    font-weight: 700;
  }
</style>
