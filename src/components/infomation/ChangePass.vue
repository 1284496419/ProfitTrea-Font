<template>
  <div class="personInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
      <el-form-item label="旧密码" prop="oldPass">
        <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="show_info"></el-input>
      </el-form-item>
      <el-form-item id="changePass">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          oldPass: ''
        },
        rules: {
          pass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass3,
            trigger: 'blur'
          }],
          oldPass: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          校验数据
          if (valid) {
            var token = localStorage.getItem('Authorization')
            var user = {
              userName: token
            }
            this.$axios.post("/user/QUERY||ORGANIZATION.do", user, {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then((response) => {
              //获取登录账号信息
              var user_information = response.data.data
              var oldPass = this.ruleForm.oldPass
              var newPass = this.ruleForm.pass
              var checkPass = this.ruleForm.checkPass
              this.$axios.post('/account/CHANGE||PASS.do', {
                oldPass: oldPass,
                newPass: newPass,
                checkPass: checkPass,
                user: user_information
              }, {
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }).then((response) => {
                var valid = response.data.code
                //修改密码成功后重新登录
                if (valid === 100) {
                  this.$router.push({
                    name: 'login'
                  })
                }else{
                  this.$router.push({
                    name:'error'
                  })
                }
              })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  #changePass {
    margin-left: 220px;
  }

  #changePass .el-form-item__content {
    display: inline-block;
  }
</style>
