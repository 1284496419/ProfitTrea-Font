<template>
  <div class="cancelOrder">
    <el-button size="mini" id="cancelOrder" type="warning" @click="handleEdit(scope.$index, scope.row)">撤单</el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange" class="orderTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="委托日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="stockCode" label="证券代码" width="120">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称" width="120">
      </el-table-column>
      <el-table-column prop="operate" label="操作" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="委托价格" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="委托数量" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="成交数量" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="成交均价" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="合同编号" width="120">
      </el-table-column>
      <el-table-column prop="stockCode" label="" width="120">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">撤单</el-button>
        </template>
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
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          stockCode: '王小虎',
          stockName: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>
</style>
