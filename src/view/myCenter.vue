<template>
  <div>
    <div>
      <div class="header">
        <div class="header-left">
          <p>余额</p>
          <p class="header-price">0.00</p>
          <span class="header-other">充值</span>
        </div>
        <div class="header-main">
          <img src="../assets/header.jpeg" />
          <p>物业管理</p>
          <p>[普通会员]</p>
        </div>
        <div class="header-right">
          <p>积分</p>
          <p class="header-price">0.00</p>
          <span class="header-other">兑换</span>
        </div>
      </div>
      <van-cell-group class="user-group">
        <router-link to="/myOrder/0">
          <van-cell icon="records" title="我的订单" is-link />
        </router-link>
      </van-cell-group>
      <!--分栏-->
      <div class="top-top">
        <van-row class="user-links"  >
          <van-col span="6">
            <router-link to="/myOrder/0">
              <van-icon name="pending-payment"/>
              <div class="van_icon">待付款</div>
            </router-link>
          </van-col>

          <van-col span="6">
            <router-link to="/myOrder/1">
              <van-icon name="tosend"/>
              <div class="van_icon">待发货</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/myOrder/2">
              <van-icon name="logistics"/>
              <div class="van_icon">待收货</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/myOrder/3">
              <van-icon name="records"/>
              <div class="van_icon">退/换货</div>
            </router-link>
          </van-col>
        </van-row>
      </div>
      <!--个人中心组件-->
      <div class="back"></div>
      <div>
        <van-cell-group>
          <router-link to="/merchants">
          <van-cell icon="friends-o" title="商户入驻中心" is-link />
          </router-link>
          <!--分销中心-->
          <!--<van-cell icon="cluster-o" title="分销中心" is-link />-->
          <!--&lt;!&ndash;收货地址管理&ndash;&gt;-->
          <router-link to="/address">
          <van-cell icon="wap-home" title="收货地址管理" is-link/>
          </router-link>
          <!--我的优惠卷-->
          <van-cell icon="cash-on-deliver" title="我的优惠卷" is-link  @click="myCoupon"/>
          <!--充值记录-->
          <router-link to="/recordMoney">
          <van-cell icon="after-sale" title="充值记录" is-link />
          </router-link>
          <!--我的关注-->
          <router-link to="/wantShop">
          <van-cell icon="like-o" title="我的关注" is-link />
          </router-link>
          <!--我的足迹-->
          <!--<van-cell icon="question-o" title="我的足迹" is-link />-->
          <!--关于我们-->
          <van-cell icon="bullhorn-o" title="关于我们" is-link  @click="aboutMe"/>
        </van-cell-group>
        <!--点击退出的按钮-->
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast,Dialog } from 'vant';
  export  default {
    methods:{
      myCoupon(){
        Toast('暂无优惠卷');
      },
      aboutMe(){
        Dialog.alert({
          title: '华升物业',
          message: '公司核心项目为商务办公楼物业、会展物业、城市综合体、公众物业、高端住宅物业。'
        }).then(() => {
          // on close
        });

      }
    }
  }
</script>

<style scoped>
  .top-top {
    text-align: center;
    margin: 10px auto;
    font-size: 13px;
  }
  .van-icon {
    font-size: 24px;
    color: #323233 ;
  }

  .van-cell {
    font-size: 14px;
  }
  .van_icon{
    color:#323233 ;
    font-size: 14px;
  }
  .over_button{
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: #fff;
    background-color: #f44;
    border: 1px solid #f44;
    margin-top: 50px;
  }
.back{
  height: 10px;
  width: 100%;
  background: #f3f5f7;
}
  .header{
    height: 200px;
    background: #e2423d;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    animation:myfirst 15s;
    -webkit-animation:myfirst 15s; /* Safari and Chrome */
  }
  @keyframes myfirst
  {
    0%   {background:red;}
    25%  {background:yellow;}
    50%  {background:blue;}
    100% {background:green;}
  }

  @-webkit-keyframes myfirst /* Safari and Chrome */
  {
    0%   {background:red;}
    25%  {background:yellow;}
    50%  {background:blue;}
    100% {background:green;}
  }
  .header-main img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  .header-left{
    flex: 1;
    text-align: right;
  }
  .header-left p{
    padding:0 8px;
  }
  .header-main{
    flex: 1;
  }
  .header-right{
    flex: 1;
    text-align: left;
  }
  .header-right p{
    padding: 0 8px;
  }
  .header-price{
    color: yellow;
    margin: 3px 0;
  }
  .header-other{
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 0 8px;
  }
</style>

