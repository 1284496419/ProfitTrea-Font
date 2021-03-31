<template>
  <div>
    <el-row class="tabline-content">
      <el-col :span="16" class="tabline-content-info">
        <h3 class="info info-title">市场交易所有主要资产类别</h3>
        <p class="info info-content">
          通过将领先的技术作为策略的核心部分，
          探索六种主要资产类别的产品，以找到机会，
          使您的投资组合多样化并提高效率。
          每周六天，每天24小时都可即时访问全球市场动荡的事件。
        </p>
        <div class=" info jump our-market" @click="enter_Market">
          <i class="el-icon-right"></i>
          <span>我们的市场</span>
        </div>
        <div class=" info jump" @click="enter_Transaction">
          <i class="el-icon-right"></i>
          <span>每日交易</span>
        </div>
      </el-col>
      <el-col :span="8" class="tabline-content-data">
        <div class="widget-top">
          <div class="widget_page">
            <div class="pageTitle">
              <font>市场概况</font>
            </div>
            <table class="dataTable">
              <tbody>
                <tr class="headerrow">
                  <th class="nm">
                    <font></font>
                  </th>
                  <th class="idx">
                    <font>INDEX</font>
                  </th>
                  <th class="op">
                    <font>OPEN</font>
                  </th>
                  <th class="high">
                    <font>HIGH</font>
                  </th>
                  <th class="low">
                    <font>LOW</font>
                  </th>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>恒生指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>国企指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>恒生科技指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>CES China120指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>沪深300指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>上证指数</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>欧洲斯托克50</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>英国富时100</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>道琼斯</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>标普500</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
                <tr class="datarow">
                  <td class="nm">
                    <div class="over2l">
                      <font>纳斯达克</font>
                    </div>
                  </td>
                  <td>
                    <div class="idx">
                      <font></font>
                    </div>
                    <div>
                      <span class="nc"></span>
                      <span class="pc">
                        <font>(-)</font>
                      </span>
                    </div>
                  </td>
                  <td class="op"></td>
                  <td class="high"></td>
                  <td class="low"></td>
                </tr>
              </tbody>
            </table>
            <div class="lastUpdate">
              <font>已更新：2021年3月31日PRO</font>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name:'goMarket',
    data() {
      return {

      }

    },
    methods:{
      enter_Market() {
        this.$router.push('/market')
      },
      enter_Transaction() {
        this.$router.push('/transaction')
      }
    }
  }
</script>

<style>
  .tabline-content-info {
    height: 450px;
    background-color: white;
  }

  .info {
    color: #000000;
    margin-left: 80px;
  }

  .info-title {
    font-size: 28px;
    margin-top: 60px;
  }

  .info-content {
    width: 80%;
    font-size: 18px;
    margin-top: 60px;
    line-height: 35px;
    /* text-indent: 20px; */
  }

  .our-market {
    margin: 30px 0 10px 80px;
  }

  .jump {
    cursor: pointer;
    font-size: 20px;
    color: #CD2626;
  }

  .tabline-content-data {
    margin-top: -0.5px;
    height: 450px;
    background-color: #DC143C;
    text-align: center;
  }

  #global {
    margin-top: 35px;
    font-size: 20px;
    margin-bottom: 25px;
  }

  .global-data {
    margin-left: 30px;
  }

  .widget-top {
    padding: 20px 20px 5px 20px;
    font-size: 18px;
  }

  .pageTitle {
    font-weight: Bold;
    font-size: 18px;
    margin: 5px 0px;
  }

  .dataTable {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px;
    margin-bottom: 10px;
  }

  .lastupdate {
    font-weight: lighter;
    font-size: 11px;
    padding: 5px 0px;
  }
  .headerrow {
      text-align: left;
  }
  .headerrow th {
      border-bottom: 1px solid white;
      font-size: 13px;
      font-weight: bold;
      text-align: left;
      padding: 4px 3px 4px 0px;
  }
  .datarow td {
      vertical-align: middle;
      font-size: 12px;
      font-weight: lighter;
      border-bottom: 1px solid #999;
      padding: 5px 8px 5px 0px;
      white-space: nowrap;
  }
  .datarow td.nm {
      white-space: normal;
  }
  .lastUpdate{
      font-weight: lighter;
      font-size: 11px;
      padding: 5px 0px;
  }
</style>
