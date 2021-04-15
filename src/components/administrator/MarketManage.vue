<template>
  <div>
    <div class="info-container">
      <div class="user-info">
        <el-form status-icon label-width="100px" class="infoForm">
          <div class="timer">
            <span>上午开市时间:</span>
            <el-time-select placeholder="起始时间" v-model="morningStartTime" :picker-options="{
                    start: '08:00',
                    step: '00:15',
                    end: '12:30'
                  }">
            </el-time-select>
            <span class="time-title">上午收市时间:</span>
            <!-- <el-input v-model.number="ruleForm.morningEnd" class="show_info" clearable></el-input> -->
            <el-time-select placeholder="结束时间" v-model="morningEndTime" :picker-options="{
                    start: '08:00',
                    step: '00:15',
                    end: '12:30',
                    minTime: morningStartTime
                  }">
            </el-time-select>
          </div>

          <div class="timer">
            <span>下午开市时间:</span>
            <el-time-select placeholder="起始时间" v-model="afternoonStartTime" :picker-options="{
                    start: '13:00',
                    step: '00:15',
                    end: '18:00'
                  }">
            </el-time-select>
            <span class="time-title">下午收市时间:</span>
            <!-- <el-input v-model.number="ruleForm.morningEnd" class="show_info" clearable></el-input> -->
            <el-time-select placeholder="结束时间" v-model="afternoonEndTime" :picker-options="{
                    start: '13:00',
                    step: '00:15',
                    end: '18:00',
                    minTime: afternoonStartTime
                  }">
            </el-time-select>
          </div>


          <el-form-item id="fundSend">
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var validateTime = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      var validateTime2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
      };
      var validateTime3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
      };
      var validateTime4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
      };
      return {
        morningStartTime: '',
        morningEndTime: '',
        afternoonStartTime: '',
        afternoonEndTime: '',
        rules: {
          morningStart: [{
            validator: validateTime,
            trigger: 'blur'
          }],
          morningEnd: [{
            validator: validateTime2,
            trigger: 'blur'
          }],
          afternoonStart: [{
            validator: validateTime3,
            trigger: 'blur'
          }],
          afternoonEnd: [{
            validator: validateTime4,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm() {
        var token = localStorage.getItem('Authorization')
        var user_information = JSON.stringify({
          userName: token
        })
        this.$axios.post('/user/QUERY||ORGANIZATION.do', user_information, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            var organization = response.data.data.organization
            this.$axios.post('/account/CHANGE||TIME.do', {
              organize: organization,
              startMorning: this.morningStartTime,
              endMorning: this.morningEndTime,
              startAfternoon: this.afternoonStartTime,
              endAfternoon: this.afternoonEndTime
            }, {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then((response)=>{
              this.$message.success(response.data.msg)
            }).catch((error)=>{
              this.$message.error(response.data.msg)
            })
          })
          .catch()
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
        }).then((response) => {})
        .catch()
    }
  }
</script>

<style>
  .timer {
    margin-top: 20px;
  }

  .time-title {
    margin-left: 20px;
  }

  #fundSend {
    margin: 20px 0px 0px 150px;
  }

  #fundSend .el-form-item__content {
    display: inline-block;
  }
</style>
