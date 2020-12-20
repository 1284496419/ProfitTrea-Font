<template>
  <div class="market">
    <topbar></topbar>
    <div class="m-main">
    </div>
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
export default {
  name: 'market',
  components: {
    topbar
  }
}
</script>

<style>
.m-main{
  width: 100%;
  height: 1000px;
  background-size: 100% auto;
  background-image: url(../../static/images/profittrea.jpg);
}
</style>
