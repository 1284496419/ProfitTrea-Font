<template>
  <div>
    <el-row class="tabline-content">
      <el-col :span="16" class="tabline-content-info">
        <h3 class="info info-title">通过我们特定的数据发现新见解</h3>
        <p class="info info-content">
          利用所提供的数据和分析功能，在适当的时间发掘适当的机会。获得您需要的市场洞察力，以完善您的交易策略并有效管理所有主要资产类别和全球基准的风险敞口。
        </p>
        <div class=" info jump our-market" @click="">
          <i class="el-icon-right"></i>
          <span>实时数据</span>
        </div>
        <div class=" info jump" @click="">
          <i class="el-icon-right"></i>
          <span>历史数据</span>
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
