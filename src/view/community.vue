<template>
<div class="big-box">
  <!--社区短文-->
  <header class="title">
    <span class="top"><van-icon name="records" /></span>
    <h3>社区</h3>
  </header>
  <!--独立的评论-->
  <article class="first">
    <header class="container">
      <div class="logo">
        <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554687527&di=838d35136e344c1428f881ab80dc2f2e&src=http://b-ssl.duitang.com/uploads/item/201711/01/20171101211115_ZBPz5.jpeg" alt="">
      </div>
      <div class="name">
        <span>多啦A梦的小木屋</span>
        <p>-Much offter,much prosperity-</p>
      </div>
      <div class="icon">
        <div slot="icon" ><van-icon name="like" size="23px" /></div>
      </div>
    </header>
    <div class="main-box">
      <p>今天去楼下遛狗，发现了一家新开的甜品店..</p>
      <div class="main-img">
        <img src="../assets/img/flower.png"/>
      </div>
      <article class="data-box">
        <div class="data-box-time">
          <span>评论18</span>
          <span>喜欢25</span>
          <span>6月26日 16:58</span>
        </div>
        <div>
          <span class="share"><van-icon name="comment-o"size="25px" /></span>
          <span class="share"><van-icon name="share" size="25px"/></span>
        </div>
      </article>
    </div>
  </article>
  <article class="first">
    <header class="container">
      <div class="logo">
        <img src="../assets/img/logo-o.jpg">
      </div>
      <div class="name">
        <span>开心小蘑菇</span>
        <p>-happy everyda，much prosperity-</p>
      </div>
      <div class="icon">
        <div slot="icon" ><van-icon name="like" size="23px" /></div>
      </div>
    </header>
    <div class="main-box">
      <p>我的新家，欢迎来做客</p>
      <div class="main-img">
        <img src="../assets/img/home.jpg"/>
      </div>
      <article class="data-box">
        <div class="data-box-time">
          <span>评论18</span>
          <span>喜欢25</span>
          <span>6月26日 16:58</span>
        </div>
        <div>
          <span class="share"><van-icon name="comment-o"size="25px" /></span>
          <span class="share"><van-icon name="share" size="25px"/></span>
        </div>
      </article>
    </div>
  </article>
</div>
</template>

<script>
    export default {
        name: "community"
    }
</script>

<style scoped>
  .big-box{
    min-height: 120vh;
    background: #FAFAFA;
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
    font-size: 18px;
  }
  .top{
    position: absolute;
    right: 20px;
    top: 5px;
  }
  .van-icon-records:before{
    font-size: 25px;
    color: #fff;
  }
  .first{
    background: #fff;
  }
  .container{
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    margin-top: 50px;
  }
  .logo img{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -50px;
  }
  .name{
    flex: 2;
  }
  .name span{
    font-size: 18px;
    color: #F1CF7A;
  }
  .name p{
    color: #999;
  }
  .icon{
    color: #f44;
  }
  .main-box{
    padding: 0 20px;
  }
  .main-box p{
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .main-img{
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 15px;
  }
  .main-img img{
    width: 100%;
    height: 180px;
    margin-top: 10px;
    border-radius: 15px;
  }
  .data-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
  }
  .data-box-time span{
    color: #999;
    font-size: 14px;
    padding-right: 8px;
  }
  .data-box-time span:nth-child(3){
    color: #E9E9E9;
  }
  .share{
    padding-left: 12px;
    color: #999;
  }

</style>
