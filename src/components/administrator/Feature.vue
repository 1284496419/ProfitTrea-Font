<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <!-- v-for="(item, index) in editableTabs" -->
    <el-tab-pane
      v-for="(item) in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name">
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'feature',
  data () {
    return {
      editableTabsValue: '',
      editableTabs: []
    }
  },
  methods: {
    init (tab, value) {
      this.editableTabs.push(tab)
      this.editableTabsValue = value
    },
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
}
</script>

<style>
.el-tabs{
  width: 84%;
  float: right;
}
</style>
