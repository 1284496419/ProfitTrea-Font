<template>
  <el-row class="navigator">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>服务大厅</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">在场服务</el-menu-item>
            <el-menu-item index="1-2">历史服务</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-data-analysis"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">交易量统计</el-menu-item>
            <el-menu-item index="2-2">资产管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-lock"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">管理员管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">用户设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">意见反馈</el-menu-item>
            <el-menu-item index="5-2">站内信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.navigator{
  width: 15%;
  height: 800px;
  background-color: #545c64;
  float: left;
}
.el-menu{
  /* height: 800px; */
}
</style>
