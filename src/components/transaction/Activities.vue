<template>
  <div class="activities">
    <div class="a-left">
      <div class="title">
        <span>交易活动</span>
      </div>
      <div class="content">
        <div class="al-title">
          <span>今日买进卖出</span>
          <span id="sale" class="icon"></span>
          <span>卖</span>
          <span id="buy" class="icon"></span>
          <span>买</span>
        </div>
      </div>
    </div>
    <div class="a-right">
      <div class="title">
        <span>优质股票</span>
      </div>
      <div class="content">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="股票代码"
              width="180">
            </el-table-column>
            <el-table-column
              prop="stockName"
              label="股票名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="涨幅">
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tableData:[]
      }
    }
  }
</script>

<style>
.title{
  box-sizing: border-box;
  border-left: 5px solid #CD0000;
  width: 100%;
  font-size: 25px;
  height: 50px;
  line-height: 48px;
  background-color: #1C5791;
  opacity: 96%;
}
.title span{
  display: inline-block;
  margin-left: 30px;
}
.a-left{
  margin-left: 80px;
  width: 53%;
  float: left;
}
.al-title{
  font-size: 15px;
  color: #104E8B;
  width: 85%;
  height: 8%;
  margin: auto;
  background-color: rgb(130,130,130,15%);
  border-bottom: 1px solid #3D3D3D;
}
.a-right{
  margin-right: 80px;
  float: right;
  width: 32%;
}
.content{
  background-color: white;
  height: 420px;
  width: 100%;
  padding-top: 15px;
}
.icon{
  display: inline-block;
  width: 10px;
  height: 10px;
}
#sale{
  background-color: #CD0000;
}
#buy{
  background-color: #2C8D61;
}
</style>
