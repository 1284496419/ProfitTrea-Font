<template>
  <div class="main">
    <h1 class="platform">多样化证券交易模拟平台</h1>
    <div class="main-title">
      <h3 id="resolve">解决方案</h3>
      <h3 id="help">我们为您提供帮助</h3>
    </div>
    <Tabline></Tabline>
  </div>
</template>

<script>
import Tabline from '@/components/index/Tabline.vue'
export default {
  name: 'main',
  components: {
    Tabline
  }
}
</script>

<style>
.main{
  color: white;
  font-size: 30px;
}
.platform{
  display: inline-block;
  margin: 230px 0 0 80px;
}
.main-title{
  margin: 170px 0 0 80px;
}
.main-title h3{
  margin-top: 10px;
}
#resolve{
  color: #EEEE00;
  font-size: 18px;
}
</style>
