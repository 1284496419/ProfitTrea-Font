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
            <font>开盘价</font>
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
        <tr class="datarow" v-for="found in this.foundation">
          <td class="nm">
            <div class="over2l">
              <font v-text="found.stockId"></font>
            </div>
          </td>
          <td>
            <div class="idx">
              <font v-text="found.stockCode"></font>
            </div>
          </td>
          <td class="op" v-text="found.stockName"></td>
          <td class="high" v-text="found.newPrice"></td>
          <td class="low" v-text="found.priceAmount"></td>
          <td class="op" v-text="found.priceLimit"></td>
          <td class="op" v-text="found.volumeNumber"></td>
          <td class="op" v-text="found.volumeAmount"></td>
          <td class="op" v-text="found.nowSet"></td>
          <td class="op" v-text="found.highest"></td>
          <td class="op" v-text="found.lowest"></td>
          <td class="op" v-text="found.lastGet"></td>
        </tr>
      </tbody>
    </table>
    <el-pagination background layout="prev, pager, next" :total="1000" class="data-page">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'foundation',
    data() {
      return {
        foundation: []
      }
    },
    mounted() {
      var foun = {
        stockType: 'FOUNDATION'
      }
      this.$axios.post('/data/QUERY||DATA.do', foun, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
        .then((response) => {
          this.foundation = response.data.data
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
    width: 1072.8px;
    /* background-color: #000000; */
  }

  .data-page {}
</style>
