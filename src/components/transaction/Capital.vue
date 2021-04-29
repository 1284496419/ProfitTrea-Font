<template>
  <div class="capital">
    <div class="table-wrap">
      <table id="funderDetailTable">
        <tbody>
          <tr>
            <td class="bg-gray funder">可用余额</td>
            <td class="funder">{{funds.availableBalance}}</td>
            <td class="bg-gray funder">资金余额</td>
            <td class="funder">{{funds.fundBalance}}</td>
            <td class="bg-gray funder">冻结余额</td>
            <td class="funder">{{funds.freezeBalance}}</td>
          </tr>
          <tr>
            <td class="bg-gray funder">总资产</td>
            <td class="funder">{{funds.totalFund}}</td>
            <td class="bg-gray funder">总盈亏</td>
            <td class="funder">{{funds.totalProfit}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-table :data="stockList" stripe style="width: 100%">
      <el-table-column prop="stockCode" label="证券代码">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称">
      </el-table-column>
      <el-table-column prop="stockNumber" label="证券数量">
      </el-table-column>
      <el-table-column prop="usefulNumber" label="可用数量">
      </el-table-column>
      <el-table-column prop="freezeNumber" label="冻结数量">
      </el-table-column>
      <el-table-column prop="costPrice" label="成本价">
      </el-table-column>
      <el-table-column prop="marketPrice" label="市价">
      </el-table-column>
      <el-table-column prop="marketValue" label="市值">
      </el-table-column>
      <el-table-column prop="floatProfit" label="浮动盈亏">
      </el-table-column>
      <el-table-column prop="profitRatio" label="盈亏比例">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      
    },
    props:{
      stockList:{
        type:Array,
        required:true
      },
      funds:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style>
  .capital {
    padding-top: 60px;
  }

  #funderDetailTable {
    text-align: center;
  }

  .funder {
    width: 200px;
    height: 50px;
    border: 1px solid #000000;
  }

  .bg-gray {}
</style>
