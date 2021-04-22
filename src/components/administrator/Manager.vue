<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理员列表" name="first">
        <span class="username-label">用户名：</span>
        <!-- <el-input v-model="username" class="username-input"></el-input> -->
        <el-autocomplete v-model="username" :fetch-suggestions="querySearchAsync" class="username-input"
          placeholder="请输入用户名" @select="handleSelect"></el-autocomplete>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addManager">新增管理员</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search" @click="selectManager">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left" @click="resetForm">重置</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="userId" label="账号" width="150">
          </el-table-column>
          <el-table-column prop="userName" label="用户名" width="120">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="120">
          </el-table-column>
          <el-table-column prop="organization" label="所属组织" width="120">
          </el-table-column>
          <el-table-column prop="realName" label="姓名" width="300">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="managerEdit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="managerDelete(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <AddManager ref="setDialogVisible"></AddManager>
  </div>
</template>

<script>
  import AddManager from '@/components/administrator/AddManager.vue'
  export default {
    name: 'panel',
    data() {
      return {
        activeName: 'first',
        username: '',
        organization:'',
        role:'',
        options: [{
          value: '1',
          label: '平台管理员'
        }, {
          value: '2',
          label: '组织管理员'
        }],
        value: '',
        tableData: []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      managerEdit(row) {
        this.$refs.setDialogVisible.init(true,row)
      },
      managerDelete(row) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var manager = JSON.stringify({
            userId: row.userId,
          })
          this.$axios.post("/user/DELETE||MANAGER.do", manager, {
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
                var user = {
                  userName: this.access_token
                }
                this.$axios.post("/user/QUERY||ORGANIZATION.do", user, {
                  headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
                }).then((response) => {
                  var organize = response.data.data.organization
                  var role_type = response.data.data.roleType
                  var user = {
                    organization: organize,
                    roleType: role_type
                  }
                  console.log(organize)
                  this.$axios.post("/user/QUERY||MANAGER.do", user, {
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
                      this.$message.error('查询管理员信息异常');
                      this.$router.push('/error')
                    })
                }).catch((error) => {
                  this.$message.error('查询组织id异常');
                  this.$router.push('/error')
                })
              } else {
                this.$message.error(response.data.msg);
                this.$router.push('/login')
              }
            })
            .catch((error) => {
              this.$message.error('系统异常');
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          });
        });
      },
      addManager() {
        this.$refs.setDialogVisible.init(true,'')
      },
      handleSelect(item){
        this.username = item.value
      },
      resetForm(){
        this.username = ''
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
          this.organization = organize
          var role_type = response.data.data.roleType
          var user = {
            organization: organize,
            roleType: role_type
          }
          console.log(organize)
          this.$axios.post("/user/QUERY||MANAGER.do", user, {
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
                  this.organization = organize
                  var role_type = response.data.data.roleType
                  var user = {
                    organization: organize,
                    roleType: role_type
                  }
                  console.log(organize)
                  this.$axios.post("/user/QUERY||MANAGER.do", user, {
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
                      this.$message.error('查询管理员信息异常');
                      this.$router.push('/error')
                    })
                }).catch((error) => {
                  this.$message.error('查询组织id异常');
                  this.$router.push('/error')
                })
              }
            })
            .catch((error) => {
              this.$message.error('查询管理员信息异常');
              this.$router.push('/error')
            })
        }).catch((error) => {
          this.$message.error('查询组织id异常');
          this.$router.push('/error')
        })

      },
      selectManager(){
        console.log(this.username)
        var manager_info = JSON.stringify({
          userName: this.username
        })
        this.$axios.post("/user/QUERY||MANAGERONE.do",manager_info,{
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
          this.$message.error('选中组织名后更新组织信息异常');
          this.$router.push('/error')
        })

      },
      querySearchAsync(queryString, cb) {
        var organize_info = JSON.stringify({
          userName: queryString,
          organization:this.organization,
          roleType:101
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
      AddManager
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      this.access_token = token
      var user = {
        userName: token
      }
      this.$axios.post("/user/QUERY||ORGANIZATION.do", user, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        var organize = response.data.data.organization
        this.organization = organize
        var role_type = response.data.data.roleType
        this.role = role_type
        var user = {
          organization: organize,
          roleType: role_type
        }
        console.log(organize)
        this.$axios.post("/user/QUERY||MANAGER.do", user, {
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
            this.$message.error('查询管理员信息异常');
            this.$router.push('/error')
          })
      }).catch((error) => {
        this.$message.error('查询组织id异常');
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
