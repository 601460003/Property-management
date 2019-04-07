<template>
    <div class="big-box">
      <v-header title="访客列表"></v-header>
      <div class="visit-center">
        <h3>张三 (2人)</h3>
        <div class="visit-box">
          <div class="visit-list">
           <p>手机：18676001200</p>
            <p>车牌号：粤T-888</p>
          </div>
          <div class="visit-list fl">
            <p>到访：4-4-10</p>
            <p>业主：张三</p>
          </div>
        </div>
      </div>
      <div class="visit-center">
        <h3>李四 (2人)</h3>
        <div class="visit-box">
          <div class="visit-list">
            <p>手机：18676001200</p>
            <p>车牌号：粤T-888</p>
          </div>
          <div class="visit-list fl">
            <p>到访：4-4-10</p>
            <p>业主：李四</p>
          </div>
        </div>
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
  .big-box{
    height: 100vh;
    background: #f3f5f7;
  }
  .visit-center{
    margin: 15px 15px;
    background: white;
    padding: 20px 15px;
    border-radius: 8px;
  }
  .visit-center h3{
    font-weight: 700;
    margin-bottom: 15px;
  }
  .visit-box{
    display: flex;
  }
  .visit-list{
    flex: 1;
    line-height: 25px;
    font-size: 15px;
    color: #999;
  }
  .visit-box div:first-child{
    border-right: 1px solid #999;
    flex: 1;
    padding-right: 30px;
  }
  .fl{
    padding-left: 30px;
  }

</style>
