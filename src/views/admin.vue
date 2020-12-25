<template>
  <div class="admin">
    <Top></Top>
    <Navigator @select="getTab"></Navigator>
    <Feature ref="editTab"></Feature>
    <!-- <Panel></Panel> -->
  </div>
</template>

<script>
import Navigator from '@/components/administrator/Navigator.vue'
import Top from '@/components/administrator/Top.vue'
import Feature from '@/components/administrator/Feature.vue'
// import Panel from '@/components/administrator/Panel.vue'
export default {
  data () {
    return {
      tabIndex: 2
    }
  },
  name: 'admin',
  components: {
    Navigator,
    Feature,
    // Panel,
    Top
  },
  methods: {
    getTab (key) {
      // this.tabTitle = tabs
      const tabs = {
        title: key,
        name: ++this.tabIndex + '',
        content: 'Tab 1 content'
      }
      this.$refs.editTab.init(tabs, this.tabIndex + '')
    }
  }
}
</script>

<style>
</style>
