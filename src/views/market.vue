<template>
  <div class="market">
    <topbar></topbar>
    <div class="m-main">
      <h2 class="market-title">高流动性的市场让你具有更多的可能性</h2>
      <Warning></Warning>
      <Explore></Explore>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import Warning from '@/components/market/Warning.vue'
import Explore from '@/components/market/Explore.vue'
import Foot from '@/components/index/Foot.vue'
export default {
  name: 'market',
  components: {
    topbar,
    Warning,
    Explore,
    Foot
  }
}
</script>

<style>
.m-main{
  width: 100%;
  height: 1600px;
  background-size: 100% auto;
  background-image: url(../../static/images/profittrea.jpg);
  margin-bottom: 100px;
}
.market-title{
  width: 600px;
  font-size: 45px;
  color: white;
  margin: 0 0 120px 80px;
  padding-top: 200px;
}
</style>
