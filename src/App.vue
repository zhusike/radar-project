<template>
  <div>
    <v-guestPortrait></v-guestPortrait>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop-overview">店铺概览</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/guest-portrait'>客群画像</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/shops-ranking'>商铺排行</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript">
  // export default 和 export的区别
  import shopOverview from './components/shop-overview/shop-overview.vue';
  import guestPortrait from './components/guest-portrait/guest-portrait.vue';
  import shopsRanking from './components/shops-ranking/shops-ranking.vue';
  
export default {
  components: {
    'v-shopOverview': shopOverview,
    'v-guestPortrait': guestPortrait,
    'v-shopsRanking': shopsRanking
  }
};
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  height: 55px;
  line-height: 55px;
}
.tab-item {
  flex: 1;
  text-align: center;
  background: linear-gradient(top, #70e0fd 0.00%, #1a80a5 90.00%);
}
.tab-item>a {
  /*& > a*/
  display: block;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
.tab-item.active
  color: rgb(240,20,20)
</style>
