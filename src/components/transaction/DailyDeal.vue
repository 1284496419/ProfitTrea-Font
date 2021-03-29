<template>
  <div class="dailyDeal">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="成交时间">
      </el-table-column>
      <el-table-column prop="name" label="证券代码">
      </el-table-column>
      <el-table-column prop="address" label="证券名称">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
      <el-table-column prop="address" label="成交数量">
      </el-table-column>
      <el-table-column prop="address" label="成交价格">
      </el-table-column>
      <el-table-column prop="address" label="成交金额">
      </el-table-column>
      <el-table-column prop="address" label="成交编号">
      </el-table-column>
      <el-table-column prop="address" label="撤单数量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
</script>

<style>
</style>
