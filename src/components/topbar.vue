<template>
  <!-- <div class="top">
    <div class="topbar"></div>
  </div> -->
  <div class="topbar">
    <span id="logo" @click="toIndex">ProfitTrea</span>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#DC143C" text-color="#fff" active-text-color="#ffd04b">
      <!-- <el-menu-item id="logo">ProfitTrea</el-menu-item> -->
      <el-menu-item index="1" id="market">市场</el-menu-item>
      <el-menu-item index="2">数据</el-menu-item>
      <el-menu-item index="3">服务</el-menu-item>
      <i class="el-icon-search" id="search"></i>
      <i class="el-icon-user-solid" id="person"></i>
      <el-button id="login" @click="login">登录</el-button>
    </el-menu>
  </div>

</template>

<script>
  /* export default {
  name: 'topbar',
  props: {
    msg: String
  }
} */
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
  .topbar{
    height: 80px;
    color: white;
    background-color: #DC143C;
  }
  .el-menu-demo{
    float: right;
    width: 80%;
  }
  #logo {
    display: block;
    font-size: 35px;
    width: auto;
    /* 取消鼠标的hover效果 */
    /* pointer-events: none; */
    margin-left: 80px;
    float: left;
    margin-top: 15px;
    cursor: pointer;
    font-family: "bodoni mt";
  }

  .el-menu .el-menu-item {
    padding-top: 0.3125rem;
    width: 200px;
    text-align: center;
    height: 5rem;
    font-size: 20px;
  }

  #market {
    margin-left: 3.125rem;
  }

  #search {
    margin-left: 280px;
    margin-top: 30px;
    width: 20px;
    border: none;
  }

  #person {
    margin-left: 30px;
  }

  #login {
    float: right;
    color: white;
    margin-right: 80px;
    margin-top: 20px;
    background-color: #DC143C;
  }
</style>
