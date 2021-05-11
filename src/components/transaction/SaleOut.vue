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
          <el-input v-model="form.stockName" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="委托方式" :label-width="formLabelWidth">
          <el-select v-model="form.enstrustWay" placeholder="请选择委托方式">
            <el-option label="限价委托" value="xianjia"></el-option>
            <el-option label="市价委托" value="shijia"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="卖出价格" :label-width="formLabelWidth">
          <el-input v-model="form.salePrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最大可卖" :label-width="formLabelWidth" id="maxSale">
          <el-input v-model="form.maxsale" autocomplete="off" readonly></el-input>
          <el-button type="danger" icon="el-icon-plus" class="all">全部</el-button>
          <el-radio-group v-model="form.saleNumber">
            <el-radio :label="form.maxsale/2 - (form.maxsale/2 % 100)">1/2</el-radio>
            <el-radio :label="form.maxsale/3 - (form.maxsale/3 % 100)">1/3</el-radio>
            <el-radio :label="form.maxsale/4 - (form.maxsale/4 % 100)">1/4</el-radio>
            <el-radio :label="form.maxsale/5 - (form.maxsale/5 % 100)">1/5</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="卖出数量" :label-width="formLabelWidth">
          <el-input v-model="form.saleNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="sale-stock-info">
        <div class="sale-stock-top">{{fiveOrder.stockName}}</div>
        <table id="stocksaleoutinfo" border="0">
          <tr>
            <td>卖五</td>
            <td class="font-red">{{fiveOrder.fiveSale}}</td>
            <td>{{fiveOrder.saleFive}}</td>
          </tr>
          <tr>
            <td>卖四</td>
            <td class="font-red">{{fiveOrder.fourSale}}</td>
            <td>{{fiveOrder.saleFour}}</td>
          </tr>
          <tr>
            <td>卖三</td>
            <td class="font-red">{{fiveOrder.threeSale}}</td>
            <td>{{fiveOrder.saleThree}}</td>
          </tr>
          <tr>
            <td>卖二</td>
            <td class="font-red">{{fiveOrder.twoSale}}</td>
            <td>{{fiveOrder.saleTwo}}</td>
          </tr>
          <tr>
            <td>卖一</td>
            <td class="font-red">{{fiveOrder.oneSale}}</td>
            <td>{{fiveOrder.saleOne}}</td>
          </tr>
          <tr class="sale-stock-middle">
            <td>
              <strong>最新：</strong>
              <span id="newestPrice1">{{fiveOrder.nowNew}}</span>
            </td>
            <td></td>
            <td>
              <strong>涨幅：</strong>
              <span class="font-red">{{fiveOrder.rate}}</span>
            </td>
          </tr>
          <tr>
            <td>买一</td>
            <td class="font-red">{{fiveOrder.oneBuy}}</td>
            <td>{{fiveOrder.buyOne}}</td>
          </tr>
          <tr>
            <td>买二</td>
            <td class="font-red">{{fiveOrder.twoBuy}}</td>
            <td>{{fiveOrder.buyTwo}}</td>
          </tr>
          <tr>
            <td>买三</td>
            <td class="font-red">{{fiveOrder.threeBuy}}</td>
            <td>{{fiveOrder.buyThree}}</td>
          </tr>
          <tr>
            <td>买四</td>
            <td class="font-red">{{fiveOrder.fourBuy}}</td>
            <td>{{fiveOrder.buyFour}}</td>
          </tr>
          <tr>
            <td>买五</td>
            <td class="font-red">{{fiveOrder.fiveBuy}}</td>
            <td>{{fiveOrder.buyFive}}</td>
          </tr>
        </table>
        <div class="sale-stock-bottom">
          <div class="col-left">
            <strong>涨停：</strong>
            <span class="font-red">{{fiveOrder.upStop}}</span>
          </div>
          <div class="col-right">
            <strong>跌停：</strong>
            <span class="font-green">{{fiveOrder.downStop}}</span>
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
    <el-dialog title="委托确认" :visible.sync="dialogTableVisible" id="entrust_log">
      <el-table :data="gridData" id="entrust_affirm">
        <el-table-column property="title" label="" width="150"></el-table-column>
        <el-table-column property="name" label="" width="150"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendSale">确 定</el-button>
      </div>
    </el-dialog>
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
        dialogTableVisible: false,
        gridData: [{
          title: '股东账号',
          name: '',
        }, {
          title: '证券代码',
          name: '',
        }, {
          title: '委托方式',
          name: '',
        }, {
          title: '委托数量',
          name: '',
        }],
        queryInfo: {},
        formLabelWidth: '80px',
        listStyle: 'code-list ifind-hide',
        saleList: [],
        fiveOrder: {
          stockName: '-',
          oneBuy: '-',
          twoBuy: '-',
          threeBuy: '-',
          fourBuy: '-',
          fiveBuy: '-',
          oneSale: '-',
          twoSale: '-',
          threeSale: '-',
          fourSale: '-',
          fiveSale: '-',
          nowNew: '-',
          rate: '-',
          upStop: '-',
          downStop: '-',
          buyOne: '-',
          buyTwo: '-',
          buyThree: '-',
          buyFour: '-',
          buyFive: '-',
          saleOne: '-',
          saleTwo: '-',
          saleThree: '-',
          saleFour: '-',
          saleFive: '-'
        }
      }
    },
    methods: {
      submitSale() {
        this.dialogTableVisible = true
        this.gridData[0].name = this.queryInfo.userId
        this.gridData[1].name = this.form.stockCode
        var way = this.entrust(this.form.enstrustWay)
        this.gridData[2].name = way
        this.gridData[3].name = this.form.saleNumber
      },
      cancelForm() {
        this.form.stockCode = ''
        this.form.stockName = ''
        this.form.salePrice = ''
        this.form.fund = ''
        this.form.maxsale = ''
        this.form.saleNumber = ''
      },
      entrust(entrust){
        if(entrust == 'shijia'){
          return "市价委托"
        }else{
          return "限价委托"
        }
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
      selectData(sale) {
        this.listStyle = 'code-list ifind-hide'
        this.form.stockCode = sale.stockCode
        this.form.stockName = sale.stockName
        this.form.salePrice = sale.newPrice
        var info = JSON.stringify({
          stockCode: this.form.stockCode,
          stockName: this.form.stockName
        })
        console.log(info)
        this.$axios.post('/transaction/QUERY||FIVE.do', info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code != 100) {} else {
            this.fiveOrder = response.data.data
            console.log(this.fiveOrder)
          }
        }).catch()
        //发送请求进行获取最大可卖数量
        var stock = JSON.stringify({
          stockCode: sale.stockCode,
          userId: this.queryInfo.userId
        })
        this.$axios.post('/transaction/QUERY||USESALE.do', stock, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code != 100) {} else {
            this.form.maxsale = response.data.data
            this.form.saleNumber = response.data.data
          }
        }).catch()
      },
      sendSale() {
        this.dialogTableVisible = false
        var stock_info = JSON.stringify({
          stockCode: this.form.stockCode,
          entrustType: this.form.enstrustWay,
          buyPrice: this.form.salePrice,
          buyNumber: this.form.saleNumber,
          maxBuyNumber: this.form.maxsale,
          organizationId: this.queryInfo.organization,
          userId: this.queryInfo.userId,
          stockName: this.form.stockName,
          operation: '卖出'
        })
        this.$axios.post('/transaction/STOCK||SALE.do', stock_info, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          var code = response.data.code
          if (code != 100) {
            this.$message.error(response.data.msg)
          } else {
            this.$message({
              message: response.data.msg,
              type: 'success'
            });
          }
        }).catch()
      }
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
        if (response.data.code != 100) {
          this.$message.error(response.data.msg)
          this.$router.push('login')
        } else {
          this.queryInfo = response.data.data
          console.log('dafdfaf',this.queryInfo)
        }
      }).catch((error) => {
        this.$message.error("获取token状态异常")
      })
    }
  }
</script>

<style>
  #saleForm {
    margin-top: 10px;
    width: 50%;
    float: left;
  }

  .sale-stock-info {
    margin: 25px 150px 0px 0px;
    float: right;
    width: 380px;
    max-width: 430px;
    border: 1px solid #dcdcdc;

  }

  .sale-stock-info .sale-stock-top {
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #333;
    background: #f2f2f2;
  }

  table tbody tr {
    height: 46px;
  }

  .sale-stock-info table tbody td {
    line-height: 30px;
    color: #333;
    border: 0;
  }

  .sale-stock-middle {
    height: 35px;
    background: #f2f2f2;
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

  .sale-stock-bottom {
    height: 35px;
    line-height: 35px;
    color: #333;
    background: #f2f2f2;
  }
</style>
