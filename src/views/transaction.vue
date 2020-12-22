<template>
  <div class="transaction">
    <topbar/>
    <span id="t-title">抓住商机最大程度地降低交易市场中的风险</span>
    <div class="t-bg">
      <Activities></Activities>
      <Delivery></Delivery>
      <Cancel></Cancel>
      <Query></Query>
      <Capital></Capital>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import Activities from '@/components/transaction/Activities'
import Cancel from '@/components/transaction/Cancel.vue'
import Capital from '@/components/transaction/Capital.vue'
import Delivery from '@/components/transaction/Delivery.vue'
import Query from '@/components/transaction/Query.vue'
import Foot from '@/components/index/Foot.vue'

export default {
  name: 'transaction',
  components: {
    topbar,
    Cancel,
    Activities,
    Capital,
    Delivery,
    Query,
    Foot
  }
}
</script>

<style>
.transaction{
  color: white;
  width: 100%;
  height: 2000px;
  background-size: 100% auto;
  background-image: url('../../static/images/profittrea.jpg');
}
.t-bg > div{
  margin: auto;
  height: 470px;
  width: 90%;
}
#t-title{
  width: 700px;
  margin: 140px 0 200px 80px;
  font-size: 60px;
  display: inline-block;
}
.t-bg{
  width: 100%;
  height: 2000px;
  /* 使用rgba子元素不会继承父元素的透明度 */
  background-color: rgba(209,221,230,60%);
}
</style>
