<template>
  <div class="historyDeal">
    <span>开始时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <span>结束时间：</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-button type="primary">主要按钮</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="address" label="成交日期">
      </el-table-column>
      <el-table-column prop="date" label="证券代码">
      </el-table-column>
      <el-table-column prop="name" label="证券名称">
      </el-table-column>
      <el-table-column prop="address" label="成交价格">
      </el-table-column>
      <el-table-column prop="address" label="成交数量">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
      <el-table-column prop="address" label="合同编号">
      </el-table-column>
      <el-table-column prop="address" label="股东账户">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
</script>

<style>
</style>
