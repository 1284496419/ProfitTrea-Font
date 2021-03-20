<template>
  <div class="manager">
    <span class="username-label">用户名：</span>
    <el-input v-model="username" class="m-username" placeholder="请输入用户账号/名称/手机"></el-input>
    <span class="role-label">角色查询：</span>
    <el-select v-model="value" placeholder="角色">
      <el-option class="m-role" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <span class="status-label">状态：</span>
    <el-radio-group v-model="radio" size="medium">
      <el-radio-button label="全部"></el-radio-button>
      <el-radio-button label="启用"></el-radio-button>
      <el-radio-button label="禁用"></el-radio-button>
    </el-radio-group>
    <br />
    <el-button class="m-query" type="primary" icon="el-icon-search">查询</el-button>
    <el-button class="m-reset" icon="el-icon-refresh-left">重置</el-button>
    <div class="derive-and-build">
      <el-button class="m-derive" icon="el-icon-download">导出列表数据</el-button>
      <el-button class="m-build" type="primary" icon="el-icon-plus" @click="setDialog">新建管理员</el-button>
    </div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 90%">
      <el-table-column type="index" width="140" label="序号">
      </el-table-column>
      <el-table-column property="account" label="账号" width="140">
      </el-table-column>
      <el-table-column property="role" label="角色" width="140">
      </el-table-column>
      <el-table-column property="name" label="姓名">
      </el-table-column>
      <el-table-column property="phonenumber" label="手机号码">
      </el-table-column>
      <el-table-column property="createtime" label="创建时间">
      </el-table-column>
      <el-table-column property="operate" label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import AddOrganizeForm from '@/components/administrator/AddOrganizeForm.vue'
  export default {
    name: 'manager',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '平台管理员'
        }, {
          value: '选项2',
          label: '组织管理员'
        }],
        value: '',
        radio: '全部'
      }
    },
    methods:{
      setDialog(){
        this.$refs.dialog.init(true)
      }
    }
  }
</script>

<style>
  .manager {
    margin: 30px 0 0 20px;
  }

  .m-username {
    width: 300px;
    margin-right: 30px;
  }

  .status-label {
    margin-left: 30px;
  }

  .m-query {
    margin: 30px 15px 0 0px;
  }

  .m-reset {
    margin-top: 30px;
  }

  .derive-and-build {
    margin-top: 30px;
  }

  .m-build {
    float: right;
    margin-right: 125px;
  }
</style>
