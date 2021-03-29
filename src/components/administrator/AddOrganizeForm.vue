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
        <el-form-item label="组织性质">
          <el-radio-group v-model="form.type">
            <el-radio label="团体"></el-radio>
            <el-radio label="个人"></el-radio>
          </el-radio-group>
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
    name: "addOrganizeForm",
    data() {
      return {
        dialogVisible: false,
        form: {
          id: '',
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
        this.dialogVisible = false
        var organize_name = this.form.name
        var organize_email = this.form.email
        var organize_location = {
          'province': this.value[0],
          'city': this.value[1],
          'town': this.value[2]
        }
        var organize_address = this.form.address
        var organize_type = this.form.type
        this.$axios.get("/organize/ID||ORGANIZATION.do")
          .then((response) => {
            var organize = JSON.stringify({
              organizationId: response.data.data,
              organizeName: organize_name,
              email: organize_email,
              location: "12",
              address: organize_address,
              status: organize_type
            })
            this.$axios.post("/organize/ADD||ORGANIZATION.do", organize, {
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
        this.$axios.get("/organize/QUERY||ORGANIZATION.do")
          .then((response) => {
            this.tableData = []
            var array = response.data.data
            array.forEach((item, i) => {
              this.tableData.push(item)
            })
          })
          .catch((error) => {
            this.$message.error('系统异常');
          })
      }
    }
  };
</script>

<style>
</style>
