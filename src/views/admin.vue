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
    Top,
  },
  methods: {
    getTab (tabs) {
      this.$refs.editTab.init(tabs)
    }
  },
  mounted() {
  }
}
</script>

<style>
</style>
