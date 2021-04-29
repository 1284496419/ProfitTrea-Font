<template>
  <div class="newBlock">
    <table class="dataTable">
      <thead>
        <tr class="headerrow">
          <th class="nm">
            <font>序号</font>
          </th>
          <th class="idx">
            <font>代码</font>
          </th>
          <th class="op">
            <font>名称</font>
          </th>
          <th class="high">
            <font>最新价</font>
          </th>
          <th class="low">
            <font>涨跌额</font>
          </th>
          <th class="low">
            <font>涨跌幅</font>
          </th>
          <th class="low">
            <font>成交量</font>
          </th>
          <th class="low">
            <font>成交额</font>
          </th>
          <th class="low">
            <font>昨收</font>
          </th>
          <th class="low">
            <font>今开</font>
          </th>
          <th class="low">
            <font>最高</font>
          </th>
          <th class="low">
            <font>最低</font>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="datarow" v-for="cm in this.stock_list">
          <td class="nm">
            <div class="over2l">
              <font v-text="cm.stockId"></font>
            </div>
          </td>
          <td>
            <div class="idx">
              <font v-text="cm.stockCode"></font>
            </div>
          </td>
          <td class="op" v-text="cm.stockName"></td>
          <td class="high" v-text="cm.newPrice"></td>
          <td class="low" v-text="cm.priceAmount"></td>
          <td class="op" v-text="cm.priceLimit"></td>
          <td class="op" v-text="cm.volumeNumber"></td>
          <td class="op" v-text="cm.volumeAmount"></td>
          <td class="op" v-text="cm.lastGet"></td>
          <td class="op" v-text="cm.nowSet"></td>
          <td class="op" v-text="cm.highest"></td>
          <td class="op" v-text="cm.lowest"></td>
        </tr>
      </tbody>
    </table>
    <el-pagination background layout="prev, pager, next" :total="1000" class="data-page">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'newBlock',
    data(){
      return {
        stock_list:[]
      }
    },
    mounted() {
      this.$axios.get('/data/QUERY||STOCK.do')
        .then((response) => {
          this.stock_list = response.data.data
          console.log(response)
        }).catch()
    }
  }
</script>

<style>
  .dataTable th {
    text-align: center;
  }

  .newBlock {
    text-align: center;
    width: 1060.8px;
  }
</style>
