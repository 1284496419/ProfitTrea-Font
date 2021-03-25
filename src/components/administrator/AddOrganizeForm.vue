<template>
  <div class="addOrganizeForm">
    <el-dialog title="新增组织" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组织名称">
          <el-input v-model="form.name" placeholder="请输入组织名称"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="组织性质">
          <el-radio-group v-model="form.type">
            <el-radio label="团体"></el-radio>
            <el-radio label="个人"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item> -->
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
    name: "addOrganizeForm",
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          email: '',
          address: '',
          // delivery: false,
          type: ''
          // desc: ''
        },
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }]
          }]
        }]
      };
    },
    methods: {
      init(status) {
        this.dialogVisible = status
      },
      muted() {

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
        var organize_name = this.form.name
        var organize_email = this.form.email
        var organize_location = {
          'province': this.value[0],
          'city': this.value[1],
          'town': this.value[2]
        }
        var organize_address = this.form.address
        var organize_type = this.form.type
        var organize = JSON.stringify({
          organizeName: organize_name,
          organizeEmail: organize_email,
          organizeLocation: organize_location,
          organizeAddress: organize_address,
          organizeType: organize_type
        })
        this.dialogVisible = false
        this.$axios.post("/organize/ADD||ORGANIZE.do", organize, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then((response) => {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
            /* var username = response.data.data
            this.$router.push({ name: 'admin', params: { user: username } }) */
          })
          .catch((error) => {
            this.$message.error('错了哦，这是一条错误消息');
            /* this.$router.push({
              name: 'error'
            }) */
          })
        // console.log(this.form);
        // console.log(this.value);
      }
    }
  };
</script>

<style>
</style>
