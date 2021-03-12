<template>
  <!-- <div class="top">
    <div class="topbar"></div>
  </div> -->
  <div class="topbar">
    <div class="topbar-container">
      <a href="">
        <span id="logo">ProfitTrea</span>
      </a>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#DC143C" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">市场</template>
          <el-submenu index="1-1">
            <template slot="title">证券市场</template>
            <el-menu-item index="1-3-1">股票</el-menu-item>
            <el-menu-item index="1-3-2">债券</el-menu-item>
            <el-menu-item index="1-3-3">基金+ETF</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">衍生品市场</template>
            <el-menu-item index="1-2-1">股指</el-menu-item>
            <el-menu-item index="1-2-2">货币期权</el-menu-item>
            <el-menu-item index="1-2-3">外汇交易</el-menu-item>
            <el-menu-item index="1-2-4">外汇交易</el-menu-item>
            <el-menu-item index="1-2-5">股票期货</el-menu-item>
            <el-menu-item index="1-2-6">期货</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">场外交易市场</template>
            <el-menu-item index="1-3-1">利率掉价</el-menu-item>
            <el-menu-item index="1-3-2">不可交割远期</el-menu-item>
            <el-menu-item index="1-3-3">可交割外汇</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">数据</template>
          <el-submenu index="2-1">
            <template slot="title">实时数据</template>
            <el-menu-item index="2-1-1">股票数据</el-menu-item>
            <el-menu-item index="2-1-2">债券数据</el-menu-item>
            <el-menu-item index="2-1-3">基金数据</el-menu-item>
            <el-menu-item index="2-1-4">期权数据</el-menu-item>
            <el-menu-item index="2-1-5">其他数据</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">行情信息</template>
            <el-menu-item index="2-2-1">行情走势</el-menu-item>
            <el-menu-item index="2-2-2">行情报表</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">统计资料</template>
            <el-menu-item index="2-3-1">统计月报</el-menu-item>
            <el-menu-item index="2-3-2">统计年鉴</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">服务</template>
          <el-submenu index="3-1">
            <template slot="title">优化交易</template>
            <el-menu-item index="2-3-1">量化交易</el-menu-item>
            <el-menu-item index="2-3-2">优化策略分析</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">结算和保管</template>
            <el-menu-item index="3-2-1">存托处</el-menu-item>
            <el-menu-item index="3-2-2">普通代理人服务</el-menu-item>
            <el-menu-item index="3-2-3">资金管理</el-menu-item>
            <el-menu-item index="3-2-4">证券进入结算系统</el-menu-item>
          </el-submenu>
          <el-submenu index="3-3">
            <template slot="title">规则</template>
            <el-menu-item index="3-3-1">使用规则</el-menu-item>
          </el-submenu>
        </el-submenu>
        <div class="top">
          <div class="el-icon-search"></div>
          <div class="el-icon-user-solid"></div>
          <el-button id="login" @click="login">登录</el-button>
        </div>
      </el-menu>
    </div>

    </el-menu>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      login() {
        this.$router.push({
          path: '/login'
        })
      },
      toIndex() {
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topbar {
    height: 80px;
    color: white;
    background-color: #DC143C;
  }

  .el-menu-demo {
    background-color: #DC143C;
    float: right;
    width: 80%;
  }

  #logo {
    /* display: block; */
    font-size: 35px;
    width: auto;
    margin-left: 80px;
    float: left;
    margin-top: 10px;
    /* cursor: pointer; */
    font-family: "bodoni mt";
    color: white;
  }

  .el-menu {
    border: none;
  }

  .el-menu .el-submenu {
    padding-top: 0.3125rem;
    width: 200px;
    text-align: center;
    font-size: 20px;
  }

  .el-submenu__title {
    font-size: 20px !important;
  }

  .top {
    margin: 20px 80px;
    float: right;
  }

  .el-icon-search {
    margin-right: 30px;
  }

  .el-icon-user-solid {
    margin-right: 30px;
  }

  #login {
    color: white;
    background-color: #DC143C;
  }
</style>
