<template>
  <div class="market">
    <topbar></topbar>
    <div class="m-main">
      <Warning></Warning>
      <Explore></Explore>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import Warning from '@/components/market/Warning.vue'
import Explore from '@/components/market/Explore.vue'
import Footers from '@/components/Footers.vue'
export default {
  name: 'market',
  components: {
    topbar,
    Warning,
    Explore,
    Footers
  }
}
</script>

<style>
.m-main{
  width: 100%;
  height: 1000px;
  background-size: 100% auto;
  background-image: url(../../static/images/profittrea.jpg);
  margin-bottom: 100px;
}
</style>
