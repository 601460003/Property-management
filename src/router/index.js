import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import my from '@/view/myCenter'
import advice from '@/pages/index/postAdvice'
import maintenance from '@/pages/index/maintenance'
import electricity from '@/pages/index/electricity'
import checkin from '@/pages/index/checkin'
import activities from '@/pages/index/activities'
import myOrder from '@/pages/myCenter/myOrder'
import merchants from '@/pages/myCenter/merchants'
import recordMoney from '@/pages/myCenter/recordMoney'
import address from '@/pages/myCenter/address'
import addressOne from '@/pages/myCenter/addressOne'
import wantShop from '@/pages/myCenter/wantShop'
import car from '@/pages/index/car'
import visit from '@/pages/index/visit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta:{
        showFooter:true
      }
    },

    {
      path: '/my',
      component: my,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/advice',
      component: advice
    },
    {
      path: '/maintenance',
      component: maintenance
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/visit',
      component: visit
    },
    {
      path: '/electricity',
      component: electricity
    },
    {
      path: '/checkin',
      component: checkin
    },
    {
      path: '/activities',
      component: activities
    },
    {
      path: '/myOrder/:active',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/merchants',
      component: merchants
    },
    {
      path: '/recordMoney',
      component: recordMoney
    },
    {
      path: '/address',
      component: address
    },
    {
      path: '/addressOne',
      component: addressOne
    },
    {
      path: '/wantShop',
      component: wantShop
    },
  ]
})
