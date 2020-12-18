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
      <div class="content">
        <TabStrip/>
        <VolumeGraph/>
      </div>
    </div>
    <Footers/>
    <!-- <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" /> -->
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import TabStrip from '@/components/TabStrip.vue'
import VolumeGraph from '@/components/VolumeGraph.vue'
import Footers from '@/components/Footers.vue'
export default {
  name: 'index',
  components: {
    topbar,
    TabStrip,
    VolumeGraph,
    Footers
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 1700px;
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
.content{
  /* 阴影颜色 水平偏移量  垂直偏移量  模糊距离 阴影尺寸 */
  box-shadow:#CD3333 0 -8px 90px 20px;
  /* 使用这种方式设置透明度，子元素不会继承效果 */
  background-color: rgba(205, 51, 51, 70%);
}
</style>
