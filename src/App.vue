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
import {hotcss} from './assets/hotcss/hotcss';
 
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*@import './assets/hotcss/px2rem.scss';*/
@import './assets/hotcss/px2rem.styl';

.tab
  position: absolute
  bottom: 0
  display: flex
  width: 100%
  height: 110px
  line-height: 110px
  .tab-item 
    flex: 1
    text-align: center
    background: linear-gradient(top, #70e0fd 0.00%, #1a80a5 90.00%)
    & > a
      display: block /*优化,点击到旁边也可以*/
      font-size: 24px
      color: rgb(255, 255, 255)
    & .active 
      background: rgb(48, 182, 187)
    
</style>
