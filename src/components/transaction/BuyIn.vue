<template>
  <div class="buyIn">
    <div class="buyIn_content">
      <el-form :model="form" id="buyForm">
        <el-form-item label="股票代码" :label-width="formLabelWidth">
          <el-input v-model="form.stockCode" autocomplete="off" @input="buySearch()" @blur="closeBuyList()"></el-input>
          <ul :class="buyStyle">
            <li class="buy-item" v-for="item in buyStock_list" @click="inputData(item)"
              @mousedown="preventBlur($event)">
              <font v-text="item.stockName + '(' + item.stockCode + ')'"></font>
            </li>
          </ul>
        </el-form-item>
        <el-form-item label="股票名称" :label-width="formLabelWidth">
          <el-input v-model="form.stockName" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="委托方式" :label-width="formLabelWidth">
          <el-select v-model="form.entrustType" placeholder="请选择委托方式">
            <el-option label="限价委托" value="xianjia"></el-option>
            <el-option label="市价委托" value="shijia"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="买入价格" :label-width="formLabelWidth">
          <el-input v-model="form.buyPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="可用资金" :label-width="formLabelWidth">
          <el-input v-model="form.fund" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="最大可买" :label-width="formLabelWidth" id="maxBuy">
          <el-input v-model="form.maxBuy" autocomplete="off" readonly></el-input>
          <el-button type="danger" icon="el-icon-plus" class="all">全部</el-button>
          <el-radio-group v-model="form.buyNumber">
            <el-radio :label="form.maxBuy/2 - (form.maxBuy/2 % 100)">1/2</el-radio>
            <el-radio :label="form.maxBuy/3 - (form.maxBuy/3 % 100)">1/3</el-radio>
            <el-radio :label="form.maxBuy/4 - (form.maxBuy/4 % 100)">1/4</el-radio>
            <el-radio :label="form.maxBuy/5 - (form.maxBuy/5 % 100)">1/5</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="买入数量" :label-width="formLabelWidth">
          <el-input v-model="form.buyNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="buy-stock-info">
        <div class="buy-stock-top">{{fiveOrder.stockName}}</div>
        <table id="stockbuyinfo" border="0">
          <tr>
            <td>卖五</td>
            <td class="font-red">{{fiveOrder.fiveSale}}</td>
            <td>{{fiveOrder.saleOne}}</td>
          </tr>
          <tr>
            <td>卖四</td>
            <td class="font-red">{{fiveOrder.fourSale}}</td>
            <td>{{fiveOrder.saleTwo}}</td>
          </tr>
          <tr>
            <td>卖三</td>
            <td class="font-red">{{fiveOrder.threeSale}}</td>
            <td>{{fiveOrder.saleThree}}</td>
          </tr>
          <tr>
            <td>卖二</td>
            <td class="font-red">{{fiveOrder.twoSale}}</td>
            <td>{{fiveOrder.saleFour}}</td>
          </tr>
          <tr>
            <td>卖一</td>
            <td class="font-red">{{fiveOrder.oneSale}}</td>
            <td>{{fiveOrder.saleFive}}</td>
          </tr>
          <tr class="buy-stock-middle">
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
        <div class="buy-stock-bottom">
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
    <div class="buyIn_footer">
      <el-button @click="cancelForm">重 置</el-button>
      <el-button type="primary" @click="submitBuy">
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
        <el-button type="primary" @click="sendBuy">确 定</el-button>
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
          entrustType: 'shijia',
          buyPrice: '',
          fund: '',
          maxBuy: '',
          buyNumber: ''
        },
        userId:'',
        formLabelWidth: '80px',
        buyStyle: 'buy-list ifind-hide',
        buyStock_list: [],
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
        dialogTableVisible: false,
        fiveOrder: {
          stockName:'-',
          oneBuy:'-',
          twoBuy:'-',
          threeBuy:'-',
          fourBuy:'-',
          fiveBuy:'-',
          oneSale:'-',
          twoSale:'-',
          threeSale:'-',
          fourSale:'-',
          fiveSale:'-',
          nowNew:'-',
          rate:'-',
          upStop:'-',
          downStop:'-',
          buyOne:'-',
          buyTwo:'-',
          buyThree:'-',
          buyFour:'-',
          buyFive:'-',
          saleOne:'-',
          saleTwo:'-',
          saleThree:'-',
          saleFour:'-',
          saleFive:'-'
        }
      }
    },
    methods: {
      submitBuy() {
        this.dialogTableVisible = true
        this.gridData[0].name = this.userId
        this.gridData[1].name = this.form.stockCode
        var type = this.entrust(this.form.entrustType)
        this.gridData[2].name = type
        this.gridData[3].name = this.form.buyNumber
      },
      sendBuy() {
        this.dialogTableVisible = false
        var token = localStorage.getItem('Authorization')
        var info = JSON.stringify({
          userName: token
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
            var user = response.data.data
            var stock_info = JSON.stringify({
              stockCode: this.form.stockCode,
              entrustType: this.form.entrustType,
              buyPrice: this.form.buyPrice,
              usefulFund: this.form.fund,
              buyNumber: this.form.buyNumber,
              maxBuyNumber: this.form.maxBuy,
              organizationId: user.organization,
              userId: user.userId,
              stockName: this.form.stockName,
              operation: '买入'
            })
            this.$axios.post('/transaction/STOCK||BUY.do', stock_info, {
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
        })
      },
      cancelForm() {
        console.log('这是重置')
        this.form.stockCode = ''
        this.form.stockName = ''
        this.form.buyPrice = ''
        this.form.fund = ''
        this.form.maxBuy = ''
        this.form.buyNumber = ''
      },
      buySearch() {
        this.buyStyle = 'buy-list'
        //调用查询接口
        console.log(this.form.stockCode)
        var tran_stock = JSON.stringify({
          stockCode: this.form.stockCode
        })
        this.$axios.post('/transaction/QUERY||BUYSTOCK.do', tran_stock, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          this.buyStock_list = response.data.data
        }).catch((error) => {
          console.log(error)
        })
      },
      entrust(entrust){
        if(entrust == 'shijia'){
          return "市价委托"
        }else{
          return "限价委托"
        }
      },
      closeBuyList() {
        this.buyStyle = 'buy-list ifind-hide'
      },
      preventBlur(event) {
        //不触发输入框失去焦点事件
        event.preventDefault();
      },
      inputData(item) {
        var token = localStorage.getItem('Authorization')
        var share = JSON.stringify({
          stockCode: token
        })
        this.$axios.post('/transaction/QUERY||SHARE.do', share, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          this.form.fund = response.data.data.availableBalance
          console.log(this.form.buyPrice)
          var buyInt = parseInt(this.form.fund / this.form.buyPrice)
          var buy_number = buyInt - (buyInt % 100)
          this.form.maxBuy = buy_number
          this.form.buyNumber = buy_number
        }).catch()
        this.buyStyle = 'buy-list ifind-hide'
        this.form.stockCode = item.stockCode
        this.form.stockName = item.stockName
        this.form.buyPrice = item.newPrice

        //发送请求进行获取五档数据
        var stock = JSON.stringify({
          stockCode: item.stockCode,
          stockName: item.stockName
        })
        this.$axios.post('/transaction/QUERY||FIVE.do', stock, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((response) => {
          if (response.data.code != 100) {} else {
            this.fiveOrder = response.data.data
            console.log(this.fiveOrder)
          }
        }).catch()

      }
    },
    mounted(){
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

        } else {
          this.userId = response.data.data.userId
        }
      }).catch((error) => {
        this.$message.error("获取token状态异常")
      })
    }
  }
