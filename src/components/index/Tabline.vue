<template>
  <div class="tabline">
    <!-- <el-row>
      <el-col :span="24">
        <div class="inner">

        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row> -->

    <el-menu
    :default-active="activeIndex2"
    class="tabline-top"
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
    <el-row class="tabline-content">
      <el-col :span="12" class="tabline-content-info">
        <h2 class=" info info-title">市场交易所有主要资产类别</h2>
        <p class="info info-content">
          通过将领先的技术作为策略的核心部分，
          探索六种主要资产类别的产品，以找到机会，
          使您的投资组合多样化并提高效率。
          每周六天，每天24小时都可即时访问全球市场动荡的事件。
        </p>
        <div class=" info jump our-market" @click="enter_Market">
          <i class="el-icon-right"></i>
          <span>我们的市场</span>
        </div>
        <div class=" info jump" @click="enter_Transaction">
          <i class="el-icon-right"></i>
          <span>每日交易</span>
        </div>
      </el-col>
      <el-col :span="8" class="tabline-content-data">
        <h2 id="global">全球指数</h2>
        <el-table
          :data="tableData"
          stripe
          style="width: 90%;" class="global-data">
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
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tableData: [{
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      indexMethod(name) {
        return name
      },
      enter_Market() {
        this.$router.push('/market')
      },
      enter_Transaction() {
        this.$router.push('/transaction')
      },
      handleClick(){
        console.log('nihao')
      }
    }
  }
</script>

<style scoped>
  .tabline{
    margin-left: -20px;
  }
  .inner{
    float: left;
    width: 100px;
    height: 60px;
    background-color: rgb(205,51,51,55%);
  }
  .el-tabs{
    float: left;
    width: 74%;
    background-color: rgb(205,51,51,55%);
    /* margin-right: 270px; */
  }
  .el-tabs__nav-scroll{
    border: none;
  }
  .el-tabs__nav{
    padding-left: 30px;
  }
  .el-tabs__item{
    padding-left: 30px !important;
    font-size: 30px;
  }
  .tabline-top {
    margin-top: 20px;
    opacity: 70%;
    width: 83.3%;
  }

  .el-menu-item {
    font-weight: 300;
    width: 150px;
    text-align: center;
  }

  .tabline-content-info {
    height: 450px;
    background-color: white;
  }

  .info {
    color: #000000;
    margin-left: 80px;
  }

  .info-title {
    margin-top: 60px;
  }

  .info-content {
    width: 80%;
    font-size: 23px;
    margin-top: 60px;
    line-height: 35px;
    /* text-indent: 20px; */
  }

  .our-market {
    margin: 30px 0 10px 80px;
  }

  .jump {
    cursor: pointer;
    font-size: 20px;
    color: #CD2626;
  }

  .tabline-content-data {
    margin-top: -0.5px;
    height: 450px;
    background-color: #DC143C;
    text-align: center;
  }

  #global {
    margin-top: 35px;
    font-size: 30px;
    margin-bottom: 25px;
  }

  .el-table {
    margin: auto;
  }

  .global-data {
    color: #303133;
  }
</style>
