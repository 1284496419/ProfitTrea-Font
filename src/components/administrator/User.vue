<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户列表" name="first">
        <span class="username-label">用户名：</span>
        <!-- <el-input v-model="username" class="username-input"></el-input> -->
        <el-autocomplete v-model="username" :fetch-suggestions="querySearchAsync" class="username-input"
          placeholder="请输入用户名" @select="handleSelect"></el-autocomplete>
        <span class="date-label">创建时间：</span>
        <el-date-picker v-model="create_date" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addOrganize">创建用户</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search" @click="selectUser">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left" @click="resetSelect">重置</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="userName" label="用户名" width="120">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="200">
          </el-table-column>
          <el-table-column prop="realName" label="真实姓名" width="120">
          </el-table-column>
          <el-table-column prop="studentNumber" label="学号" width="300">
          </el-table-column>
          <el-table-column prop="major" label="专业" width="300">
          </el-table-column>
          <el-table-column prop="grade" label="班级" width="120">
          </el-table-column>
          <el-table-column prop="organization" label="所属组织" width="300">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="userEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="userDelete(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
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
        organization: '',
        activeName: 'first',
        username: '',
        timeout: null,
        create_date: '',
        tableData: []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      handleSelect(item) {
        this.username = item.value
      },
      resetSelect() {
        this.username = ''
        this.create_date = ''
        var user = {
          organization: this.organization,
          roleType: 104
        }
        this.$axios.post("/user/QUERY||USER.do", user, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            var array = response.data.data
            var code = response.data.code
            var message = response.data.msg
            if (code !== 100) {
              this.$message.error(message);
              this.$router.push('/login')
            } else {
              this.tableData = []
              array.forEach((item, i) => {
                this.tableData.push(item)
              })
            }
          })
          .catch((error) => {
            this.$message.error('查询用户信息异常');
            this.$router.push('/error')
          })
      },
      userEdit(row) {
        console.log(row)
        this.$refs.setDialogVisible.init(true, row)
      },
      userDelete(row) {
        console.log(row)
        var user = JSON.stringify({
          userId: row.userId,
        })
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post("/user/DELETE||MANAGER.do", user, {
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
                var user = JSON.stringify({
                  organization: this.organization
                })
                this.$axios.post("/user/QUERY||USER.do", user, {
                    headers: {
                      'Content-Type': 'application/json;charset=UTF-8'
                    }
                  })
                  .then((response) => {
                    var array = response.data.data
                    var code = response.data.code
                    var message = response.data.msg
                    if (code !== 100) {
                      this.$message.error(message);
                      this.$router.push('/login')
                    } else {
                      console.log('dafdfa')
                      this.tableData = []
                      array.forEach((item, i) => {
                        this.tableData.push(item)
                      })
                    }
                  })
                  .catch((error) => {
                    this.$message.error('查询用户信息异常');
                    this.$router.push('/error')
                  })
              } else {
                this.$message.error(response.data.msg);
              }
            })
            .catch((error) => {
              this.$message.error('删除用户信息异常');
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
        this.$refs.setDialogVisible.init(true, '')
      },
      selectUser() {
        var startTime = this.create_date[0]
        var endTime = this.create_date[1]
        var manager_info = JSON.stringify({
          userName: this.username,
          organization: this.organization,
          createTime: startTime,
          updateTime: endTime
        })
        console.log(manager_info)
        this.$axios.post("/user/QUERY||MANAGERONE.do", manager_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code == 100) {
            this.tableData = []
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          } else if (response.data.code == 104 || response.data.code == 102) {
            this.$message.error(response.data.msg);
            this.$router.push('/login')
          } else if (response.data.code == 105) {
            this.$message.info(response.data.msg);
          } else {
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          this.$message.error('选中用户名后更新用户信息异常');
          this.$router.push('/error')
        })
      },
      querySearchAsync(queryString, cb) {
        var organize_info = JSON.stringify({
          userName: queryString,
          organization: this.organization,
          roleType: 103
        })
        this.$axios.post("/user/MATCH||MANAGERNAME.do", organize_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var oranizaMatch = response.data.data;
          var results = oranizaMatch;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 3 * Math.random());
        }).catch((error) => {
          console.log(error)
        })
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
        if(response.data.code != 100){
          this.$message.error(response.data.msg);
          this.$router.push('/login')
        }else{
          var organize = response.data.data.organization
          this.organization = organize
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
              var code = response.data.code
              var message = response.data.msg
              if (code !== 100) {
                this.$message.error(message);
                this.$router.push('/login')
              } else {
                this.tableData = []
                array.forEach((item, i) => {
                  this.tableData.push(item)
                })
              }
            })
            .catch((error) => {
              this.$message.error('查询用户信息异常');
              this.$router.push('/error')
            })
        }
      }).catch((error) => {
        this.$message.error('查询组织信息异常');
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
