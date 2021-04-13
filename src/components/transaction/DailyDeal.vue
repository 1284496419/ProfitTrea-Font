<template>
  <div class="dailyDeal">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="transactionDate" label="成交时间">
      </el-table-column>
      <el-table-column prop="stockCode" label="证券代码">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
      </el-table-column>
      <el-table-column prop="transactionNumber" label="成交数量">
      </el-table-column>
      <el-table-column prop="transactionPrice" label="成交价格">
      </el-table-column>
      <el-table-column prop="transactionAmount" label="成交金额">
      </el-table-column>
      <el-table-column prop="transactionId" label="成交编号">
      </el-table-column>
      <el-table-column prop="revokeNumber" label="撤单数量">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        tableData:[]
      }
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var deal_info = JSON.stringify({
        userName: token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', deal_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var deal = response.data.data
          var dailyDeal = JSON.stringify({
            userId:deal.userId
          })
          this.$axios.post('/transaction/QUERY||TRANSACTION.do',dailyDeal, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response)=>{
            var deal_list = response.data.data
            this.tableData = deal_list
          }).catch()
        })
        .catch()
    }
  }
</script>

<style>
</style>
