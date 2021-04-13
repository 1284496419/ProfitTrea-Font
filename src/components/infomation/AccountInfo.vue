<template>
  <div class="accountInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
      <div class="user-img">
        <el-avatar src="" class="u-img"></el-avatar>
      </div>
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off" class="show_info" @blur="updateUserName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model.number="ruleForm.email" class="show_info accountEamil"></el-input>
        <el-button type="primary" @click="updateEmail" plain>更换邮箱</el-button>
      </el-form-item>
      <el-form-item label="账号状态" prop="age">
        <div class="account_status show_info">
          <span>正常</span>
          <el-tooltip class="item" effect="dark" content="账户状态正常的用户才能进行更多的操作" placement="bottom">
            <i class="el-icon-warning"></i>
          </el-tooltip>
        </div>
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <div class="account_create show_info">
          <span>{{this.ruleForm.createTime}}</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userName: '',
          email: '',
          createTime: ''
        },
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          age: [{
            validator: checkAge,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      updateUserName() {
        var userInfo = JSON.stringify({
          userName: this.ruleForm.userName
        })
        this.$axios.post('/user/UPDATE||USERNAME', userInfo, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            this.$message({
              message: response.data.msg,
              type: 'success'
            });
          })
          .catch((error) => {
            this.$message.error('系统异常');
          })
      },
      updateEmail() {
        var userEmail = JSON.stringify({
          emial: this.ruleForm.email
        })
      }
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var account_info = JSON.stringify({
        userName: token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', account_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var account = response.data.data
          this.ruleForm.userName = account.userName
          this.ruleForm.email = account.email
          this.ruleForm.createTime = "2021年4月6日"
        })
        .catch()
    }
  }
</script>

<style>
  .accountInfo input {
    width: 75%;
  }

  .accountEamil {
    width: 50%;
  }

  .user-img {
    margin: 0 auto 30px auto;
    width: 88px;
    height: 88px;
  }

  .accountInfo .el-form-item:not(:first-child) {
    padding-top: 30px;
  }

  .u-img {
    width: 100%;
    height: 100%;
  }
</style>
