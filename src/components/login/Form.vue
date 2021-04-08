<template>
  <div class="form">
    <el-avatar :size="100" src="https://empty" @error="errorHandler" class="login-img">
      <img src="../../../static/images/head.jpg" width="100%" height="100%" />
    </el-avatar>
    <!-- label-position设置标签位置 -->
    <el-form :model="ruleForm" status-icon :rules="rules" label-width="30px" label-position="top" ref="ruleForm"
      class="login_form">
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
  // import axios from 'axios'
  import {
    mapMutations
  } from "vuex";
  export default {
    data() {
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
          password: '',
          userToken: '',
        },
        rules: {
          username: [{
            validator: validateUser,
            trigger: 'blur'
          }],
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      ...mapMutations(['changeLogin']),
      submitForm(formName) {
        var user_name = formName.username
        var pass = formName.password
        console.log(user_name)
        /*
          parse和stringify方法的区别
          parse将URL解析成对象的形式
          stringify将对象 序列化成URL的形式以&进行拼接
        */
        var info = JSON.stringify({
          userName: user_name,
          password: pass
        })
        this.$axios.post("/login", info, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            if (response.data.data !== null) {
              this.userToken = response.data.data.token
              this.changeLogin({
                Authorization: this.userToken
              });
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              var username = response.data.data.username
              var url = response.data.data.url
              this.$router.push({
                name: url,
                params: {
                  user: username
                }
              })
            } else {
              this.$message.error('用户名或密码错误');
              this.$router.push({
                name: 'login'
              })
            }

          })
          .catch((error) => {
            console.log(error)
            this.$router.push({
              name: 'error'
            })
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      errorHandler() {
        console.log("error")
      }
    }
  }
</script>

<style>
  .form {
    border-radius: 10px;
    background-color: white;
    width: 25%;
    height: 70%;
    margin: auto;
  }

  .login-img {
    display: inline-block;
    margin-top: 40px;
  }

  .el-form {
    margin-top: 30px;
  }

  .el-form-item {
    margin: auto;
    width: 70%;
    padding-top: 15px;
  }

  .el-form-item__label,
  .login-label {
    text-align: left;
    color: #DC143C;
    font-size: 17px;
    font-weight: bold;
  }

  .login_form .el-form-item__error {
    padding-left: 0px;
  }

  #button {
    margin-top: 30px;
  }
</style>
