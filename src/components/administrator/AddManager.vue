<template>
  <div class="addManager">
    <el-dialog :title="manager_title" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "addManager",
    data() {
      return {
        dialogVisible: false,
        organization: '',
        type: '',
        manager_title: '',
        userId: '',
        ruleForm: {
          name: '',
          email: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入真实姓名',
            trigger: 'blur'
          }],
          email: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ]
        },
        value: []
      };
    },
    methods: {
      init(status, row) {
        console.log(row)
        this.dialogVisible = status
        if (row === '') {
          this.manager_title = '新增管理员'
          this.operate = 'add'
        } else {
          this.operate = 'update'
          this.manager_title = '修改管理员信息'
          this.ruleForm.name = row.realName
          this.ruleForm.email = row.email
          this.userId = row.userId
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleChange(value) {},
      onSubmit() {
        this.dialogVisible = false
        if (this.operate == 'add') {
          var roleType = this.$parent.role
          if (roleType === 101) {
            this.type = 103
          } else if (roleType === 102) {
            this.type = 104
          }
          var user_name = this.ruleForm.name
          var user_email = this.ruleForm.email
          this.$axios.get("/user/ID||USER.do")
            .then((response) => {
              var manager = JSON.stringify({
                userId: response.data.data,
                realName: user_name,
                email: user_email,
                userName: response.data.data,
                realName: user_name,
                studentNumber: '',
                organization: this.$parent.organization,
                major: '',
                grade: '',
                roleType: this.type,
                status: '100'
              })
              this.$axios.post("/user/ADD||MANAGER.do", manager, {
                  headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
                })
                .then((response) => {
                  if (response.data.code !== 100) {
                    this.$message({
                      message: response.data.msg,
                      type: 'success'
                    });
                    var user = {
                      organization: this.$parent.organization,
                      roleType: this.$parent.role
                    }
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
                          this.$parent.tableData = []
                          array.forEach((item, i) => {
                            this.$parent.tableData.push(item)
                          })
                        }
                      })
                      .catch((error) => {
                        this.$message.error('查询管理员信息异常');
                        this.$router.push('/error')
                      })
                  }else{
                    this.$message.error(response.data.msg);
                    this.$router.push('/login')
                  }
                }).catch((error) => {
                  this.$message.error('添加用户异常');
                  this.$router.push('/error')
                })
            })
            .catch((error) => {
              this.$message.error('获取管理员id异常');
            })

        } else {
          var manager = JSON.stringify({
            userId: this.userId,
            realName: this.ruleForm.name,
            email: this.ruleForm.email,
          })
          this.$axios.post("/user/UPDATE||MANAGER.do", manager, {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            })
            .then((response) => {
              var verify_code = response.data.code
              if (verify_code === 100) {
                this.$message({
                  message: response.data.msg,
                  type: 'success'
                });
                this.ruleForm.email = ''
                this.ruleForm.name = ''
                var user = {
                  organization: this.$parent.organization,
                  roleType: this.$parent.role
                }
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
                      this.$parent.tableData = []
                      array.forEach((item, i) => {
                        this.$parent.tableData.push(item)
                      })
                    }
                  })
                  .catch((error) => {
                    this.$message.error('查询管理员信息异常');
                    this.$router.push('/error')
                  })
              } else if (verify_code === 103) {
                this.$message.error(response.data.msg);
              } else {
                this.$message.error(response.data.msg);
                this.$router.push('/login')
              }
            })
        }
      }
    }
  };
</script>

<style>
</style>
