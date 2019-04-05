<template>
<div class="big-box">
  <!--头部-->
  <v-header title="订单列表" ></v-header>
  <!--分页栏-->
  <div>
    <van-tabs v-model="active">
      <van-tab title="待付款">
        <div class="order">
          <van-icon name="column" />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <!--待发货-->
      <van-tab title="待发货">
        <div class="order">
          <van-icon name="column" />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <!--待收货-->
      <van-tab title="待收货">
        <div class="order">
          <van-icon name="column" />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <!--退换货-->
      <van-tab title="退/换货">
        <div class="order">
          <van-icon name="column" />
          <p>暂无订单</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
  import header from '@/components/header'
  export default {
    created(){
      this.active=this.$route.params.active;
    },
    components:{
      'v-header':header,
    },
    data(){
      return{
        active:0,
      }
    }
  }
</script>
<style scoped>
.big-box{
  height: 100vh;
  background: #f3f5f7;
}
  .van-icon{
    font-size: 40px;
    color: #999;
  }
  .order{
    text-align: center;
    padding-top: 100px;
  }
  .order p{
    font-size: 14px;
    color: #999;
  }
</style>
