<template>
<div>
  <van-tabbar
    v-model="active"
    active-color="#14C295"
  >

    <van-tabbar-item @click="goHome">
      <div slot="icon" ><van-icon name="wap-home" size="23px" /></div>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item @click="goServe" >
      <div slot="icon" ><van-icon name="like-o" size="23px" /></div>
      <span>服务</span>
    </van-tabbar-item>
    <van-tabbar-item  @click="goCommunity">
      <div slot="icon" ><van-icon name="chat-o" size="23px" /></div>
      <span>社区</span>
    </van-tabbar-item>
    <van-tabbar-item  @click="goMy">
      <div slot="icon" ><van-icon name="manager-o" size="23px" /></div>
      <span>我的</span>
    </van-tabbar-item>
  </van-tabbar>

</div>
</template>

<script>
  import { Toast } from 'vant';
    export default {

      data(){
          return{
            active: 0,
          }
      },
      methods:{
        goHome(){
          this.$router.push({path:'/'})
        },
        goServe(){
          Toast('努力开发中');
        },
        goCommunity(){
          Toast('努力开发中');
        },
        goMy(){
          this.$router.push({path:'/my'})
        }
      }
    }
</script>
<style scoped>
  .van-tabbar-item{
    font-size: 14px;
  }
</style>

