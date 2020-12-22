<template>
  <div class="admin">
    <Top></Top>
    <Navigator></Navigator>
    <!-- <Feature></Feature> -->
    <Panel></Panel>
  </div>
</template>

<script>
import Navigator from '@/components/administrator/Navigator.vue'
import Top from '@/components/administrator/Top.vue'
// import Feature from '@/components/administrator/Feature.vue'
import Panel from '@/components/administrator/Panel.vue'
export default {
  name: 'admin',
  components: {
    Navigator,
    // Feature
    Panel,
    Top
  }
}
</script>

<style>
</style>
