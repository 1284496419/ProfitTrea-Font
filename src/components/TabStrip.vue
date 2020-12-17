<template>
  <div>
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#CD3333"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1" id="t-market">进入市场</el-menu-item>
      <el-menu-item index="2">管理风险</el-menu-item>
      <el-menu-item index="3">分析市场数据</el-menu-item>
      <el-menu-item index="4">优化交易</el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="12" id="t-left"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8" id="t-right"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu{
  /* 阴影颜色 水平偏移量  垂直偏移量  模糊距离 阴影尺寸 */
  box-shadow:#CD3333 34px -8px 80px 80px;
  margin-top: 20px;
  opacity: 55%;
  width: 83.3%;
}
.el-menu-item{
  border-top-color: black;
  font-weight: 300;
  width: 150px;
  text-align: center;
}
#t-market{
  margin-left: 80px;
}
.el-row{
  /* box-shadow:#CD3333 34px -8px 99px 99px; */
}
.el-row .el-col{
  height: 500px;
}
#t-left{
  background-color: white;
}
#t-right{
  background-color: #DC143C;
  margin-top: -0.5px;
}
</style>
