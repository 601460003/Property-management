<template>
  <div class="big-box">
    <v-header title="小区通知"></v-header>
    <div class="container">
      <h3>停水公告</h3>
      <img src="../../assets/water.jpg" >
      <p>0评论 5月前</p>
    </div>
    <div class="container">
      <h3>停水公告</h3>
      <img src="../../assets/water.jpg" >
      <p>0评论 5月前</p>
    </div>
    <div class="container">
      <h3>停水公告</h3>
      <img src="../../assets/water.jpg" >
      <p>0评论 5月前</p>
    </div>
    <div class="container">
      <h3>停水公告</h3>
      <img src="../../assets/water.jpg" >
      <p>0评论 5月前</p>
    </div>
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
    height: 100vh;
  }
  .container{
    margin: 5px 15px;
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
  }
  .container h3{
    margin-bottom: 10px;
  }
  .container img{
    width: 100%;
    height: 200px;
  }
  .container p{
    color: #999;
    margin-top: 5px;
  }
</style>
