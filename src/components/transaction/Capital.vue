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

      var capital_info = JSON.stringify({
        userName: token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', capital_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var capital = response.data.data
          var capital_stock = JSON.stringify({
            userId:capital.userId
          })
          this.$axios.post('/transaction/QUERY||FUND.do',capital_stock, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response)=>{
            var funds = response.data.data
            this.tableData = funds
          }).catch()
        })
        .catch()
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
