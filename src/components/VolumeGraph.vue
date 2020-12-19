<template>
  <div id="volume-graph">
    <el-row>
      <el-col :span="8" class="g-left">
        <div>
          <el-col :span="24" class="gl-title">
            <h1>无与伦比的每日交易量意味着行业领先的流动性</h1>
          </el-col>
          <el-col :span="12" class="gl-content">
            <p>
              &nbsp;&nbsp;找到流动性以最有效的价格执行您想要的交易策略
              （在需要时）。每个主要资产类别中的全球基准产品
              意味着您可以迅速采取行动，以抓住商机或将交易市场
              中的风险降至最低。
            </p>
          </el-col>
        </div>
      </el-col>
      <el-col :span="12" class="g-right">
        <div class="g-img"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style scoped>
.el-row{
  height: 574px;
  color: white;
}
.g-left{
  height: 100%;
}
.g-right{
  position: relative;
  height: 100%;
}
.g-img{
  background-color: #EE6363;
  opacity: 83%;
  height: 70%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 9px;
}
.gl-title{
  width: 80%;
  margin: 80px 0 0 80px;
}
.gl-content{
  margin: 60px 0 0 80px;
  width: 80%;
  font-size: 20px;
}
</style>
