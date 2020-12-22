<template>
  <div class="warning">
    <span id="w-title">市场预警</span>
    <div>
      <div class="w-main1">
        <span id="nearest">最近的预警</span>
        <span id="show-all">查看全部</span>
      </div>
      <div class="w-main2">
        <div class="warning-content">
          <i class="el-icon-bottom change"></i>
          <span>E-迷你纳斯达克</span>
          <p class="change">较上一交易日下跌1%</p>
          <span class="change">3天前</span>
        </div>
      </div>
      <div class="w-main2">
        <div class="warning-content">
          <i class="el-icon-bottom change"></i>
          <span class="change">E-迷你纳斯达克</span>
          <p class="change">较上一交易日下跌1%</p>
          <span class="change">3天前</span>
        </div>
      </div>
      <div class="w-main2">
        <div class="warning-content">
          <i class="el-icon-bottom change"></i>
          <span class="change">E-迷你纳斯达克</span>
          <p class="change">较上一交易日下跌1%</p>
          <span class="change">3天前</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.warning{
  height: 250px;
  width: 90%;
  background-color: white;
  margin: auto;
  border-radius: 10px;
}
#w-title{
  display: inline-block;
  margin: 20px 0 15px 65px;
  font-size: 26px;
}
#nearest{
  display: block;
  margin-left: 65px;
  font-size: 17px;
  width: 60px;
}
#show-all{
  margin: 30px 0 0 65px;
  font-size: 13px;
  display: block;
  color: #CD0000;
}
.w-main1{
  float: left;
  width: 16%;
  height: 150px;
}
.w-main1 span{
  display: inline-block;
  margin-left: 40px;
  margin-top: 20px;
  font-size: 18px;
}
.w-main2{
  box-sizing: border-box;
  border-left: 2px solid #8B0000;
  text-align: center;
  float: left;
  width: 28%;
  height: 150px;
}
.warning-content{
  padding-top: 25px;
  width: 40%;
  margin: auto;
  text-align: left;
}
.change{
  display: inline-block;
  margin-top: 10px;
}
</style>
