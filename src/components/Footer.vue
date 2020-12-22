<template>
  <div id="footer">
    <div id="info">
      <div id="info-word">
        <i class="el-icon-chat-line-square"></i>
        <span class="feedback">反馈</span>
      </div>
    </div>
    <el-row>
      <el-col :span="24">
        <!-- <div id="words"> -->
          <p class="copyright" id="w-content">
            ProfitTrea是多样化的证券交易模拟平台。提供优化的交易功能。实时获取每个交易日的交易量和未平仓量等更多信息，通过量化交易得到更优化策略。
          </p>
          <span id="tag" class="copyright">&#169;2020 ProfitTrea Inc.保留所有权利</span>
          <ul>
            <li id="statement">免责声明</li>
            <li>隐私政策</li>
            <li>Cookie政策</li>
            <li>使用条款</li>
            <li>数据使用条款</li>
            <li>报告安全问题</li>
          </ul>
        <!-- </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style scoped>
  #footer{
    margin-top: 50px;
    color: white;
    height: 250px;
  }
  #info{
    position: absolute;
    height: 50px;
    width: 110px;
    border-radius: 10px;
    background-color: #EE3B3B;
    z-index: 101;
    margin-left: 85%;
  }
  .el-row{
    margin-top: 30px;
    position: absolute;
    height: 220px;
    width: 100%;
    background-color: #DC143C;
    z-index: 100;
  }
  .el-col{
    height: 100%;
  }
  .copyright{
    margin-left: 80px;
  }
  #w-content{
    letter-spacing: 1px;
    margin-top: 40px;
    width: 48%;
  }
  ul{
    position: absolute;
    display: inline-block;
    font-size: 16px;
    margin-left: 500px;
    list-style: none;
    margin-top: 70px;
  }
  ul li{
    margin-left: 10px;
    padding-left: 10px;
    float: left;
    color: #CDBA96;
    font-size: 18px;
    border-left: 2px solid #CDBA96;
  }
  #info-word{
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 20px;
    margin-top: -10px;
    margin-left: -27.5px;
  }
  /* #words{
    width: 50%;
    height: 200px;
    margin-left: 80px;
    font-size: 17px;
    line-height: 30px;
  } */
  #tag{
    display: inline-block;
    margin-top: 30px;
  }
  #statement{
    border-left: none;
  }
</style>
