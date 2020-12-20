<template>
  <div class="error">
    <topbar/>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import topbar from '@/components/topbar.vue'
import Content from '@/components/error/content.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'error',
  components: {
    topbar,
    Content,
    Footer
  }
}
</script>

<style>
</style>
