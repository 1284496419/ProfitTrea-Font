<template>
  <div class="admin">
    <Navigator></Navigator>
    <!-- <Feature></Feature> -->
    <Panel></Panel>
  </div>
</template>

<script>
import Navigator from '@/components/administrator/Navigator.vue'
// import Feature from '@/components/administrator/Feature.vue'
import Panel from '@/components/administrator/Panel.vue'
export default {
  name: 'admin',
  components: {
    Navigator,
    // Feature
    Panel
  }
}
</script>

<style>
</style>
