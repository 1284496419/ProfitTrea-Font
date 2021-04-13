<template>
  <div class="historyDeal">
    <span>开始时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <span>结束时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-button type="primary">查询</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="transactionDate" label="成交日期">
      </el-table-column>
      <el-table-column prop="stockCode" label="证券代码">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称">
      </el-table-column>
      <el-table-column prop="transactionPrice" label="成交价格">
      </el-table-column>
      <el-table-column prop="transactionNumber" label="成交数量">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
      </el-table-column>
      <el-table-column prop="transactionId" label="合同编号">
      </el-table-column>
      <!-- <el-table-column prop="address" label="股东账户">
      </el-table-column> -->
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
        tableData:[],
        value1:''
      }
    },
    mounted(){
      var token = localStorage.getItem('Authorization')
      var history = JSON.stringify({
        userName: token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', history, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var historys = response.data.data
          var history_info = JSON.stringify({
            userId:historys.userId
          })
          this.$axios.post('/transaction/QUERY||HISTORY.do',history_info, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response)=>{
            var history_list = response.data.data
            this.tableData = history_list
          }).catch()
        })
    }
  }
</script>

<style>
</style>
