<template>
   <div>
     <header class="title">
       <h3>生活超市</h3>
     </header>
     <!--商品推荐内容-->
     <div class="shop-container">
     <div class="shop-box">
       <div class="shop-img">
         <img src="https://img12.360buyimg.com/n1/jfs/t17503/176/886846765/254625/7a193a0c/5aaf6b86Nbdf5d5b4.jpg" />
       </div>
     <p class="shop-content">鹭珍 五香花生380g/袋 龙岩特产休闲坚果零食</p>
       <p class="shop-price">￥15.00<span class="shop-count">月销340</span></p>
     </div>
     <div class="shop-box">
       <div class="shop-img">
         <img src="https://img14.360buyimg.com/n0/jfs/t1/8462/28/3379/476265/5bd6aaa6E6b08905a/edd31d6f142720ce.jpg" />
       </div>
     <p class="shop-content">M&M'S 脆心牛奶巧克力豆 休闲食品 零食 婚庆 糖果 巧克力 礼品 560g</p>
       <p class="shop-price">￥169.00<span class="shop-count">月销500</span></p>
     </div>
       <div class="shop-box">
         <div class="shop-img">
           <img src="https://img14.360buyimg.com/n0/jfs/t862/291/1178057993/132616/29b2854/557becb0N49ac6b31.jpg" />
         </div>
         <p class="shop-content">达利园牛角包芝士味 营养早餐零食面包饼干蛋糕 240g</p>
         <p class="shop-price">￥30.00<span class="shop-count">月销5000</span></p>
       </div>
       <div class="shop-box">
         <div class="shop-img">
           <img src="https://img14.360buyimg.com/n1/s546x546_jfs/t27823/99/78160563/529540/3342b05/5b83bae9Nc83d37e3.jpg" />
         </div>
         <p class="shop-content">食族人酸辣粉 网红重庆风味方便速食吃嗨麻辣烫米粉 130g/桶</p>
         <p class="shop-price">￥9.90<span class="shop-count">月销100</span></p>
       </div>
     </div>
   </div>
</template>

<script>

  export default {

  }
</script>

<style scoped>
  .title{
    height: 50px;
    line-height: 50px;
    background: linear-gradient(to bottom right, #3EC7F8 , #04A6E8);
    position: relative;
    text-align: center;
    color: #fff;
  }

  .shop-container{
    display: flex;
    background: #f3f5f7;
    flex-wrap: wrap;
  }
  .shop-box{
    width: 47.5%;
    margin: 2px;
    background: white;
  }
  .shop-img{
    text-align: center;
  }
  .shop-img img{
    height: 130px;
    margin: 10px 10px;
  }
  .shop-content{
    font-size: 15px;
    padding-left: 5px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
  .shop-price{
    color: #f44;
    font-size: 16px;
    padding-left: 5px;
    margin-bottom: 10px;
  }
  .shop-count{
    color: #999;
    float: right;
    padding-right: 5px;
    font-size: 13px;
    padding-top: 3px;
  }
</style>
