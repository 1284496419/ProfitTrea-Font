<template>
<div class="foot">
  <Hfooter/>
  <Footer/>
</div>
</template>

<script>
import Hfooter from '@/components/Hfooter.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "foot",
  components: {
    Hfooter,
    Footer
  }
}
</script>

<style scoped>
</style>
