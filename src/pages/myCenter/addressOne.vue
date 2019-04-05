<template>
    <div class="big-box">
      <v-header title="新增地址" style="background: white"></v-header>
      <div class="content">
        <van-address-edit
          show-postal
          show-delete
          show-set-default
          show-search-result
        />
      </div>
    </div>
</template>

<script>
  import header from '@/components/header'
  import { AddressEdit } from 'vant';
    export default {
     components:{
       'v-header':header
     }
    }
</script>

<style scoped>
.big-box{
  height: 100vh;
  background: #f3f5f7;
}
  .content{
    margin-top: 20px;
  }
</style>
