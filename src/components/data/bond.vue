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
        <tr class="datarow" v-for="bon in this.bond">
          <td class="nm">
            <div class="over2l">
              <font v-text="bon.stockId"></font>
            </div>
          </td>
          <td>
            <div class="idx">
              <font v-text="bon.stockCode"></font>
            </div>

          </td>
          <td class="op" v-text="bon.stockName"></td>
          <td class="high" v-text="bon.newPrice"></td>
          <td class="low" v-text="bon.priceAmount"></td>
          <td class="op" v-text="bon.priceLimit"></td>
          <td class="op" v-text="bon.volumeNumber"></td>
          <td class="op" v-text="bon.volumeAmount"></td>
          <td class="op" v-text="bon.lastGet"></td>
          <td class="op" v-text="bon.nowSet"></td>
          <td class="op" v-text="bon.highest"></td>
          <td class="op" v-text="bon.lowest"></td>
        </tr>
      </tbody>
    </table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000" class="data-page">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'bond',
    data() {
      return {
        bond: []
      }
    },
    mounted() {
      this.$axios.get('/data/QUERY||BOND.do')
        .then((response) => {
          this.bond = response.data.data
        }).catch()
    }
  }
</script>

<style>
</style>
