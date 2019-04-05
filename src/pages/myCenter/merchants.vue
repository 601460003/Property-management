<template>
    <div class="big-box">
      <v-header title="入驻申请" ></v-header>
      <div class="logo">
        <img src="../../assets/enter.jpg" />
      </div>
      <div class="one">
        <span class="info">商家名称</span>
        <span class="start">*</span>
        <input type="text" placeholder="商户名称">
      </div>
      <div class="one">
        <span class="info">主营项目</span>
        <span class="start">*</span>
        <input type="text" placeholder="例如鞋帽，化妆品等">
      </div>
      <div class="one">
        <span class="info">简单介绍</span>
        <span class="start">*</span>
        <input type="text" placeholder="简单介绍下商户">
      </div>
      <div class="one">
        <span class="info-0">账号</span>
        <span class="start">*</span>
        <input type="text" placeholder="你的称呼">
      </div>
      <div class="one">
        <span class="info-0">密码</span>
        <span class="start">*</span>
        <input type="text" placeholder="密码">
      </div>
      <p class="info-title">*用于登录多商户后台，请认证填写</p>
      <div class="checkbox">
        <van-checkbox v-model="checked"><span class="footer">我已经阅读并了解<a href="#">【入驻申请协议】</a></span></van-checkbox>
      </div>
      <div class="footer-btn">
        <button>申请入驻</button>
      </div>
    </div>
</template>

<script>
  import header from '@/components/header'
  export default {
    components:{
      'v-header':header,
    },
    data(){
      return{
        checked:true
      }
    }
  }
</script>

<style scoped>
  .big-box{
    height: 100vh;
  }
  .logo{}
.logo img{
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
}
  .one{
    font-size: 18px;
    padding: 15px 10px;
    border-bottom: 1px solid #999;
  }
  .one input{
    font-size: 16px;
  }
  .start{
    color: #f44;
  }
  .info{
    padding-right: 10px;
  }
  .info-0{
    padding-right: 45px;
  }
  .info-title{
    margin: 10px 10px;
    color: #f44;
    padding-bottom: 10px;
  }
  .footer{
    color: #333;
    font-size: 16px;
    margin-top: 10px;
  }
  .checkbox{
    margin-left: 15px;
  }
  .checkbox a{
    color: #113bff;
  }

  .footer-btn {
    margin: 20px 10px;
  }
  .footer-btn button{
    color: #fff;
    font-size: 18px;
    background: #f44;
    width: 100%;
    padding: 8px 0;
    border: none;
    border-radius: 3px;
  }
</style>
