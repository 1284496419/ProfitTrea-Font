<template>
  <div id="index">
    <!-- 登录页背景图片  -->
    <topbar/>
    <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" />
  </div>
</template>
<script>
import topbar from '@/components/topbar.vue'
export default {
  name: 'index',
  components: {
    topbar
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: auto;
}
</style>
