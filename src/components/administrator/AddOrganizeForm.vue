<template>
  <div class="addOrganizeForm">
    <el-dialog title="新增组织" :visible.sync="dialogVisible" width="35%" :before-close="handleClose" center>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" id="organize_form">
        <el-form-item label="组织名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入组织名称"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
        </el-form-item>
        <!-- <el-form-item label="所在地区" prop="value">
          <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </el-form-item> -->
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="组织性质" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio label="2">团体</el-radio>
            <el-radio label="1">个人</el-radio>
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
          type: '',
          roleType: '',
          organization:''
        },
        value: [],
        options: [{
          value: '',
          label: '',
          children: [{
            value: '',
            label: ''
          }]
        }],
        rules: {
          name: [{
            required: true,
            message: '请输入组织名',
            trigger: 'blur'
          }],
          email: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          address: [{
              required: true,
              message: '请输入详细地址',
              trigger: 'blur'
            }]
            /* ,
                      value: [{
                        required: true,
                        message: '请选择所在区域',
                        trigger: 'blur'
                      }] */
            ,
          type: [{
            required: true,
            message: '请选择组织类型',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      init(status) {
        this.dialogVisible = status
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleChange(value) {
        console.log(value)
      },
      onSubmit() {
        this.dialogVisible = false
        var organize_name = this.form.name
        var organize_email = this.form.email
        /* var organize_location = {
          'province': this.value[0],
          'city': this.value[1],
          'town': this.value[2]
        } */
        var organize_address = this.form.address
        var organize_type = this.form.type
        this.$axios.get("/organize/ID||ORGANIZATION.do")
          .then((response) => {
            var organize_info = JSON.stringify({
              organizationId: response.data.data,
              organizeName: organize_name,
              email: organize_email,
              address: organize_address,
              status: 100,
              type: organize_type
            })
            console.log('organize_info',organize_info)
            this.form.organization = response.data.data
            this.$axios.post("/organize/ADD||ORGANIZATION.do", organize_info, {
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              })
              .then((response) => {
                console.log(response.data)
                if (response.data.code === 100) {
                  this.$message({
                    message: response.data.msg,
                    type: 'success'
                  });
                  this.$axios.get("/user/ID||MANAGER.do")
                    .then((response) => {
                      if (organize_type === '1') {
                        this.form.roleType = 102
                      } else if (organize_type === '2') {
                        this.form.roleType = 101
                      }
                      var user = JSON.stringify({
                        userId: response.data.data,
                        userName: response.data.data,
                        realName: '',
                        email: organize_email,
                        organization: this.form.organization,
                        studentNumber: '',
                        major: '',
                        grade: '',
                        roleType: this.form.roleType,
                        status: '100'
                      })
                      console.log(user)
                      this.$axios.post("/user/ADD||MANAGER.do", user, {
                          headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                          }
                        })
                        .then((response) => {
                          this.$parent.tableData = []
                          this.$axios.get("/organize/QUERY||ORGANIZATION.do")
                            .then((response) => {
                              var array = response.data.data
                              array.forEach((item, i) => {
                                this.$parent.tableData.push(item)
                              })
                            })
                            .catch((error) => {
                              this.$message.error('系统异常');
                            });
                        })
                        .catch((error) => {
                          this.$message.error('错了哦，这是一条错误消息');
                        })
                    })
                    .catch((error) => {
                      console.log(error)
                    });
                } else {
                  this.$message.error(response.data.msg);
                }
                /* this.$axios.get("/organize/QUERY||ORGANIZATION.do")
                  .then((response) => {
                    this.tableData = []
                    var array = response.data.data
                    array.forEach((item, i) => {
                      this.tableData.push(item)
                    })
                  })
                  .catch((error) => {
                    this.$message.error('系统异常');
                  }); */
              })
              .catch((error) => {
                this.$message.error('错了哦，这是一条错误消息');
              })
          })
          .catch((error) => {
            console.log(error)
          });
      }
    },
    mounted() {
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
        });
      this.$axios.get("/organize/QUERY||CITY.do", {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
        .then((response) => {
          console.log(response.data.data)
          var city = response.data.data
          console.log(city)
          /* let dataValueBatch = city => city.map(({
            id,
            name,
            children
          }) => (children ? {
            value: id,
            label: name,
            children: dataValueBatch(children),
          } : {
            value: id,
            label: name,
          }));
          this.options = dataValueBatch(city); */
          // console.log(this.options)
        })
        .catch((error) => {
          this.$message.error('获取城市信息异常');
        })
    }
  };
</script>

<style>
  #organize_form .el-form-item {
    width: 80%;
  }

  #organize_form .el-form-item:not(:first-child) {
    margin-top: 5px;
  }
</style>
