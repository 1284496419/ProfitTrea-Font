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
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="交易量统计">交易量统计</el-menu-item>
            <el-menu-item index="资产管理">资产管理</el-menu-item>
            <el-menu-item index="市场管理">市场管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-lock"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="管理员管理" :disabled="disabledManager">管理员管理</el-menu-item>
            <el-menu-item index="用户管理">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4" :disabled="disabled">
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
  import Statistics from '@/components/administrator/Statistics.vue'
  import MarketManage from '@/components/administrator/MarketManage.vue'
  import FundManage from '@/components/administrator/FundManage.vue'
  export default {
    data() {
      return {
        tabs: [],
        tabIndex: 2,
        disabled:false,
        disabledManager:false
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
        } else if(key === '交易量统计'){
          tabs.content = 'Statistics'
        } else if(key === '市场管理'){
          tabs.content = 'MarketManage'
        } else if(key === '资产管理'){
          tabs.content = 'FundManage'
        }
        this.$emit('select', tabs)
      }
    },
    components: {
      Panel,
      Manager,
      User,
      Statistics,
      MarketManage,
      FundManage
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      var user = {
        userName: token
      }
      this.$axios.post("/user/QUERY||PERMISSION.do", user, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var permission = response.data.data.permissionId
          if(permission !== 10){
            this.disabled = true
            if(permission == 13){
              this.disabledManager = true
            }else{
              this.disabledManager = false
            }
          }else{
            this.disabled = false
          }
        })
        .catch((error) => {
          this.$message.error('获取用户权限异常');
        })

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
