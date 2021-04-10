<template>
  <div class="dailyEntrust">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="stockCode" label="证券代码">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称">
      </el-table-column>
      <el-table-column prop="entrustPrice" label="委托价格">
      </el-table-column>
      <el-table-column prop="entrustNumber" label="委托数量">
      </el-table-column>
      <el-table-column prop="transactionPrice" label="成交价格">
      </el-table-column>
      <el-table-column prop="transactionNumber" label="成交数量">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
      </el-table-column>
      <el-table-column prop="entrustDate" label="委托日期">
      </el-table-column>
      <el-table-column prop="entrustTime" label="委托时间">
      </el-table-column>
      <el-table-column prop="entrustId" label="合同编号">
      </el-table-column>
      <el-table-column prop="entrustType" label="报价方式">
      </el-table-column>
      <el-table-column prop="description" label="备注">
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
      var user_info = JSON.stringify({
        userName:token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do',user_info, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response)=>{
        var user = response.data.data
        var entrust_info = JSON.stringify({
          userId: user.userId
        })
        this.$axios.post('/transaction/QUERY||ENTRUST.do', entrust_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          this.tableData = response.data.data
        }).catch()
      }).catch()
    }
  }
</script>

<style>
</style>
