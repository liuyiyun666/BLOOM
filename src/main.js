// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from '@/components/public/footer'
import axios from "axios"
import store from "./store/class"


import { Swipe, SwipeItem } from 'mint-ui'


import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false;

Vue.component("v-footer",Footer)


// 给 vue扩展 全局使用的插件
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
