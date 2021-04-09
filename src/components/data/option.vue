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
            <font>今开</font>
          </th>
          <th class="low">
            <font>最高</font>
          </th>
          <th class="low">
            <font>最低</font>
          </th>
          <th class="low">
            <font>昨收</font>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="datarow" v-for="f in this.forex">
          <td class="nm">
            <div class="over2l">
              <font v-text="f.stockId"></font>
            </div>
          </td>
          <td>
            <div class="idx">
              <font v-text="f.stockCode"></font>
            </div>
          </td>
          <td class="op" v-text="f.stockName"></td>
          <td class="high" v-text="f.newPrice"></td>
          <td class="low" v-text="f.priceAmount"></td>
          <td class="op" v-text="f.priceLimit"></td>
          <td class="op" v-text="f.nowSet"></td>
          <td class="op" v-text="f.highest"></td>
          <td class="op" v-text="f.lowest"></td>
          <td class="op" v-text="f.lastGet"></td>
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
    name: 'option',
    data() {
      return {
        forex: []
      }
    },
    mounted() {
      this.$axios.get('/data/QUERY||FOREX.do')
        .then((response) => {
          this.forex = response.data.data
          console.log(response)
        }).catch()
    }
  }
</script>

<style>
</style>
