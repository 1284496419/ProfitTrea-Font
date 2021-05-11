<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="userName" label="账号">
      </el-table-column>
      <el-table-column prop="realName" label="姓名">
      </el-table-column>
      <el-table-column prop="total_fund" label="总资产">
        <template slot-scope="scope">
          <el-input v-model="scope.row.total_fund" readonly></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="total_fund" label="发放资产">
        <template slot-scope="scope">
          <el-input v-model="sendFundNumber" placeholder="请输入发放资产金额"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="total_fund" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="primary" round @click="sendFund(scope.row)">发放资产</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        sendFundNumber: '',
        queryInfo: {},
        userName:''
      }
    },
    methods: {
      sendFund(row) {
        var send_fund = JSON.stringify({
          userId: row.userName,
          usefulFund: parseFloat(this.sendFundNumber)
        })
        this.$confirm('此操作将给该用户发放资产, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(this.sendFundNumber == ''){
            this.$message({
              type: 'info',
              message: '取消发放资产'
            });
          }else{
            this.$axios.post("/transaction/SEND||FUND.do", send_fund, {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then((response) => {
            })
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消发放资产'
          });
        });
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
        this.queryInfo = response.data.data
        var fund_organize = response.data.data.organization
        var fund_info = JSON.stringify({
          organizationId: fund_organize
        })
        this.$axios.post('/transaction/QUERY||ORGANIZATIONSHARE.do', fund_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var map = response.data.data
          var users = map.users
          var shares = map.share

          for (var j = 0, len = users.length; j < len; j++) {
            this.tableData.push({
              userName: users[j].userName,
              realName: users[j].realName,
              total_fund: shares[j].totalFund
            })
          }

        })
      })
    }
  }
</script>

<style>
</style>
