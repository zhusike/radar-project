import Vue from 'vue';
import Router from 'vue-router';
import shopOverview from '../components/shop-overview/shop-overview.vue';
import guestPortrait from '../components/guest-portrait/guest-portrait.vue';
import shopsRanking from '../components/shops-ranking/shops-ranking.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/shop-overview',
      name: 'shopOverview',
      component: shopOverview
    },
    {
      path: '/guest-portrait',
      name: 'guestPortrait',
      component: guestPortrait
    },
    {
      path: '/shops-ranking',
      name: 'shopsRanking',
      component: shopsRanking
    }
  ],
  linkExactActiveClass: 'active' // 激活当前样式，定义active类
});
