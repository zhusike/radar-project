<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop-overview" active-class="active">店铺概览</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/guest-portrait' active-class="active">客群画像</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/shops-ranking' active-class="active">商铺排行</router-link>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>

<script type="text/ecmascript">
  // export default 和 export的区别
// import {hotcss} from './assets/hotcss/hotcss';
 
  export default {
  };
</script>

<style lang="scss" scoped>
  @import 'assets/hotcss/px2rem.scss';

.tab {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 500;
  display: flex;
  width: 100%;
  height: px2rem(110);
  line-height: px2rem(110);
}
.tab-item {
  flex: 1;
  text-align: center;
  background: linear-gradient(top, #70e0fd 0, #1a80a5 90.00%);
}
.tab-item>a {
  /*& > a*/
  display: block; /*优化,点击到旁边也可以*/
  font-size: px2rem(24);
  color: rgb(255, 255, 255);
}
.tab-item .active {
  background: #146dbf;
  color: rgb(254, 250, 117);
}
</style>
