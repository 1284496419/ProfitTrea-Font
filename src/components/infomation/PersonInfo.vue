<template>
  <div class="personInfo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="学号" prop="studentNumber">
        <el-input v-model.number="ruleForm.studentNumber" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="院系" prop="sdept">
        <el-input v-model.number="ruleForm.sdept" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model.number="ruleForm.major" class="show_info"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="grade">
        <el-input v-model.number="ruleForm.grade" class="show_info"></el-input>
      </el-form-item>
      <!-- <el-form-item class="personinfo_btn">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item> -->
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
          name: '',
          studentNumber: '',
          sdept: '',
          major:'',
          grade:''
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
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var user_information = JSON.stringify({
        userName: token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', user_information, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var user = response.data.data
          this.ruleForm.name = user.realName
          this.ruleForm.studentNumber = user.studentNumber
          this.ruleForm.sdept = user.organization
          this.ruleForm.major = user.major
          this.ruleForm.grade = user.grade
        })
        .catch()
    }
  }
</script>

<style>
  .infoForm {
    width: 60%;
    margin: 40px auto 50px auto;
  }

  .personInfo input {
    width: 85%;
  }

  .personInfo .el-form-item:not(:first-child) {
    padding-top: 30px;
  }

  .infoForm .el-form-item__label {
    text-align: right;
  }

  .infoForm .show_info,
  .el-form-item__error {
    padding-left: 40px;
  }
</style>
