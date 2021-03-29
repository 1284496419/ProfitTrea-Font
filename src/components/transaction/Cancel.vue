<template>
  <div class="cancel">
    <div class="title">
      <span>实时交易</span>
    </div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" id="tran">
      <el-tab-pane label="买入" name="first">
        <BuyIn></BuyIn>
      </el-tab-pane>
      <el-tab-pane label="卖出" name="second"></el-tab-pane>
      <el-tab-pane label="撤单" name="third">
        <CancelOrder></CancelOrder>
      </el-tab-pane>
      <el-tab-pane label="资金股份" name="fourth">
        <Capital></Capital>
      </el-tab-pane>
      <el-tab-pane label="当日成交" name="fifth">
        <DailyDeal></DailyDeal>
      </el-tab-pane>
      <el-tab-pane label="当日委托" name="sixth">
        <DailyEntrust></DailyEntrust>
      </el-tab-pane>
      <el-tab-pane label="历史成交" name="seventh">
        <HistoryDeal></HistoryDeal>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import CancelOrder from '@/components/transaction/CancelOrder.vue'
  import Capital from '@/components/transaction/Capital.vue'
  import DailyDeal from '@/components/transaction/DailyDeal.vue'
  import DailyEntrust from '@/components/transaction/DailyEntrust.vue'
  import HistoryDeal from '@/components/transaction/HistoryDeal.vue'
  import BuyIn from '@/components/transaction/BuyIn.vue'
  export default {
    name: 'cancel',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        if(tab.label === '买入'){

        }
      }
    },
    components: {
      CancelOrder,
      Capital,
      DailyDeal,
      DailyEntrust,
      HistoryDeal,
      BuyIn
    }
  };
</script>

<style>
  .cancel {
    float: right;
    color: #000000;
    margin: 70px 80px 0px 0px;
  }

  #tran {
    width: 100%;
  }
</style>
