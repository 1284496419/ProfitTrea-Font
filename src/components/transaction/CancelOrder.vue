<template>
  <div class="cancelOrder">
    <el-button size="mini" id="cancelOrder" type="warning" @click="handleEdit(scope.$index, scope.row)">撤单</el-button>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange" class="orderTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="date" label="委托日期" width="120">
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
      </el-table-column>
      <el-table-column prop="stockCode" label="证券代码" width="120">
      </el-table-column>
      <el-table-column prop="stockName" label="证券名称" width="120">
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="120">
      </el-table-column>
      <el-table-column prop="entrustPrice" label="委托价格" width="120">
      </el-table-column>
      <el-table-column prop="entrustNumber" label="委托数量" width="120">
      </el-table-column>
      <el-table-column prop="transactionNumber" label="成交数量" width="120">
      </el-table-column>
      <el-table-column prop="transactionPrice" label="成交均价" width="120">
      </el-table-column>
      <el-table-column prop="id" label="合同编号" width="120">
      </el-table-column>
      <el-table-column label="" width="120">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">撤单</el-button>
        </template>
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
        var revoke_info = JSON.stringify({
          userId: user.userId
        })
        this.$axios.post('/transaction/QUERY||REVOKE.do', revoke_info, {
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
