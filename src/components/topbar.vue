<template>
  <div class="topbar">
    <div class="topbar-container">
      <a href="">
        <span id="logo">ProfitTrea</span>
      </a>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#DC143C" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">市场</template>
          <el-submenu index="1-1">
            <template slot="title">证券市场</template>
            <el-menu-item index="1-1-1" @click="toMarket">新三板</el-menu-item>
            <el-menu-item index="1-1-2">债券</el-menu-item>
            <el-menu-item index="1-1-3">基金+ETF</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">衍生品市场</template>
            <el-menu-item index="1-2-1">外汇</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">数据</template>
          <el-submenu index="2-1">
            <template slot="title">实时数据</template>
            <!-- 爬去该页面http://quote.eastmoney.com/center/gridlist.html#neeq_selected新三板动态爬去，其他静态存储数据库-->
            <el-menu-item index="2-1-1" @click="toData">新三板数据</el-menu-item>
            <el-menu-item index="2-1-2">债券数据</el-menu-item>
            <el-menu-item index="2-1-3">基金数据</el-menu-item>
            <el-menu-item index="2-1-4">期权数据</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">行情信息</template>
            <el-menu-item index="2-2-1" @click="toQuotation">焦点新闻</el-menu-item>
            <!-- 爬取该页面新闻http://finance.eastmoney.com/yaowen.html -->
            <el-menu-item index="2-2-2">咨询公告</el-menu-item>
            <!-- 爬去该页面http://xinsanban.eastmoney.com/Article/NoticeList-->
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">服务</template>
          <el-submenu index="3-1">
            <template slot="title">优化交易</template>
            <el-menu-item index="3-1-1">量化交易</el-menu-item>
            <el-menu-item index="3-2-2">优化策略分析</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">规则</template>
            <el-menu-item index="3-2-1">使用规则</el-menu-item>
          </el-submenu>
        </el-submenu>
        <div class="top">
          <div class="el-icon-search" @click="drawer = true">
            <el-drawer title="" :visible.sync="drawer" :direction="direction" :before-close="handleClose" size="40%">
              <div class="custom-search">
                <div class="search-container">
                  <input type="text" placeholder="搜索产品/服务">
                  <div class="el-icon-search searchProduct"></div>
                </div>
                <div class="populars-searches">
                  <h6 class="popular-title">
                    <font></font>
                  </h6>
                  <div class="searches">
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                    <a href="" class="search-box">
                      <span class="box-title">
                        <font>NYMEX WTI原油期货和期权</font>
                      </span>
                      <span class="el-icon-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </el-drawer>
          </div>
          <el-dropdown class="sign-out" @command="handleSignOut">
              <div class="el-icon-user-solid"></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="个人信息">个人信息</el-dropdown-item>
              <el-dropdown-item command="退出">
                  退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu>
    </div>

    </el-menu>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        drawer: false,
        direction: 'rtl',
        role:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      login() {
        this.$router.push({
          path: '/login'
        })
      },
      toIndex() {
        this.$router.push('/')
      },
      toMarket(){
        this.$router.push('/transaction')
      },
      toData(){
        this.$router.push('/data')
      },
      toQuotation(){
        this.$router.push('/quotation')
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleSignOut(command){
        if(command == "退出"){
          localStorage.removeItem('Authorization');
          const h = this.$createElement
          this.$notify({
            title: '提示',
            message: h('i', { style: 'color: teal' }, '退出成功'),
            duration: 1500
          })
          this.$router.push('/login')
        }
        if(command == "个人信息"){
          this.$router.push({
            name:'info',
            params:{
              role:this.role
            }
          })
        }
      }
    },
    mounted() {
      this.role = this.$route.params.role
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topbar {
    height: 82px;
    color: white;
    background-color: #DC143C;
  }

  .el-menu-demo {
    background-color: #DC143C;
    float: right;
    width: 80%;
  }

  #logo {
    /* display: block; */
    font-size: 35px;
    width: auto;
    margin-left: 80px;
    float: left;
    margin-top: 10px;
    /* cursor: pointer; */
    font-family: "bodoni mt";
    color: white;
  }

  .el-menu {
    border: none;
  }

  .sign-out{
    color: white;
  }
  .el-menu .el-submenu {
    padding-top: 0.3125rem;
    width: 200px;
    text-align: center;
    font-size: 20px;
  }

  .el-submenu__title {
    font-size: 20px !important;
  }

  .top {
    margin: 30px 80px;
    float: right;
  }

  .el-icon-search {
    margin-right: 30px;
  }

  .el-icon-user-solid {
    margin-right: 30px;
  }

  #login {
    color: white;
    background-color: #DC143C;
  }

  .custom-search {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    color: #000000;
  }

  .search-container {
    display: flex;
    height: 45px;
  }

  .searchProduct{
    font-size: 30px;
    margin: 5px 0px 0px 20px;
  }

  .search-container input {
    line-height: 44px;
    font-size: 24px;
    color: #fff;
    border-left: 2px solid #5a6874;
    width: 100%;
  }

  .popular-searches {
    padding-top: 2.6875rem;
  }

  .popular-title {
    color: #e3e935;
    font-size: .625rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .0625rem;
  }

  .searches {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: .375rem;
  }

  .search-box {
    display: flex;
    justify-content: space-between;
    width: 40%;
    background: #5a6874;
    color: #fff;
    margin: 1.5125rem 0;
    border-radius: .1875rem;
    height: 3.75rem;
    align-items: center;
    padding: 0 1.25rem;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  .popular-searches .searches .search-box .box-title {
    padding-right: .3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
</style>
