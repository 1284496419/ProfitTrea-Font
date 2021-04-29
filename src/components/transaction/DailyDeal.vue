<template>
  <div class="dailyDeal">
    <el-table :data="today_deal" stripe style="width: 100%">
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
        
      }
    },
    mounted() {

    },
    props:{
      today_deal:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style>
</style>
