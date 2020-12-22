<template>
  <div id="index">
    <topbar/>
    <Main></Main>
    <!-- <Footer/> -->
    <!-- <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" /> -->
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import Main from '@/components/index/Main.vue'
// import VolumeGraph from '@/components/VolumeGraph.vue'
// import Footer from '@/components/index/Foot.vue'
export default {
  name: 'index',
  components: {
    topbar,
    Main
    // Footer
  }
}
</script>

<style scoped>
</style>
