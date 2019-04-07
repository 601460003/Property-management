<template>
<div>
  <van-tabbar v-model="active" style="z-index: 1999" >
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index"

    >
      {{tab.name}}
    </van-tabbar-item>
  </van-tabbar>

</div>
</template>

<script>
    export default {

      data(){
          return{
            active: 0,
            shopsCount:0,
            tabbar: [
              {
                name: '首页',
                path: '/',
                pathName: 'home',
                icon: 'wap-home',
                dot: false,
              },
              {
                name: '我的',
                path: '/my',
                pathName: 'my',
                icon: 'manager-o',
                dot: false,
                info: ''
              },

            ]
          }
      },
    }
</script>
<style scoped>

  .van-tabbar-item{
    font-size: 15px;
  }
  .van-icon::before{
    font-size: 30px;
  }
</style>

