<template>
  <div class="overview-bg" ref="overview">
    <div class="header">
      <i class="icon-arrow_lift" @click></i>
      <p>店铺概览</p>
    </div>
    <div class="title">
      <span class="shopkeeper">Hi~ big Boss</span>
      <span class="shopname">星巴克咖啡 1F 1001</span>
    </div> 
    <!--更新时间-->
    <div class="time">
      16:00更新
    </div>
    <!--获客率-->
    <div class="rate">
      <div class="now">
        <div>38.7%</div>
        <span>本层获客率</span>
      </div>
      <div class="all">
        <div>78.5%</div>
        <span>商圈获客率</span>
      </div>
    </div>
    <!--时段客流 条形统计图-->
    <div class="passenger-flow">
      <div class="title">
        <div class="details">
                          时段客流
        </div>
        <div class="update">
          16:00更新
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript">
</script>

<style lang="scss" scoped>
 @import '../../assets/hotcss/px2rem.scss';
  $fontsize24: 24px;
  .overview-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: px2rem(110);
    width: 100%;
    background: #102d5c;
    /*padding-bottom: 110px;*/
    /*头部*/
    .header {
      position: relative;
      width: 100%;
      height: px2rem(126);
      color: #fff;
      .icon-arrow_lift {
        position: absolute;
        top: px2rem(30);
        left: 0;
        display: inline-block;
        padding: px2rem(30);
        font-size: px2rem(36);
      }
      p {
        position: absolute;
        top: px2rem(30);
        left: 0;
        display: inline-block;
        margin:0 auto;
        width: 100%;
        line-height: px2rem(96);
        text-align: center;
        
      }
    }
    /*店主 店名 信息*/
    .title {
      width: 100%;
      height: px2rem(40);
      margin-top: px2rem(26);
      background-color: #25577d;
      line-height: px2rem(40);
      color: #72fffd;
      font-size: px2rem(24);
      .shopkeeper {
        float: left;
        margin-left: px2rem(20);
      }
      .shopname {
        float: right;
        margin-right: px2rem(20);
      }
    }
    /*更新时间*/
    .time {
      margin: 0 auto;
      width: px2rem(214);
      height: px2rem(30);
      color: #6199ea;
      font-size: px2rem(24);
      text-align: center;
      /*background: linear-gradient(left, rgba(26,61,106,0) 0%, rgba(26,61,106,1) 7%, rgba(26,61,106,0) 93%);*/
      background: linear-gradient(to right, transparent , #216ba0, transparent);      
    }
    /*获客率*/
    .rate {
      display: flex;
      width: 100%;
      /*height: px2rem(185);*/
      color: #84fffd;
      text-align: center;
      padding: px2rem(46) 0;
      box-sizing: border-box;
      .now, .all {
        flex: 1;
        div {
          font-size: px2rem(60);
          margin-bottom: px2rem(6);
        }
        span {
          font-size: px2rem(28);
        }
      }
    }
    /*时段客流*/
    .passenger-flow {
      width: 100%;
      height: px2rem(550);
      padding: px2rem(45) 0;
      box-sizing: border-box;
      .title {
        .details {
          width: px2rem(265);
          height: px2rem(40);
          line-height: px2rem(40);
          font-size: px2rem(28);
          color: #84fffd;
          background: #24567b;
          float: left;
        }
        .update {
          float: right;
          font-size: px2rem(28);
          color: #6199ea;
        }
      }
    }
  }
  
</style>