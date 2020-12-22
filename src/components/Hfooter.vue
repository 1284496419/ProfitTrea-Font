<template>
  <div class="hfooter">
    <el-row>
      <el-col :span="8">
        <ul>
          <li class="f-title">市场数据</li>
          <li>股票数据</li>
          <li>债券数据</li>
          <li>基金数据</li>
          <li>期权数据</li>
          <li>行情信息</li>
        </ul>
      </el-col>
      <el-col :span="8">
        <ul>
          <li class="f-title">国际交易所</li>
          <li>纽约交易所</li>
          <li>纳斯达克</li>
          <li>东京证券交易所</li>
          <li>上海证券交易所</li>
          <li>香港证券交易所</li>
        </ul>
      </el-col>
      <el-col :span="8">
        <ul>
          <li class="f-title">关于</li>
          <li>联系我们</li>
          <li>常见问题</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style scoped>
.el-row{
  height: 400px;
  background-color: white;
  color: #EE3B3B;
  text-align: center;
  font-size: 20px;
}
.el-row .el-col{
  margin-top: 40px;
}

ul{
  list-style: none;
}
ul li{
  margin-top: 30px;
}
.f-title{
  color: #828282;
  font-size: 18px;
}
</style>
