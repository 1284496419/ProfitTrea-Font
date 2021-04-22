<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组织列表" name="first">
        <span class="username-label">组织名称：</span>
        <el-autocomplete v-model="username" :fetch-suggestions="querySearchAsync" class="username-input"
          placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
        <!-- <el-input v-model="username" class="username-input" @input="matchOrganize"></el-input> -->
        <span class="date-label">创建时间：</span>
        <el-date-picker v-model="create_date" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addOrganize">新增组织</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search" @click="selectOrganize">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left" @click="resetForm">重置</el-button>
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
      <!-- <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
      <el-tab-pane label="审核不通过" name="third">审核不通过</el-tab-pane> -->
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
        oranizaMatch: [],
        timeout: null,
        create_date: '',
        tableData: []
      }
    },
    methods: {
      //切换tab导航
      handleClick(tab, event) {
        console.log(tab, event)
      },
      //修改组织信息
      handleEdit(row) {
        this.$refs.setDialogVisible.init(true,row)
      },
      //删除组织信息
      handleDelete(row) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
              } else if (response.data.code == 104 || response.data.code == 102) {
                this.$message.error(response.data.msg);
                this.$router.push('/login')
              } else if (response.data.code == 105) {
                this.$message.info(response.data.msg);
              } else {
                this.$message.error(response.data.msg);
                this.$router.push('/error')
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
              this.$message.error('删除后更新组织信息异常');
              this.$router.push('/error')
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          });
        });
      },
      //切换navigate
      addOrganize() {
        this.$refs.setDialogVisible.init(true,'')
      },
      //模糊匹配搜索组织名
      selectOrganize() {
        var startTime = this.create_date[0]
        var endTime = this.create_date[1]
        var organize_info = JSON.stringify({
          organizeName: this.username,
          createTime: startTime,
          updateTime: endTime
        })
        this.$axios.post("/organize/QUERY||ORGANIZEONE.do", organize_info, {
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
      //模糊匹配
      querySearchAsync(queryString, cb) {
        var organize_info = JSON.stringify({
          organizeName: queryString
        })
        this.$axios.post("/organize/MATCH||ORGANIZENAME.do", organize_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code == 100) {
            var oranizaMatch = response.data.data;
            var results = oranizaMatch;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 3 * Math.random());
          } else if (response.data.code == 104 || response.data.code == 102) {
            this.$message.error(response.data.msg);
            this.$router.push('/login')
          } else if (response.data.code == 105) {
            this.$message.info(response.data.msg);
          } else {
            this.$message.error(response.data.msg);
          }
        }).catch((error) => {
          this.$message.error('信息匹配查询异常');
          this.$router.push('/error')
        })
      },
      //选中模糊搜索结果
      handleSelect(item) {
        this.username = item.value
      },
      //重置
      resetForm() {
        this.username = ''
        this.create_date = ''
        this.$axios.get("/organize/QUERY||ORGANIZATION.do")
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
            console.log(error)
            this.$message.error('请求组织信息异常');
            this.$router.push('/error')
          })
      }
    },
    components: {
      AddOrganizeForm
    },
    mounted() {
      this.$axios.get("/organize/QUERY||ORGANIZATION.do")
        .then((response) => {
          var array = response.data.data
          var code = response.data.code
          var message = response.data.msg
          if (code !== 100) {
            this.$message.error(message);
            this.$router.push('/login')
          } else {
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          }
        })
        .catch((error) => {
          console.log(error)
          this.$message.error('请求组织信息异常');
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
