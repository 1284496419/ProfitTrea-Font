<template>
  <div class="cancel">
    <div class="title">
      <span>实时交易</span>
    </div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" id="tran">
      <el-tab-pane label="买入" name="first">
        <BuyIn></BuyIn>
      </el-tab-pane>
      <el-tab-pane label="卖出" name="second">
        <SaleOut></SaleOut>
      </el-tab-pane>
      <el-tab-pane label="撤单" name="third">
        <CancelOrder></CancelOrder>
      </el-tab-pane>
      <el-tab-pane label="资金股份" name="fourth">
        <Capital :funds="funds" :stockList="stockList"></Capital>
      </el-tab-pane>
      <el-tab-pane label="当日成交" name="fifth">
        <DailyDeal :today_deal="today_deal"></DailyDeal>
      </el-tab-pane>
      <el-tab-pane label="当日委托" name="sixth">
        <DailyEntrust :today_entrust="today_entrust"></DailyEntrust>
      </el-tab-pane>
      <el-tab-pane label="历史成交" name="seventh">
        <HistoryDeal :history_deal="history_deal"></HistoryDeal>
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
  import SaleOut from '@/components/transaction/SaleOut.vue'
  export default {
    name: 'cancel',
    data() {
      return {
        activeName: 'first',
        token: '',
        funds: {},
        stockList: [],
        today_deal: [],
        today_entrust: [],
        history_deal: [],
        queryInfo: {}
      };
    },
    methods: {
      handleClick(tab, event) {
        if (tab.label === '买入') {

        } else if (tab.label === '卖出') {

        } else if (tab.label === '撤单') {

        } else if (tab.label === '资金股份') {
          //查询资金资产
          var share = JSON.stringify({
            stockCode: this.token
          })
          this.$axios.post('/transaction/QUERY||SHARE.do', share, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            this.funds = response.data.data
          }).catch()

          //查询证券资产
          this.$axios.post('/transaction/QUERY||FUND.do', this.queryInfo, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            var stocks = response.data.data
            this.stockList = stocks
          }).catch()

        } else if (tab.label === '当日成交') {
          this.$axios.post('/transaction/QUERY||TRANSACTION.do', this.queryInfo, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            var deal_list = response.data.data
            this.today_deal = deal_list
          }).catch()
        } else if (tab.label === '当日委托') {
          this.$axios.post('/transaction/QUERY||ENTRUST.do', this.queryInfo, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            this.today_entrust = response.data.data
          }).catch()
        } else if (tab.label === '历史成交') {

          this.$axios.post('/transaction/QUERY||HISTORY.do', this.queryInfo, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then((response) => {
            this.history_deal = response.data.data

          }).catch()
        }
      }
    },
    components: {
      CancelOrder,
      Capital,
      DailyDeal,
      DailyEntrust,
      HistoryDeal,
      BuyIn,
      SaleOut
    },
    mounted() {
      var token = localStorage.getItem('Authorization')
      this.token = token
      var info = JSON.stringify({
        userName: this.token
      })
      this.$axios.post('/user/QUERY||ORGANIZATION.do', info, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        if(response.data.code != 100){

        }else{
          this.queryInfo = JSON.stringify({
            userId: response.data.data.userId
          })
        }
      }).catch((error)=>{
        this.$message.error("获取token状态异常")
      })
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
    height: 100%;
  }
</style>
