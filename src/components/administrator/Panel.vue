<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组织列表" name="first">
        <span class="username-label">组织名称：</span>
        <el-input v-model="username" class="username-input"></el-input>
        <span class="date-label">创建时间：</span>
        <el-date-picker v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="To"
          start-placeholder="Start date" end-placeholder="End date" align="right">
        </el-date-picker>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addOrganize">新增组织</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left">重置</el-button>
        <el-table :data="tableData" border style="width: 90%">
          <el-table-column fixed prop="organizationId" label="账号" width="150">
          </el-table-column>
          <el-table-column prop="organizeName" label="组织名" width="120">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="120">
          </el-table-column>
          <!-- <el-table-column prop="location" label="市区" width="120">
          </el-table-column> -->
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
      <el-tab-pane label="审核不通过" name="third">审核不通过</el-tab-pane>
    </el-tabs>
    <AddOrganizeForm ref="setDialogVisible"></AddOrganizeForm>
  </div>
</template>

<script>
  import AddOrganizeForm from '@/components/administrator/AddOrganizeForm.vue'
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
      handleEdit(row) {
        console.log(row)
      },
      handleDelete(row) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var token = localStorage.getItem('Authorization')
          var verify_token = {
            userName: token
          }
          this.$axios.post("/logout/VERIFY.do", verify_token, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            var verify_code = response.data.code
            if (verify_code === 100) {
              var organize = JSON.stringify({
                organizationId: row.organizationId,
              })
              this.$axios.post("/organize/DELETE||ORGANIZATION.do", organize, {
                  headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
                })
                .then((response) => {
                  if (response.data.code == 100) {
                    this.tableData = []
                    this.$axios.get("/organize/QUERY||ORGANIZATION.do")
                      .then((response) => {
                        this.tableData = []
                        var array = response.data.data
                        array.forEach((item, i) => {
                          this.tableData.push(item)
                        })
                      })
                      .catch((error) => {
                        this.$message.error('查询组织异常');
                        this.$router.push('/error')
                      })
                    this.$message({
                      message: response.data.msg,
                      type: 'success'
                    });
                  } else {
                    this.$message.error(response.data.msg);
                  }
                })
                .catch((error) => {
                  this.$message.error('删除组织异常');
                  this.$router.push('/error')
                })
              this.$axios.get("/organize/QUERY||ORGANIZATION.do")
                .then((response) => {
                  this.tableData = []
                  var array = response.data.data
                  array.forEach((item, i) => {
                    this.tableData.push(item)
                  })
                })
                .catch((error) => {
                  this.$message.error('系统异常');
                })
            } else if (verify_code === 104) {
              this.$message.error(response.data.msg)
            } else if (verify_code === 102) {
              this.$message.error(response.data.msg)
              this.$router.push('/login')
            }
          }).catch((error) => {
            console.log(error)
            this.$message.error('校验token异常')
            this.$router.push('/error')
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          });
        });
      },
      addOrganize() {
        this.$refs.setDialogVisible.init(true)
      },
      updateOrganize(data){
        console.log(data)
        this.$axios.get("/organize/QUERY||ORGANIZATION.do")
          .then((response) => {
            this.tableData = []
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          })
          .catch((error) => {
            this.$message.error('更新组织信息异常');
          })
      }
    },
    components: {
      AddOrganizeForm
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var verify_token = {
        userName: token
      }
      this.$axios.post("/logout/VERIFY.do", verify_token, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        var verify_code = response.data.code
        if (verify_code === 100) {
          this.$axios.get("/organize/QUERY||ORGANIZATION.do")
            .then((response) => {
              var array = response.data.data
              array.forEach((item, i) => {
                this.tableData.push(item)
              })
            })
            .catch((error) => {
              this.$message.error('组织数据异常');
            })
        } else if (verify_code === 104) {
          this.$message.error(response.data.msg)
        } else if (verify_code === 102) {
          console.log('执行')
          this.$message.error(response.data.msg)
          this.$router.push('/login')
        }
      }).catch((error) => {
        console.log(error)
        this.$message.error('校验token异常')
        this.$router.push('/error')
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
