<template>
    <div class="big-box">
      <v-header title="我的关注" style="background: white"></v-header>
      <div class="order">
        <van-icon name="flower-o" />
        <p>你还没有关注任何商品，和不现在就去逛逛~</p>
      </div>
      <div class="btn">
        <button @click="goHome">去逛逛</button>
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
      goHome(){
        this.$router.push({path:'/'})
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
  font-size: 80px;
  color: #999;
}
.order{
  text-align: center;
  padding-top: 100px;
}
.order p{
  font-size: 16px;
  color: #999;
}
  .btn{
    text-align: center;
    margin-top: 20px;
  }
  .btn button{
    width: 150px;
    padding: 10px;
    color: #fff;
    background: #f44;
    border: none;
  }
</style>
