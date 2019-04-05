<template>
  <div class="big-box">
    <v-header title="设备维护"></v-header>
    <div class="container">
      <h2>设备维护</h2>
      <input type="text" placeholder="住户房号">
      <input type="text" placeholder="姓名">
      <input type="text" placeholder="电话">
      <input type="text" placeholder="请输入报修内容（详细），我们会尽快与你联系处理！">
      <div class="add-img">
        <van-icon name="plus" />
        <p>添加图片</p>
      </div>
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
    margin: 15px 30px;
  }
  .add-img{
    width: 100px;
    height: 100px;
    border-style:dotted;
    color: #999;
    margin: 15px auto;
    text-align: center;
  }
  .van-icon{
    font-size: 30px;
    padding-top: 20px;
  }
.big-box{
  height: 100vh;
  background: #f3f5f7;
}
</style>

