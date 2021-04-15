<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <!-- v-for="(item, index) in editableTabs" -->
    <!-- {{editableTabsValue}} -->
    <el-tab-pane v-for="(item,val) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <component :is="item.content"></component>
      <!-- <Panel></Panel> -->
      <!-- <component :is="currentView"></component> -->
    </el-tab-pane>
  </el-tabs>


</template>

<script>
  import Feature from '@/components/administrator/Feature.vue'
  import Panel from '@/components/administrator/Panel.vue'
  import Manager from '@/components/administrator/Manager.vue'
  import User from '@/components/administrator/User.vue'
  import Statistics from '@/components/administrator/Statistics.vue'
  import MarketManage from '@/components/administrator/MarketManage.vue'
  import FundManage from '@/components/administrator/FundManage.vue'
  export default {
    name: 'feature',
    data() {
      return {
        editableTabsValue: '',
        editableTabs: [],
        index: 0,
        key: '',

        myarr:[{
          title: "1",
          name: "111",
          content: "Panel"
        },{
          title: "2",
          name:"2222",
          content: "Manager"
        }]
      }
    },
    methods: {
      init(tab) {
        this.editableTabs.push(tab)
        this.editableTabsValue = tab.name
      },
      handleTabsEdit(targetName, action) {
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
    },
    components: {
      Panel,
      Manager,
      User,
      Statistics,
      MarketManage,
      FundManage
    }
  }
</script>

<style>
  .el-tabs {
    width: 84%;
    margint-top: 30px;
    float: right;
  }
</style>
