<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户列表" name="first">
        <span class="username-label">用户名：</span>
        <el-input v-model="username" class="username-input"></el-input>
        <span class="date-label">创建时间：</span>
        <el-date-picker v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="To"
          start-placeholder="Start date" end-placeholder="End date" align="right">
        </el-date-picker>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addOrganize">创建用户</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left">重置</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="userId" label="账号" width="150">
          </el-table-column>
          <el-table-column prop="userName" label="用户名" width="120">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="120">
          </el-table-column>
          <el-table-column prop="realName" label="真实姓名" width="120">
          </el-table-column>
          <el-table-column prop="studentNumber" label="学号" width="300">
          </el-table-column>
          <el-table-column prop="major" label="专业" width="300">
          </el-table-column>
          <el-table-column prop="organization" label="所属组织" width="300">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="userEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="userDelete(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
      <el-tab-pane label="审核不通过" name="third">审核不通过</el-tab-pane>
    </el-tabs>
    <AddUser ref="setDialogVisible"></AddUser>
  </div>
</template>

<script>
  import AddUser from '@/components/administrator/AddUser.vue'
  export default {
    name: 'panel',
    data() {
      return {
        activeName: 'first',
        username: '',
        pickerOptions: {
          shortcuts: [{
              text: 'Last week',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: 'Last month',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: 'Last 3 months',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                picker.$emit('pick', [start, end])
              }
            }
          ]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
        tableData: []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      userEdit(row) {
        console.log(row)
      },
      userDelete(row) {
        console.log(row)
        var user = JSON.stringify({
          userId: row.userId,
        })
        console.log(user)
        this.$axios.post("/user/DELETE||USER.do", user, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            if (response.data.code == 100) {
              this.$message({
                message: response.data.msg,
                type: 'success'
              });
              this.tableData = []
              this.$axios.get("/user/QUERY||USER.do")
                .then((response) => {
                  var array = response.data.data
                  array.forEach((item, i) => {
                    this.tableData.push(item)
                  })
                })
                .catch((error) => {
                  this.$message.error('系统异常');
                })
            } else {
              this.$message.error(response.data.msg);
            }
          })
          .catch((error) => {
            this.$message.error('系统异常');
          })
      },
      addOrganize() {
        this.$refs.setDialogVisible.init(true)
      }
    },
    components: {
      AddUser
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
        var organize = response.data.data.organization
        var user = {
          organization: organize,
          roleType: 104
        }
        console.log(organize)
        this.$axios.post("/user/QUERY||USER.do", user, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          })
          .catch((error) => {
            this.$message.error('系统异常');
          })
      }).catch((error) => {
        this.$message.error('系统异常');
      })
    }
  }
</script>

<style>
  .panel {
    width: 100%;
    margin-right: 180px;
  }

  .username-input {
    margin-right: 50px;
    width: 30%;
  }

  .btn {
    margin: 30px 20px 0 0;
  }

  .el-table {
    margin-top: 30px;
  }
</style>
