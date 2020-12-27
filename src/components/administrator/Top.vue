<template>
  <div class="top">
    <h3 @click="toIndex" class="logo">ProfitTrea</h3>
    <el-dropdown class="sign-out">
      <div>
        <el-avatar :size="45"></el-avatar>
        <el-button type="primary" class="signout-button">
         {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>
          <el-button id="out-btn"
              plain
              @click="sendMessage">
              退出
            </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      username: this.$route.params.user
      // username: this.$router.params.user
    }
  },
  /* mounted () {
    console.log(this.$route.params)
  }, */
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    toIndex () {
      this.$router.push('/')
    },
    signOut () {
      this.$router.push('/login')
    },
    sendMessage () {
      const h = this.$createElement
      this.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal' }, '退出成功'),
        duration: 1500
      })
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  color: white;
  width: 100%;
  height: 70px;
  background-color: #DC143C;
}
.logo{
  cursor: pointer;
  font-size: 30px;
  float: left;
  margin: 13px 0 0 20px;
}
.sign-out{
  float: right;
}
.el-avatar{
  float: left;
  margin: 12px 5px 0 0;
}
.signout-button{
  float: right;
  display: block;
  margin: 14px 10px 0 0;
  background-color: #DC143C;
  border-color: #DC143C;
}
#out-btn{
  border: 0px;
  background-color: inherit;
}

</style>
