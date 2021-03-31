<template>
  <div clss="tabline">
    <div class="tab-container">
        <el-tabs v-model="activeName" @tab-click="tabClick" id="tab-info">
          <el-tab-pane label="进入市场" name="first">
            <GoMarket></GoMarket>
          </el-tab-pane>
          <el-tab-pane label="管理风险" name="second">
            <ManagerRisk></ManagerRisk>
          </el-tab-pane>
          <el-tab-pane label="分析市场数据" name="third">
            <MarketData></MarketData>
          </el-tab-pane>
          <el-tab-pane label="优化交易" name="fourth">
            <OptimizeTrade></OptimizeTrade>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
  import GoMarket from './GoMarket.vue'
  import ManagerRisk from './ManagerRisk.vue'
  import MarketData from './MarketData.vue'
  import OptimizeTrade from './OptimizeTrade.vue'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeName: 'first',
        tableData: [{
            stockname: '上证指数',
            price: '3442.14',
            limit: '-7.24',
            scope: '-0.21%'
          },
          {
            stockname: '欧洲斯托克50',
            price: '3521.32',
            limit: '-3.92',
            scope: '-0.11%'
          },
          {
            stockname: '英国富时100',
            price: '6463.39',
            limit: '78.66',
            scope: '1.23%'
          },
          {
            stockname: '俄罗斯RTS',
            price: '1330.40',
            limit: '-5.04',
            scope: '-0.38%'
          },
          {
            stockname: '道琼斯',
            price: '29883.79',
            limit: '59.87',
            scope: '0.20%'
          },
          {
            stockname: '标普500',
            price: '3669.01',
            limit: '6.56',
            scope: '0.18%'
          }
        ]
      }
    },
    methods: {
      tabClick(tab, event) {
        console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      indexMethod(name) {
        return name
      }
    },
    components: {
      GoMarket,
      ManagerRisk,
      MarketData,
      OptimizeTrade
    }
  }
</script>

<style scoped>
  .tab-container {
    height: 511px;
    width: 1152px;
  }
  .tab-container .el-tabs__header{
    margin-bottom: 0;
  }
  #tab-info{
    float: left;
    margin-left: 2px;
    width: 100%;
    background-color: rgb(205, 51, 51, 55%);
  }
  .global-data {
    color: #303133;
  }
</style>
