<template>
  <div class="capital">
    <div class="table-wrap">
      <table id="funderDetailTable">
        <tbody>
          <tr>
            <td class="bg-gray funder">可用余额</td>
            <td class="funder">{{this.found.availableBalance}}</td>
            <td class="bg-gray funder">资金余额</td>
            <td class="funder">{{this.found.fundBalance}}</td>
            <td class="bg-gray funder">冻结余额</td>
            <td class="funder">{{this.found.freezeBalance}}</td>
          </tr>
          <tr>
            <td class="bg-gray funder">总资产</td>
            <td class="funder">{{this.found.totalFund}}</td>
            <td class="bg-gray funder">总盈亏</td>
            <td class="funder">{{this.found.totalProfit}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="证券代码">
      </el-table-column>
      <el-table-column prop="name" label="证券名称">
      </el-table-column>
      <el-table-column prop="address" label="证券数量">
      </el-table-column>
      <el-table-column prop="address" label="可用数量">
      </el-table-column>
      <el-table-column prop="address" label="冻结数量">
      </el-table-column>
      <el-table-column prop="address" label="成本价">
      </el-table-column>
      <el-table-column prop="address" label="市价">
      </el-table-column>
      <el-table-column prop="address" label="市值">
      </el-table-column>
      <el-table-column prop="address" label="浮动盈亏">
      </el-table-column>
      <el-table-column prop="address" label="盈亏比例">
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
        tableData: [],
        found:{}
      }
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var share = JSON.stringify({
        stockCode: token
      })
      this.$axios.post('/transaction/QUERY||SHARE.do', share, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        this.found = response.data.data
        console.log(this.found)
      }).catch()
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
