<template>
    <div class="big-box">
      <v-header title="充值记录" ></v-header>
      <div class="order">
        <van-icon name="column" />
        <p>暂无记录</p>
      </div>
    </div>
</template>

<script>
  import header from '@/components/header'
    export default {
      components:{
        'v-header':header,
      },
    }
</script>

<style scoped>
.big-box{
  height: 100vh;
  background: #f3f5f7;
}
.van-icon{
  font-size: 60px;
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
