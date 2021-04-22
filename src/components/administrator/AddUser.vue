<template>
  <div class="addUser">
    <el-dialog :title="user_title" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="user_form">
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="学号:" prop="studentNumber">
          <el-input v-model="ruleForm.studentNumber" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="专业:" prop="major">
          <el-input v-model="ruleForm.major" placeholder="请输入专业"></el-input>
        </el-form-item>
        <el-form-item label="班级:" prop="grade">
          <el-input v-model="ruleForm.grade" placeholder="请输入班级"></el-input>
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
    name: "addUser",
    data() {
      return {
        user_title: '',
        userId: '',
        dialogVisible: false,
        ruleForm: {
          name: '',
          email: '',
          studentNumber: '',
          major: '',
          grade: ''
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
          ],
          studentNumber: [{
            required: true,
            message: '请输入学号',
            trigger: 'blur'
          }],
          major: [{
            required: true,
            message: '请输入专业',
            trigger: 'blur'
          }],
          grade: [{
            required: true,
            message: '请输入班级',
            trigger: 'blur'
          }]
        },
        value: [],
        organization: ''
      };
    },
    methods: {
      init(status, row) {
        this.dialogVisible = status
        if (row === '') {
          this.user_title = '新增用户'
          this.operate = 'add'
        } else {
          this.user_title = '修改用户信息'
          this.ruleForm.name = row.realName
          this.ruleForm.email = row.email
          this.ruleForm.studentNumber = row.studentNumber
          this.ruleForm.major = row.major
          this.ruleForm.grade = row.grade
          this.userId = row.userId
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
      handleChange(value) {},
      onSubmit() {
        this.dialogVisible = false
        var user_name = this.ruleForm.name
        var user_email = this.ruleForm.email
        var user_number = this.ruleForm.studentNumber
        var user_major = this.ruleForm.major
        var user_grade = this.ruleForm.grade
        if (this.operate == 'add') {
          this.$axios.get("/user/ID||USER.do")
            .then((response) => {
              var user = JSON.stringify({
                userId: response.data.data,
                userName: response.data.data,
                realName: user_name,
                email: user_email,
                studentNumber: user_number,
                major: user_major,
                grade: user_grade,
                roleType: 104,
                status: '100',
                organization: this.organization
              })
              this.$axios.post("/user/ADD||USER.do", user, {
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
                  } else {
                    this.$message.error(response.data.msg);
                  }
                })
                .catch((error) => {
                  this.$message.error('错了哦，这是一条错误消息');
                })
            })
            .catch((error) => {
              this.$message.error('获取用户id异常')
              this.$router.push('/error')
            });
        }else{
          var user = JSON.stringify({
            userId: this.userId,
            realName: user_name,
            email: user_email,
            studentNumber: user_number,
            major: user_major,
            grade: user_grade
          })
          this.$axios.post("/user/UPDATE||USER.do", user, {
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
                this.ruleForm = []
                var user = {
                  organization: this.$parent.organization,
                  roleType: this.$parent.role
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
                      this.$parent.tableData = []
                      array.forEach((item, i) => {
                        this.$parent.tableData.push(item)
                      })
                    }
                  })
                  .catch((error) => {
                    this.$message.error('查询用户信息异常');
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
    mounted() {
      var token = localStorage.getItem('Authorization')
      var user = {
        userName: token
      }
      this.$axios.post("/user/QUERY||ORGANIZATION.do", user, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
        .then((response) => {
          this.organization = response.data.data.organization
        }).catch((error) => {
          this.$message.error('系统异常');
        })
    }
  };
</script>

<style>
  #user_form .el-form-item:not(:first-child) {
    margin-top: 5px;
  }
</style>