</script>

<style>
  #buyForm {
    margin-top: 10px;
    width: 50%;
    float: left;
  }

  .buy-stock-info {
    margin: 25px 150px 0px 0px;
    float: right;
    width: 380px;
    max-width: 430px;
    border: 1px solid #dcdcdc;
  }

  .buy-stock-top {
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #333;
    background: #f2f2f2;
  }

  table {
    text-align: center;
    width: 100%;
    background: 0 0;
    border-collapse: collapse;
    table-layout: fixed;
    border-spacing: 0;
  }

  .buy-stock-middle {
    text-align: center;
    height: 35px;
    background: #f2f2f2;
  }

  .buyIn_footer {
    float: left;
    margin: 50px 0px 0px 220px;
  }

  .buy-list {
    position: absolute;
    top: 41px;
    left: 0;
    width: 99.4%;
    max-height: 184px;
    overflow-y: auto;
    border: 1px solid #dee1ea;
    z-index: 1;
  }

  .buy-list li {
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

  .buy-item:hover {
    background-color: #f2f2f2;
  }

  #maxBuy .el-input {
    width: 70%;
  }

  .all {
    margin-left: 8px;
  }

  #entrust_affirm .el-table__header-wrapper {
    display: none;
  }

  #entrust_log .el-dialog {
    width: 25%;
  }

  #entrust_log .el-table__body {
    margin: auto;
  }

  .buy-stock-bottom {
    height: 35px;
    line-height: 35px;
    color: #333;
    background: #f2f2f2;
  }

  .col-left {
    float: left;
    margin-left: 30px;
  }

  .col-right {
    float: right;
    margin-right: 30px;
  }
</style>
