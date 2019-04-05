<template>
  <div class="title-aheader">
   <span @click="back" class="top"><van-icon name="arrow-left" /></span>
   <span class="name"> {{title}}</span>
  </div>
</template>

<script>
    export default {
      props:{
        title:String
      },
      methods:{
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .title-aheader{
    height: 40px;
    font-size: 18px;
    font-weight: 500;
    padding-top: 8px;
    background: #008FFF;
    color: #FFFFFF;
  }
 .van-icon{
   font-size: 22px;
   vertical-align: bottom;
   padding-left: 10px;
 }



</style>
