<template>
  <div class="transaction">
    <topbar />
    <div class="bg-img">
      <h2 id="t-title">抓住商机最大程度地降低交易市场中的风险</h2>
      <div class="t-main">
        <Activities></Activities>
        <Cancel></Cancel>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import topbar from '@/components/topbar.vue'
  import Activities from '@/components/transaction/Activities'
  import Cancel from '@/components/transaction/Cancel.vue'
  import Capital from '@/components/transaction/Capital.vue'
  import Foot from '@/components/index/Foot.vue'

  export default {
    name: 'transaction',
    data() {
      return {

      };
    },
    methods: {
    },
    components: {
      topbar,
      Cancel,
      Activities,
      Capital,
      Foot
    }
  }
</script>

<style>
  .bg-img {
    color: white;
    background-size: 100% auto;
    background-image: url(../../static/images/profittrea.jpg);
  }

  .t-main>div:not(:first-child) {
    height: 625px;
    width: 88.8%;
  }

  .t-main {
    height: 1300px;
  }
  #t-title {
    width: 700px;
    margin: 140px 0 200px 80px;
    font-size: 45px;
    display: inline-block;
  }

  .t-bg {
    margin-top: 50px;
    position: absolute;
    width: 100%;
    height: 2700px;
    /* 使用rgba子元素不会继承父元素的透明度 */
    background-color: rgba(209, 221, 230, 60%);
  }
</style>
