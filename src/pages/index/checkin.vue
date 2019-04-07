<template>
  <div class="big-box">
    <v-header title="登记"></v-header>
    <div class="container">
      <h2>登记户主信息</h2>
      <input type="text" placeholder="住户房号">
      <input type="text" placeholder="请输入你的名字">
      <input type="text" placeholder="请输入你的电话">
      <input class="btn" type="button" value="提交按钮">
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
  .container{
    display: flex;
    flex-direction: column;
    margin: 100px 20px;
  }
  h2{
    text-align: center;
    margin: 15px auto;
  }
  .container input{
    border: 1px solid #999;
    padding: 10px 0;
    text-indent: 10px;
    margin: 5px 0;
  }

  .container .btn {
    color: #fff;
    background: #1989fa;
    border: 1px solid #1989fa;
    font-size: 16px;
    padding: 10px 0;
    margin: 10px 30px;
  }
  .big-box{
    height: 100vh;
    background: linear-gradient(#F8DFE2,#ACD5F7);
  }
</style>
