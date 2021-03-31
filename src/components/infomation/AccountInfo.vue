<template>
  <div class="accountInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
      <div class="user-img">
        <el-avatar src="" class="u-img"></el-avatar>
      </div>
      <el-form-item label="用户名" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="age">
        <el-input v-model.number="ruleForm.age" class="show_info accountEamil"></el-input>
        <el-button type="primary" plain>更换邮箱</el-button>
      </el-form-item>
      <el-form-item label="账号状态" prop="age">
        <div class="account_status show_info">
          <span>正常</span>
          <el-tooltip class="item" effect="dark" content="账户状态正常的用户才能进行更多的操作" placement="bottom">
            <i class="el-icon-warning"></i>
          </el-tooltip>
        </div>
      </el-form-item>
      <el-form-item label="创建时间" prop="age">
        <div class="account_create show_info">
          <span>2021-03-31 16:19</span>
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
          pass: '',
          checkPass: '',
          age: ''
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
      }
    }
  }
</script>

<style>
  .accountInfo input {
    width: 75%;
  }

  .accountEamil{
    width: 50%;
  }

  .user-img {
    margin: 0 auto 30px auto;
    width: 88px;
    height: 88px;
  }
  .accountInfo .el-form-item:not(:first-child){
    padding-top: 30px;
  }
  .u-img {
    width: 100%;
    height: 100%;
  }
</style>
