<template>
  <el-row class="navigator">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect($event)"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>服务大厅</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="在线服务">在场服务</el-menu-item>
            <el-menu-item index="历史服务">历史服务</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-data-analysis"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="交易量统计">交易量统计</el-menu-item>
            <el-menu-item index="资产管理">资产管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-lock"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="管理员管理">管理员管理</el-menu-item>
            <el-menu-item index="用户管理">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>组织管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="组织设置">组织设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="意见反馈">意见反馈</el-menu-item>
            <el-menu-item index="站内信息">站内信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import Panel from '@/components/administrator/Panel.vue'
  import Manager from '@/components/administrator/Manager.vue'
  import User from '@/components/administrator/User.vue'
  export default {
    data() {
      return {
        tabs: [],
        tabIndex: 2
      }
    },
    methods: {
      handleOpen(key, keyPath) {},
      handleClose(key, keyPath) {},
      handleSelect(key) {
        const tabs = {
          title: key,
          name: ++this.tabIndex + '',
          content: ''
        }
        if (key === '组织设置') {
          tabs.content = 'Panel'
        }
        else if (key === '管理员管理'){
          tabs.content = 'Manager'
        } else if(key === '用户管理'){
          tabs.content = 'User'
        }
        this.$emit('select', tabs)
      }
    },
    components: {
      Panel,
      Manager,
      User
    }
  }
</script>

<style>
  .navigator {
    width: 15%;
    height: 800px;
    background-color: #545c64;
    float: left;
  }
</style>
