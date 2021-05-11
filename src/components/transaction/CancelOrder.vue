<template>
  <div class="cancelOrder">
    <el-button size="mini" id="cancelOrder" type="warning" @click="handleAll">撤单</el-button>
    <el-table ref="multipleTable" :data="cancel" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange" class="orderTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="date" label="委托日期" width="120">
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
        multipleSelection: [],
        oneRevoke:[],
        queryInfo: {},
        token: ''
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
      },
      handleEdit(index, row) {
        this.oneRevoke.push(row)
        console.log("row", this.oneRevoke)
        this.revokeList(this.oneRevoke)
      },
      handleAll() {
        this.revokeList(this.multipleSelection)
      },
      revokeList(revokation){
        var length = revokation.length
        if (length > 0) {
          //执行撤单操作
          var revoke = JSON.stringify({
            revoke: revokation
          })
          this.$axios.post('/transaction/STOCK||REVOKE.do', revoke, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            if (response.data.code != 100) {
              this.$message.error(response.data.msg)
            } else {
              this.$message({
                message: '撤单成功',
                type: 'success'
              });
              this.$emit('queryRevoke');
            }
          }).catch((error) => {
            this.$message.error(error)
          })
        } else {
          this.$message.error('请选择需要撤单的委托')
        }
      }
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      this.token = token
      var info = JSON.stringify({
        userName: this.token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', info, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if (response.data.code != 100) {

        } else {
          this.queryInfo = JSON.stringify({
            userId: response.data.data.userId
          })
        }
      }).catch((error) => {
        this.$message.error("获取token状态异常")
      })
    },
    props: {
      cancel: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
</style>
