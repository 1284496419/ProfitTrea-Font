<template>
  <div id="index">
    <!-- 登录页背景图片  -->
    <topbar/>
    <div class="main">
      <span>多样化证券交易模拟平台</span>
      <div class="head">
        <span id="resolve">解决方案</span>
        <span>我们为您提供帮助</span>
      </div>
      <TabStrip/>
      <VolumeGraph/>
    </div>
    <!-- <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" /> -->
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import TabStrip from '@/components/TabStrip.vue'
import VolumeGraph from '@/components/VolumeGraph.vue'
export default {
  name: 'index',
  components: {
    topbar,
    TabStrip,
    VolumeGraph
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 1500px;
  background-size: 100% auto;
  background-image: url('../../static/images/profittrea.jpg');
}
.main span{
  display: inline-block;
  margin: 140px 0 0 80px;
  font-size: 60px;
  color: white;
}
.head span{
  font-size: 45px;
  margin-top: 10px;
  display: block;
}
#resolve{
  font-size: 28px;
  color: #EEEE00;
  margin-top: 220px;
}
</style>
