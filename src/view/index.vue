<template>
    <div>
      <!--头部图片-->
      <header class="header-logo">
        <img src="../assets/img/header.jpg" alt="">
      </header>
      <!--logo导航区-->
      <div>
        <van-notice-bar
          text="关于小区的通知"
          left-icon="volume-o"
        />
      </div>
      <nav class="nav-container">
         <div class="logo-box" >
           <router-link to="/advice">
           <img src="../assets/img/logo_01.png" />
           <p class="logo-name">提出建议</p>
           </router-link>
         </div>
        <div class="logo-box">
          <router-link to="/electricity">
          <img src="../assets/img/logo_02.png" />
          <p class="logo-name">光电费用</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/maintenance">
          <img src="../assets/img/logo_03.png" />
          <p class="logo-name">快捷维修</p>
          </router-link>
        </div>
        <div class="logo-box">
          <router-link to="/activities">
          <img src="../assets/img/logo_04.png" />
          <p class="logo-name">小区活动</p>
          </router-link>
        </div>
        <div class="logo-box" @click="callOwner">
          <img src="../assets/img/logo_05.png" />
          <p class="logo-name">联系物业</p>
        </div>
        <div class="logo-box">
          <router-link to="/checkin">
          <img src="../assets/img/logo_06.png" />
          <p class="logo-name">登记</p>
          </router-link>
        </div>
        <div class="logo-box" style="visibility: hidden">
          <img src="../assets/img/logo_07.png" />
          <p class="logo-name">房屋租赁</p>
        </div>
        <div class="logo-box" style="visibility: hidden">
          <img src="../assets/img/logo_08.png" />
          <p class="logo-name">关于我们</p>
        </div>
      </nav>
      <!--中心图片-->
      <div class="content-logo">
        <img src="../assets/img/content.jpg" />
      </div>
      <!--商品推荐标题-->
      <h3 class="shop-title">商品推荐</h3>
      <!--商品推荐内容-->
      <div class="shop-container">
        <div class="shop-box">
          <img src="../assets/img/home.jpg" />
          <p class="shop-content">空房咨询</p>
          <p class="shop-price">￥0.00</p>
          <p class="shop-count">月销34</p>
        </div>
        <div class="shop-box">
          <img src="../assets/img/price.jpg" />
          <p class="shop-content">小区物业费 平方米/月</p>
          <p class="shop-price">￥3.00</p>
          <p class="shop-count">月销50</p>
        </div>
      </div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
    export default {
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
  .header-logo {
  }

  .header-logo img {
    width: 100%;
    height: 150px;
  }
  /*导航*/
  .nav-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  .logo-box {
    width: 24%;
    padding:5px 0;
    text-align: center;
  }
  .logo-box img{
    width: 55px;
    height: 50px;
    padding-bottom: 5px;
    border-radius: 50%;
  }
  .logo-name{
    color: #333;
    font-size: 14px;
  }
  /*图片*/
.content-logo{
  border-top: 15px solid #f3f5f7;
}
  .content-logo img{
    width: 100%;
    height: 200px;
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
</style>
