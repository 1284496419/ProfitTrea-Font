<template>
  <div class="saleOut">
    <div class="saleOut_content">
      <el-form :model="form" id="saleForm">
        <el-form-item label="股票代码" :label-width="formLabelWidth">
          <el-input v-model="form.stockCode" autocomplete="off" id="stock-search" @input="search()" @blur="closeList()">
          </el-input>
          <ul :class="listStyle">
            <li class="sale-item" v-for="sale in saleList" @click="selectData(sale)" @mousedown="preventBlur($event)">
              <font v-text="sale.stockName + '(' + sale.stockCode + ')'"></font>
            </li>
          </ul>
        </el-form-item>
        <el-form-item label="股票名称" :label-width="formLabelWidth">
          <el-input v-model="form.stockName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="委托方式" :label-width="formLabelWidth">
          <el-select v-model="form.enstrustType" placeholder="请选择委托方式">
            <el-option label="限价委托" value="xianjia"></el-option>
            <el-option label="市价委托" value="shijia"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="卖出价格" :label-width="formLabelWidth">
          <el-input v-model="form.salePrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最大可卖" :label-width="formLabelWidth" id="maxSale">
          <el-input v-model="form.maxsale" autocomplete="off"></el-input>
          <el-button type="danger" icon="el-icon-plus" class="all">全部</el-button>
          <el-radio-group v-model="form.maxsale">
            <el-radio label="1/2"></el-radio>
            <el-radio label="1/3"></el-radio>
            <el-radio label="1/4"></el-radio>
            <el-radio label="1/5"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="卖出数量" :label-width="formLabelWidth">
          <el-input v-model="form.saleNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="sale-stock-info">
        <div class="sale-stock-top">-</div>
        <table id="stocksaleoutinfo" border="0">
          <tr>
            <td>卖五</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>卖四</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>卖三</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>卖二</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>卖一</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr class="sale-stock-middle">
            <td>
              <strong>最新：</strong>
              <span id="newestPrice1">-</span>
            </td>
            <td></td>
            <td>
              <strong>涨幅：</strong>
              <span class="font-red">-</span>
            </td>
          </tr>
          <tr>
            <td>买一</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>买二</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>买三</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>买四</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>买五</td>
            <td class="font-red">-</td>
            <td>-</td>
          </tr>
        </table>
        <div class="sale-stock-bottom">
          <div class="col-left">
            <strong>涨停：</strong>
            <span class="font-red">-</span>
          </div>
          <div class="col-right">
            <strong>跌停：</strong>
            <span class="font-green">-</span>
          </div>
        </div>
      </div>
    </div>
    <div class="saleout_footer">
      <el-button @click="cancelForm">重置</el-button>
      <el-button type="primary" @click="submitSale">
        确 定
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          stockCode: '',
          stockName: '',
          enstrustWay: 'shijia',
          salePrice: '',
          fund: '',
          maxsale: '',
          saleNumber: ''
        },
        formLabelWidth: '80px',
        listStyle: 'code-list ifind-hide',
        saleList: []
      }
    },
    methods: {
      submitSale() {
        console.log('卖出股票')
      },
      cancelForm() {
        this.form.stockCode = ''
        this.form.stockName = ''
        this.form.salePrice = ''
        this.form.fund = ''
        this.form.maxsale = ''
        this.form.saleNumber = ''
      },
      preventBlur(event) {
        //不触发输入框失去焦点事件
        event.preventDefault();
      },
      closeList() {
        this.listStyle = 'code-list ifind-hide'
      },
      search() {
        this.listStyle = 'code-list'
        //模糊搜索接口
        console.log(this.form.stockCode)
        var sale_stock = JSON.stringify({
          stockCode: this.form.stockCode
        })
        this.$axios.post('/transaction/QUERY||BUYSTOCK.do', sale_stock, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          this.saleList = response.data.data
        }).catch()
      },
      selectData(scale) {
        this.listStyle = 'code-list ifind-hide'
        this.form.stockCode = scale.stockCode
        this.form.stockName = scale.stockName
        this.form.salePrice = scale.newPrice
      }
    },
  }
</script>

<style>
  #saleForm {
    margin-top: 10px;
    width: 50%;
    float: left;
  }

  .sale-stock-info {
    margin-top: 10px;
    text-align: center;
    border: 1px solid #dcdcdc;
    float: right;
    width: 49%;
    height: 425px;
  }

  table {
    width: 100%;
  }

  .saleout_footer {
    margin: 50px 0px 0px 220px;
    float: left;
  }

  .code-list {
    position: absolute;
    top: 41px;
    left: 0;
    width: 99.4%;
    max-height: 184px;
    overflow-y: auto;
    border: 1px solid #dee1ea;
    z-index: 1;
  }

  .code-list li {
    padding: 0 5px;
    line-height: 30px;
    border-top: 1px dashed #dee1ea;
    cursor: pointer;
    color: #333;
    background: #FFF;
  }

  .ifind-hide {
    display: none;
  }

  .sale-item:hover {
    background-color: #f2f2f2;
  }

  #maxSale .el-input {
    width: 70%;
  }
</style>
