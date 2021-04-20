<template>
  <div class="addOrganizeForm">
    <el-dialog :title="top_title" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" id="organize_form">
        <el-form-item label="组织名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入组织名称"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="组织性质" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio label="2">团体</el-radio>
            <el-radio label="1">个人</el-radio>
          </el-radio-group>
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
    name: "addOrganizeForm",
    data() {
      return {
        dialogVisible: false,
        operate: '',
        form: {
          id: '',
          name: '',
          email: '',
          address: '',
          type: '',
          roleType: '',
          organization: ''
        },
        value: [],
        top_title: '',
        options: [{
          value: '',
          label: '',
          children: [{
            value: '',
            label: ''
          }]
        }],
        rules: {
          name: [{
            required: true,
            message: '请输入组织名',
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
          ],
          address: [{
              required: true,
              message: '请输入详细地址',
              trigger: 'blur'
            }]
            /* ,
                      value: [{
                        required: true,
                        message: '请选择所在区域',
                        trigger: 'blur'
                      }] */
            ,
          type: [{
            required: true,
            message: '请选择组织类型',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      init(status, row) {
        this.dialogVisible = status
        if (row === '') {
          this.top_title = '新增组织'
          this.operate = 'add'
        } else {
          this.top_title = '修改组织信息'
          this.form.name = row.organizeName
          this.form.email = row.email
          this.form.address = row.address
          this.form.type = row.type
          this.form.id = row.organizationId
          this.operate = 'update'
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleChange(value) {
        console.log(value)
      },
      onSubmit() {
        this.dialogVisible = false
        var organize_name = this.form.name
        var organize_email = this.form.email
        var organize_address = this.form.address
        var organize_type = this.form.type
        if (this.operate == 'add') {
          //生成组织id
          this.$axios.get("/organize/ID||ORGANIZATION.do")
            .then((response) => {
              var organize_info = JSON.stringify({
                organizationId: response.data.data,
                organizeName: organize_name,
                email: organize_email,
                address: organize_address,
                status: 100,
                type: organize_type
              })
              console.log('organize_info', organize_info)
              this.form.organization = response.data.data
              this.$axios.post("/organize/ADD||ORGANIZATION.do", organize_info, {
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
                    //更新后发送请求
                    this.$axios.get("/organize/QUERY||ORGANIZATION.do")
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
                          this.form.name = ''
                          this.form.email = ''
                          this.form.address = ''
                          this.form.type = ''
                        }
                      })
                      .catch((error) => {
                        console.log(error)
                        this.$message.error('请求组织信息异常');
                        this.$router.push('/error')
                      })
                    //获取组织管理员id
                    this.$axios.get("/user/ID||USER.do")
                      .then((response) => {
                        if (response.data.code == 100) {
                          if (organize_type === '1') {
                            this.form.roleType = 102
                          } else if (organize_type === '2') {
                            this.form.roleType = 101
                          }
                          var user = JSON.stringify({
                            userId: response.data.data,
                            userName: response.data.data,
                            realName: '',
                            email: organize_email,
                            organization: this.form.organization,
                            studentNumber: '',
                            major: '',
                            grade: '',
                            roleType: this.form.roleType,
                            status: '100'
                          })
                          console.log(user)
                          this.$axios.post("/user/ADD||MANAGER.do", user, {
                              headers: {
                                'Content-Type': 'application/json;charset=UTF-8'
                              }
                            })
                            .then((response) => {
                              if (response.data.code == 100) {
                                this.$axios.get("/organize/QUERY||ORGANIZATION.do")
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
                                    console.log(error)
                                    this.$message.error('请求组织信息异常');
                                    this.$router.push('/error')
                                  })
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
                              console.log(error)
                              this.$message.error('添加组织管理员异常');
                              this.$router.push('/error')
                            })
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
                        this.$message.error('生成组织管理员id异常');
                        this.$router.push('/error')
                      });
                  } else if (verify_code === 103) {
                    this.$message.error(response.data.msg);
                  } else {
                    this.$message.error(response.data.msg);
                    this.$router.push('/login')
                  }
                })
                .catch((error) => {
                  this.$message.error('添加组织异常');
                  this.$router.push('/error')
                })
            })
            .catch((error) => {
              this.$message.error('生成组织id异常')
              this.$router.push('/error')
            });
        } else {
          var organize_info = JSON.stringify({
            organizationId: this.form.id,
            organizeName: organize_name,
            email: organize_email,
            address: organize_address,
            status: 100,
            type: organize_type
          })
          console.log('xiugai',organize_info)
          this.$axios.post("/organize/UPDATE||ORGANIZATION.do", organize_info, {
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
                this.$axios.get("/organize/QUERY||ORGANIZATION.do")
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
                      this.form.name = ''
                      this.form.email = ''
                      this.form.address = ''
                      this.form.type = ''
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                    this.$message.error('请求组织信息异常');
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
    },
    mounted() {}
  };
</script>

<style>
  #organize_form .el-form-item {
    width: 80%;
  }

  #organize_form .el-form-item:not(:first-child) {
    margin-top: 5px;
  }
</style>
