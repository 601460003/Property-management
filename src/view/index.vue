<template>
    <div>
      <!--头部图片-->
      <img src="../assets/home-o_03.png"  class="NB" v-show="isShow"/>
      <header class="title">
        <span class="top"><van-icon name="plus" /></span>
        <h3>物业管理</h3>
      </header>
      <header class="header-logo">
        <van-swipe :autoplay="4000" indicator-color="white" >
          <van-swipe-item>
            <img src="../assets/title.png" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/title-o.png"/>
          </van-swipe-item>
        </van-swipe>
      </header>
      <nav class="nav-container">
         <div class="logo-box" >
           <router-link to="/advice">
           <img src="../assets/img/logo_01.png" />
           <p class="logo-name">建议留言</p>
           </router-link>
         </div>
        <div class="logo-box">
          <router-link to="/electricity">
          <img src="../assets/img/logo_02.png" />
          <p class="logo-name">物业缴费</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/maintenance">
          <img src="../assets/img/logo_03.png" />
          <p class="logo-name">设备维护</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/activities">
          <img src="../assets/img/logo_04.png" />
          <p class="logo-name">小区通告</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/car">
          <img src="../assets/img/logo_06.png" />
          <p class="logo-name">车位预约</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/checkin">
          <img src="../assets/img/logo_05.png" />
          <p class="logo-name">登记</p>
          </router-link>
        </div>
        <div class="logo-box" >
          <router-link to="/visit">
          <img src="../assets/img/logo_07.png" />
          <p class="logo-name">访客列表</p>
          </router-link>
        </div>
        <div class="logo-box"  @click="callOwner">
          <img src="../assets/img/logo_08.png" />
          <p class="logo-name">联系物业</p>
        </div>
        <div class="logo-box" >
          <img src="../assets/img/logo_08.png"  style="visibility: hidden"/>
          <p class="logo-name" style="visibility: hidden">个人中心</p>
        </div>
      </nav>
      <van-icon name="plus" />
      <!--中心图片-->
      <!--<div class="content-logo">-->
        <!--<img src="../assets/img/content.jpg" />-->
      <!--</div>-->
      <!--&lt;!&ndash;商品推荐标题&ndash;&gt;-->
      <!--<h3 class="shop-title">商品推荐</h3>-->
      <!--&lt;!&ndash;商品推荐内容&ndash;&gt;-->
      <!--<div class="shop-container">-->
        <!--<div class="shop-box">-->
          <!--<img src="../assets/img/home.jpg" />-->
          <!--<p class="shop-content">空房咨询</p>-->
          <!--<p class="shop-price">￥0.00</p>-->
          <!--<p class="shop-count">月销34</p>-->
        <!--</div>-->
        <!--<div class="shop-box">-->
          <!--<img src="../assets/img/price.jpg" />-->
          <!--<p class="shop-content">小区物业费 平方米/月</p>-->
          <!--<p class="shop-price">￥3.00</p>-->
          <!--<p class="shop-count">月销50</p>-->
        <!--</div>-->
      <!--</div>-->

    </div>
</template>

<script>
  import { Swipe, SwipeItem,Dialog,Icon } from 'vant';
    export default {
      created() {
        let time = parseInt(localStorage.getItem('time'))
        if (time) {
          let nowTime = new Date().getTime();
          let diff = nowTime-time
          if (diff < 30 * 60 * 1000) {
            this.isShow = false
          }
        } else {
          let time = new Date().getTime();
          localStorage.setItem('time', time);
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false
          }, 3000)
        }
      },
      data(){
        return{
          isShow:false
        }
      },

      methods: {
        callOwner() {
          Dialog.alert({
            message: '联系物业 133-8266-2343'
          })
        }
}
    }
</script>

<style scoped>

  .NB{
    position: absolute;
    top: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
  }

  .header-logo {
    position: relative;
  }

  .header-logo img {
    width: 100%;
    height: 1.8rem;
    overflow: hidden;
  }
  .header-content{
    height: .4rem;
    line-height: .4rem;
    background: #0E90C7;
    text-align: center;
    color: white;
    font-size: .15rem;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  /*导航*/
  .nav-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #F1F1F1;
  }
  .logo-box {
    width: 32.7%;
    text-align: center;
    background: white;
    margin: 1px;
    padding: .2rem .1rem;
  }
  .logo-box img{
    width: .5rem;
    height: .5rem;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  .logo-name{
    color: #333;
    font-size: 12px;
  }
  /*图片*/
.content-logo{
  /*border-top: 15px solid #f3f5f7;*/
}
  .content-logo img{
    width: 100%;
    height: 1rem;
    padding: 10px 10px;
  }
  .shop-title{
    font-weight: 600;
    text-align: center;
    margin-top: 3px;
    letter-spacing: 5px;
  }
  .shop-container{
    display: flex;
    margin-top: 8px;
    margin-bottom: 50px;
    background: #f3f5f7;
  }
  .shop-box{
    flex: 1;
    margin: 5px;
    background: white;
  }
  .shop-box img{
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
  }
  .shop-content{
    font-size: 15px;
    padding-left: 5px;
  }
  .shop-price{
    color: #f44;
    font-size: 16px;
    padding-left: 5px;
  }
  .shop-count{
    color: #999;
    text-align: right;
    padding-right: 5px;
  }
  .title{
    height: 50px;
    line-height: 50px;
    background: linear-gradient(to bottom right, #3EC7F8 , #04A6E8);
    position: relative;
    text-align: center;
  }
  .title h3{
    color: #fff;
  }
  .top{
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .van-icon-plus:before{
    font-size: 22px;
    color: #fff;
  }

</style>
