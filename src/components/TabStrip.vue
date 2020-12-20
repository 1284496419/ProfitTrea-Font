<template>
  <div class="tabstrip">
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
    <el-row class="strip-main">
      <el-col :span="12" id="t-left">
        <div class="tr-main">
          <el-row>
            <el-col :span="24" class="tr-title">
              <h1>市场交易所有主要资产类别</h1>
            </el-col>
          </el-row>
          <el-col :span="24" class="tr-content">
            <p>
              通过将领先的技术作为策略的核心部分，
              探索六种主要资产类别的产品，以找到机会，
              使您的投资组合多样化并提高效率。
              每周六天，每天24小时都可即时访问全球市场动荡的事件。
            </p>
          </el-col>
          <el-col class="address">
            <div class="enter" @click="enter_Market">
              <i class="el-icon-right"></i>
              <span>我们的市场</span>
            </div>
            <div class="enter">
              <i class="el-icon-right"></i>
              <span>每日交易量和未平仓量</span>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="8" id="t-right">
        <h2>全球指数</h2>
        <el-table
          :data="tableData"
          stripe
          style="width: 80%;"
          >
          <el-table-column
            prop="stockname"
            width="120">
          </el-table-column>
          <el-table-column
            prop="price"
            label="最新价"
            width="120">
          </el-table-column>
          <el-table-column
            prop="limit"
            label="涨跌额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="scope"
            label="涨跌幅">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tableData: [
        {
          stockname: '上证指数',
          price: '3442.14',
          limit: '-7.24',
          scope: '-0.21%'
        },
        {
          stockname: '欧洲斯托克50',
          price: '3521.32',
          limit: '-3.92',
          scope: '-0.11%'
        },
        {
          stockname: '英国富时100',
          price: '6463.39',
          limit: '78.66',
          scope: '1.23%'
        },
        {
          stockname: '俄罗斯RTS',
          price: '1330.40',
          limit: '-5.04',
          scope: '-0.38%'
        },
        {
          stockname: '道琼斯',
          price: '29883.79',
          limit: '59.87',
          scope: '0.20%'
        },
        {
          stockname: '标普500',
          price: '3669.01',
          limit: '6.56',
          scope: '0.18%'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    indexMethod (name) {
      return name
    },
    enter_Market () {
      this.$router.push('/market')
    }
  }
}
</script>

<style scoped>
.el-menu{
  margin-top: 20px;
  opacity: 70%;
  /* background-color: rgba(205, 51, 51, -100%); */
  width: 83.3%;
}
.el-menu-item{
  font-weight: 300;
  width: 150px;
  text-align: center;
}
#t-market{
  margin-left: 80px;
}
.strip-main > .el-col{
  height: 500px;
}
#t-left{
  background-color: white;
}
.enter{
  cursor: pointer;
  margin-top: 15px;
}
.tr-title{
  margin-top: 80px;
}
#t-right{
  text-align: center;
  background-color: #DC143C;
  margin-top: -0.5px;
}
h1{
  margin-left: 80px;
  height: 50px;
}
h2{
  color: white;
  margin-top: 35px;
  display: inline-block;
}
.tr-content{
  font-size: 20px;
  margin-left: 80px;
  width: 650px;
  height: 100px;
}
.el-table{
  margin-left: 50px;
  margin-top: 20px;
}
.el-table__row{
  margin-top: 80px;
  background-color: #DC143C;
}
/* 表格下划线 */
.el-table td, .el-table th.is-leaf{
  border-bottom: none;
}
.el-table th, .el-table tr{
  background-color: #DC143C;
}
.address{
  margin-top: 30px;
  margin-left: 80px;
  font-size: 20px;
  color: #CD2626;
}
</style>
