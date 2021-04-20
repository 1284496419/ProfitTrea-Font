<template>
  <div>
    <el-tabs class="panel" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理员列表" name="first">
        <span class="username-label">用户名：</span>
        <el-input v-model="username" class="username-input"></el-input>
        <span class="username-label">管理员类型：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <br />
        <el-button class="btn" icon="el-icon-download">导出列表数据</el-button>
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="addManager">新增管理员</el-button>
        <el-button class="btn" type="primary" icon="el-icon-search">查询</el-button>
        <el-button class="btn" icon="el-icon-refresh-left">重置</el-button>
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
        options: [{
          value: '选项1',
          label: '平台管理员'
        }, {
          value: '选项2',
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
        console.log(row)
      },
      managerDelete(row) {
        var manager = JSON.stringify({
          userId: row.userId,
        })
        console.log(manager)
        this.$axios.post("/user/DELETE||MANAGER.do", manager, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            if (response.data.code == 100) {
              this.tableData = []
              this.$axios.get("/user/QUERY||MANAGER.do")
                .then((response) => {
                  var array = response.data.data
                  array.forEach((item, i) => {
                    this.tableData.push(item)
                  })
                })
                .catch((error) => {
                  this.$message.error('系统异常');
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
            this.$message.error('系统异常');
          })
      },
      addManager() {
        this.$refs.setDialogVisible.init(true)
      }
    },
    components: {
      AddManager
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
