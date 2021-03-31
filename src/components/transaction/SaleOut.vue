<template>
  <div class="saleOut">
    <div class="saleOut_content">
      <el-form :model="form" id="saleForm">
        <el-form-item label="股票代码" :label-width="formLabelWidth">
          <el-input v-model="form.stockName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="股票名称" :label-width="formLabelWidth">
          <el-input v-model="form.stockName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="委托方式" :label-width="formLabelWidth">
          <el-select v-model="form.enstrustWay" placeholder="请选择委托方式">
            <el-option label="限价委托" value="xainjia"></el-option>
            <el-option label="市价委托" value="shijia"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="卖出价格" :label-width="formLabelWidth">
          <el-input v-model="form.salePrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最大可卖" :label-width="formLabelWidth">
          <el-input v-model="form.maxsale" autocomplete="off"></el-input>
          <el-button type="danger" icon="el-icon-plus">全部</el-button>
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
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">
        {{ loading ? '提交中 ...' : '确 定' }}
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
          enstrustWay: '',
          salePrice: '',
          fund: '',
          maxsale: '',
          saleNumber: ''
        },
        formLabelWidth: '80px',
      }
    },
    methods: {
      handleClose(done) {
        if (this.loading) {
          return;
        }
        this.$confirm('确定要提交表单吗？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {});
      },
      cancelForm() {
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
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

  .sale-stock-info{
    text-align: center;
    border: 1px solid #dcdcdc;
    float: right;
    width: 40%;
    margin-right:80px;
  }
  table{
    width: 100%;
  }
  .saleout_footer {
    float: left;
  }
</style>
