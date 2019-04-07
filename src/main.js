// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块

Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 1
  }
);
