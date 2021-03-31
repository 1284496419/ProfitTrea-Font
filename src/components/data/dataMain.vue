<template>
  <div class="main">
    <h1 class="market-title">提供市场实时数据</h1>
    <div class="dm-container">
      <div class="dm-left">
        <div class="dm-title">
          <span>实时数据</span>
        </div>
        <div class="dm-left right">
          <div class="dm-title dmr-title">
            <span>获取当天实时的数据</span>
          </div>

        </div>
        <div class="dm-content">
          <el-tabs :tab-position="tabPosition" id="dm-tab">
            <el-tab-pane label="新三板数据">
              <NewBlock></NewBlock>
            </el-tab-pane>
            <el-tab-pane label="基金数据">配置管理</el-tab-pane>
            <el-tab-pane label="债券数据">角色管理</el-tab-pane>
            <el-tab-pane label="期权数据">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import NewBlock from './newBlock.vue'
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    },
    components: {
      NewBlock
    }
  };
</script>

<style>
  .dm-left {
    margin: 30px 0 0 40px;
    width: 94%;

    /* float: left; */
  }

  .right {
    margin: 0;
    float: left;
    width: 1072.8px;
  }

  .dm-title {
    float: left;
    box-sizing: border-box;
    border-left: 5px solid #CD0000;
    width: 20%;
    font-size: 25px;
    height: 50px;
    line-height: 48px;
    background-color: #1C5791;
    opacity: 96%;
    text-align: center;
  }

  .dmr-title {
    margin-left: 10px;
    width: 100%;
    color: #1C5791;
    background-color: white;
  }

  .dm-title span {
    display: inline-block;
  }

  .dm-content {
    z-index: 100;
    background-color: rgb(255, 255, 255, 0%);
    height: 490px;
    width: 100%;
    color: #000000;

  }

  .el-tabs__nav {
    height: 100%;
  }

  .dm-content .el-tabs {
    float: left;
    width: 100%;
    height: 100%;
  }

  #dm-tab .el-tabs__header {
    background-color: white;
    width: 20%;
    height: 240px;
    float: left;
  }

  #dm-tab .el-tabs__item {
    height: 60px;
    border-bottom: solid 1px #ccc;
    text-align: center;
    color: #10416c;
    font-size: 18px;
    font-weight: 400;
    line-height: 60px;
  }

  #dm-tab .el-tabs__content {
    background-color:  rgb(243, 245, 249);
    height: 100%;
    /* float: left; */
    z-index: 101;
    float: left;
  }

  #dm-tab .el-tab-pane {}

  /* .dm-container {
    padding: 0 30px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
  }

  .nav-side {
    width: 23.7288135593%;
    float: left;
    margin-right: 1.6949152542%;
  }
  .menu-title {
      color: #fff;
      background-color: #10416c;
      width: 100%;
      border-left: 4px solid #e72742;
      min-height: 48px;
      text-align: left;
      overflow: hidden;
  }
  .left-menu__wrapper {
      float: left;
      width: 100%;
      display: block;
      overflow: hidden;
      background-color: #fff;
      -webkit-box-shadow: 0 1px 0 0 #a1b4c5;
      box-shadow: 0 1px 0 0 #a1b4c5;
  } */
</style>
