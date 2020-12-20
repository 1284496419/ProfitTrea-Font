<template>
  <div id="login">
    <!-- 登录页背景图片  -->
    <h1><a @click="toIndex">ProfitTrea</a></h1>
    <div class="login-bord">
      <div class="head">
        <el-avatar :size="100" src="https://empty" @error="errorHandler">
          <img src="../../static/images/head.jpg" width="100%" height="100%"/>
        </el-avatar>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules"  label-width="30px" label-position="top" ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-img">
      <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" />
    </div>
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
      alert('submit')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    errorHandler () {
      return true
    },
    toIndex () {
      console.log('首页')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  h1{
    text-align: center;
    color: #DC143C;
    font-size: 45px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 50px;
    /* margin: 10px 0 0 ; */
  }
  a{
    text-decoration: none;
    color: #DC143C;
    cursor: pointer;
  }
  .login-img{
    width: 100%;
    height: 50rem;
    /* 控制禁止滚动 */
    overflow: hidden;
    z-index: 100;
  }
  .login-img img{
    width: 100%;
    height: auto;
  }
  .login-bord{
    text-align: center;
    position: absolute;
    width: 400px;
    height: 500px;
    background-color: white;
    z-index: 101;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 87%;
    border-radius: 10px;
  }
  .head{
    margin-top: 35px;
  }
  .el-form{
    text-align: center;
    margin-top: 30px;
  }
  .el-form-item{
    margin-bottom: 5px;
  }
  .el-form-item__label{
    color: #DC143C;
    font-size: 17px;
    font-weight: bold;
  }
  .el-input{
    width: 80%;
  }
  /*
    不允许空行否则会报错
    Trailing spaces not allowed no-trailing-spaces
  */
</style>
