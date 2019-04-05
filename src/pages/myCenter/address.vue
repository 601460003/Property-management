<template>
    <div>
      <v-header title="选择收货地址"></v-header>
      <div class="order">
        <van-icon name="location-o" />
        <p>你还没有任何收货地址</p>
      </div>
      <div class="btn" @click="address">
        <button>新增收货地址</button>
      </div>
    </div>
</template>

<script>
  import header from '@/components/header'
    export default {
      components:{
        'v-header':header,
      },
      methods:{
        address(){
         this.$router.push({path:'/addressOne'})
        }
      }
    }
</script>

<style scoped>
  .van-icon{
    font-size:60px;
    color: #999;
  }
  .order{
    text-align: center;
    padding-top: 100px;
  }
  .order p{
    margin-top: 20px;
    font-size: 16px;
    color: #999;
  }
  .btn {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .btn button{
    padding: 10px 0;
    width: 100%;
    background: #f44;
    color: #fff;
    border: none;
    font-size: 16px;
  }
</style>
