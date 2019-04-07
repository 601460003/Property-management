<template>
  <div class="big-box">
    <v-header title="停车位预约"></v-header>
  <div style="margin-top: 15px">
    <div class="box">
      <label>姓名</label>
      <input type="text" placeholder="请输入你的真实姓名">
    </div>
    <div class="box">
      <label>车牌号</label>
      <input type="text" placeholder="粤T-888">
    </div>
    <div class="box">
      <label>车辆类型</label>
      <input type="text" placeholder="">
    </div>
    <div class="box">
      <label>手机</label>
      <input type="text" placeholder="输入你的手机号">
    </div>
    <div class="box-a">
      <label>验证码</label>
      <input type="text" >
      <input class="btn" type="button" value="获取验证码">
    </div>
    <div class="footer-btn"><button class="footer">提交</button></div>
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
    background:#FAFAFA;
  }
  .box-a{
    position: relative;
  }
  .box,.box-a{
    padding: 15px 20px;
    font-size: 18px;
    border-top: 1px solid #FAFAFA;
    border-bottom: 1px solid #FAFAFA;
    background: white;
  }
  .box input{
    text-indent: 20px;
    font-size: 16px;
  }
  label{
    width: 80px;
    display: inline-block;
  }
.box-a .btn{
  color: #fff;
  background: #1EB5EF;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
  position: absolute;
  right: 15px;
  top: 10px;
}
  .footer{
    color: #fff;
    background:#1EB5EF ;
    width: 90%;
    text-align: center;
   height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
  }
  .footer-btn{
    text-align: center;
    margin-top: 60px;
  }
</style>
