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
    text-align: left;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 500;
  }
 .van-icon{
   font-size: 22px;
   position: absolute;
   top: 10px;
 }
  .name{
   padding-left: 30px;
  }


</style>
