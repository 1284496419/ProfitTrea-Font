<template>
  <div class="form">
    <el-avatar :size="100" src="https://empty" @error="errorHandler">
      <img src="../../../static/images/head.jpg" width="100%" height="100%"/>
    </el-avatar>
    <!-- label-position设置标签位置 -->
    <el-form :model="ruleForm" status-icon :rules="rules"  label-width="30px" label-position="top" ref="ruleForm">
      <el-form-item label="用户名" prop="username" class="login-label">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="login-label">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item id="button">
        <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      var username = formName.username
      var password = formName.password
      if (username === 'admin' && password === '123456') {
        this.$router.push({ name: 'admin', params: { user: username } })
        console.log(this)
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.form{
  border-radius: 10px;
  background-color: white;
  width: 25%;
  height: 70%;
  margin: auto;
}
.el-avatar{
  display: inline-block;
  margin-top: 40px;
}
.el-form{
  margin-top: 30px;
}
.el-form-item{
  margin: auto;
  width: 70%;
  padding-top: 15px;
}
.el-form-item__label,.login-label{
  text-align: left;
  color: #DC143C;
  font-size: 17px;
  font-weight: bold;
}
#button{
  margin-top: 30px;
}
</style>
