<template>
  <div class="statistics">
    <el-breadcrumb separator="/" id="transaction">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>交易量列表</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>交易量列表</el-breadcrumb-item> -->
    </el-breadcrumb>
    <div id="transearch">
      <!-- <span class="search_span">合同编号:</span>
      <el-input
        placeholder="根据合同编号查询"
        v-model="tran_id"
        clearable>
      </el-input> -->
      <span class="search_span">股东账号:</span>
      <el-input
        placeholder="根据股东账号查询"
        v-model="stockUser_id"
        clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="selectStatistic">查询</el-button>
      <el-button icon="el-icon-refresh-left" @click="resetForm">重置</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'transactionDate', order: 'descending'}">
      <el-table-column prop="transactionDate" label="成交日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="transactionId" label="合同编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="userId" label="股东账户" sortable width="180">
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
      <!-- <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        stockUser_id:'',
        organizeInfo:''
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      selectStatistic(){
        var queryInfo = JSON.stringify({
          userId:this.stockUser_id,
          organizationId:this.organizeInfo
        })
        this.$axios.post("/transaction/ALL||TRANSACTION.do", queryInfo, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code != 100) {
            this.$message.error(response.data.msg);
            this.$router.push('/login')
          } else {
            this.tableData = []
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          }
        })
        .catch((error) => {
          console.log(error)
          this.$message.error('查询股东交易信息异常');
          this.$router.push('/error')
        })

      },
      resetForm(){
        this.stockUser_id = ''
        var transaction_organize = JSON.stringify({
          organizationId: this.organizeInfo
        })
        this.$axios.post('/transaction/QUERY||ORGANIZETRANSACTION.do', transaction_organize, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response)=>{
          if (response.data.code != 100) {
            this.$message.error(response.data.msg);
            this.$router.push('/login')
          } else {
            this.tableData = []
            this.tableData = response.data.data
          }
        }).catch((error)=>{
          this.$message.error(response.data.msg)
        })
      }
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var user = {
        userName: token
      }
      this.$axios.post("/user/QUERY||ORGANIZATION.do", user, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        this.organizeInfo = response.data.data.organization
        var transaction_organize = JSON.stringify({
          organizationId: this.organizeInfo
        })
        this.$axios.post('/transaction/QUERY||ORGANIZETRANSACTION.do', transaction_organize, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response)=>{
          if (response.data.code != 100) {
            this.$message.error(response.data.msg);
            this.$router.push('/login')
          } else {
            this.tableData = []
            this.tableData = response.data.data
          }
        }).catch((error)=>{
          this.$message.error(response.data.msg)
        })
      })
    }
  }
</script>

<style>
  #transaction {
    margin: 30px 0px 0px 10px;
  }
  .search_span{
    display: inline-block;
    float: left;
    margin-top: 10px;
  }
  #transearch{
    margin: 20px 0px 0px 10px;
  }
  #transearch .el-input{
    margin-right: 20px;
    float: left;
    width: 30%;
  }
</style>
