<template>
  <div class="addUser">
    <el-dialog title="新建用户" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="学号:" prop="number">
          <el-input v-model="ruleForm.number" placeholder="请输入学号"></el-input>
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
        dialogVisible: false,
        ruleForm: {
          name: '',
          email: '',
          number:'',
          major:'',
          grade:''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入真实姓名',
              trigger: 'blur'
            }
          ],
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
      init(status) {
        this.dialogVisible = status
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
        var user_number = this.ruleForm.number
        var user_major = this.ruleForm.major
        var user_grade = this.ruleForm.grade
        this.$axios.get("/user/ID||USER.do")
          .then((response) => {
            var user = JSON.stringify({
              userId: response.data.data,
              userName: '',
              realName: user_name,
              email: user_email,
              studentNumber: user_number,
              major: user_major,
              grade:user_grade,
              roleType: 100,
              status: '100'
            })
            this.$axios.post("/user/ADD||USER.do", user, {
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              })
              .then((response) => {
                this.$message({
                  message: response.data.msg,
                  type: 'success'
                });
              })
              .catch((error) => {
                this.$message.error('错了哦，这是一条错误消息');
              })
          })
          .catch((error) => {
            console.log(error)
          });
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
      }
    }
  };
</script>

<style>
</style>
