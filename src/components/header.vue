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
    height: 50px;
    font-size: 18px;
    font-weight: 500;
    padding-top: 12px;
    background: linear-gradient(to bottom right, #3EC7F8 , #04A6E8);
    color: #fff;
  }
 .van-icon{
   font-size: 22px;
   vertical-align: bottom;
   padding-left: 10px;
 }



</style>
