<template>
  <div class="historyDeal">
    <span>开始时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <span>结束时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-button type="primary">查询</el-button>
    <el-table :data="history_deal" stripe style="width: 100%">
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
        value1:''
      }
    },
    mounted(){

    },
    props:{
      history_deal:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style>
</style>
