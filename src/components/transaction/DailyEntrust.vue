<template>
  <div class="dailyEntrust">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="证券代码">
      </el-table-column>
      <el-table-column prop="name" label="证券名称">
      </el-table-column>
      <el-table-column prop="address" label="委托价格">
      </el-table-column>
      <el-table-column prop="address" label="委托数量">
      </el-table-column>
      <el-table-column prop="address" label="成交数量">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
      <el-table-column prop="address" label="委托日期">
      </el-table-column>
      <el-table-column prop="address" label="委托时间">
      </el-table-column>
      <el-table-column prop="address" label="合同编号">
      </el-table-column>
      <el-table-column prop="address" label="报价方式">
      </el-table-column>
      <el-table-column prop="address" label="备注">
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
</script>

<style>
</style>
