<template>
  <div class="addManager">
    <el-dialog title="新增管理员" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
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
        organization:'',
        type:'',
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
            if(response.data.data.roleType === 101){
              this.type = 103
            }else if(response.data.data.type === 102){
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
                  organization:this.organization,
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
          }).catch((error) => {
            this.$message.error('系统异常');
          })

        /* this.$axios.get("/organize/QUERY||ORGANIZATION.do")
          .then((response) => {
            this.tableData = []
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          })
          .catch((error) => {
            this.$message.error('系统异常');
          }) */
      }
    }
  };
</script>

<style>
</style>
