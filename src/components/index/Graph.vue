<template>
  <div id="graph">
    <el-row>
      <el-col :span="8" class="graph-left">
        <h3 class="graph-info graph-title">无与伦比的每日交易量意味着行业领先的流动性</h3>
        <p class="graph-info graph-content">
          找到流动性以最有效的价格执行您想要的交易策略
          （在需要时）。每个主要资产类别中的全球基准产品
          意味着您可以迅速采取行动，以抓住商机或将交易市场
          中的风险降至最低。
        </p>
      </el-col>
      <el-col :span="12" class="graph-right">
        <div class="graph-img">
          
        </div>
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
.graph-left{
  height: 100%;
}
.graph-info{
  margin-left: 80px;
}
.graph-title{
  font-size: 30px;
  margin-top: 140px;
}
.graph-content{
  font-size: 20px;
  margin-top: 60px;
}
.graph-right{
  position: relative;
  height: 100%;
}
.graph-img{
  background-color: #EE6363;
  opacity: 83%;
  height: 70%;
  width: 90%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 9px;
}
</style>
