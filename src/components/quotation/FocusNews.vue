<template>
  <div class="focusNews">
    <div class="newsList">
      <ul>
        <li id="news1" style="position: relative;" v-for="newlist in this.news">
          <div class="newimg">
            <img :src="newlist.imgUrl" alt="" class="news-img" width="120" height="88">
          </div>
          <div class="news-main">
            <p class="news-title">
              <a :href="newlist.newsUrl" v-text="newlist.newsTitle"></a>
            </p>
            <p class="news-info" v-text="newlist.newsContent">

            </p>
            <p class="news-time" v-text="newlist.newsDate"></p>
          </div>
        </li>
        <!-- <li id="news2" style="position: relative;">
          <div class="newimg">
            <img src="" alt="" class="news-img" width="120" height="88">
          </div>
          <div class="news-main">
            <p class="news-title">
              <a href="">深市主板与中小板下周二合并！四大调整、七件规则同步实施 影响到底有多大？</a>
            </p>
            <p class="news-info">
              据了解，原中小板上市公司的证券类别变更为“主板A股”，证券代码和证券简称保持不变；原中小板指数、中小板综合指数、中小板300指数等指数的名称...
            </p>
            <p class="news-time">4月1日 00:23</p>
          </div>
        </li>
        <li id="news3" style="position: relative;">
          <div class="newimg">
            <img src="" alt="" class="news-img" width="120" height="88">
          </div>
          <div class="news-main">
            <p class="news-title">
              <a href="">深市主板与中小板下周二合并！四大调整、七件规则同步实施 影响到底有多大？</a>
            </p>
            <p class="news-info">
              据了解，原中小板上市公司的证券类别变更为“主板A股”，证券代码和证券简称保持不变；原中小板指数、中小板综合指数、中小板300指数等指数的名称...
            </p>
            <p class="news-time">4月1日 00:23</p>
          </div>
        </li>
        <li id="news4" style="position: relative;">
          <div class="newimg">
            <img src="" alt="" class="news-img" width="120" height="88">
          </div>
          <div class="news-main">
            <p class="news-title">
              <a href="">深市主板与中小板下周二合并！四大调整、七件规则同步实施 影响到底有多大？</a>
            </p>
            <p class="news-info">
              据了解，原中小板上市公司的证券类别变更为“主板A股”，证券代码和证券简称保持不变；原中小板指数、中小板综合指数、中小板300指数等指数的名称...
            </p>
            <p class="news-time">4月1日 00:23</p>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'foucusNews',
    data(){
      return {
        news:[]
      }
    },
    mounted() {
      this.$axios.get('/quotation/QUERY||NEWS.do')
      .then((response)=>{
        this.news = response.data.data
      }).catch()
    }
  }
</script>

<style>
  .newsList {
    width: 1060.8px;
    float: left;
  }

  .newsList ul li {
    height: 129px;
    border-bottom: 1px solid #BBD4E8;
  }

  .newimg {
    float: left;
    width: 135px;
    vertical-align: top;
    margin-left: 5px;
    margin-top: 9px;
  }

  .newsImg {
    border: 1px solid #b4b1b1;
  }

  .news-main {
    font-size: 12px;
    float: left;
    width: 900px;
    margin-top: 9px;
    vertical-align: top;
  }

  .news-title {
    width: 500px;
    font: 20px/35px "微软雅黑", "simhei";
    height: 31px;
    overflow: hidden;
    width: 475px;
  }

  a {
    display: inline-block;
    outline-style: none;
    color: #00349a;
    text-decoration: none;
  }

  p {
    display: block;
    margin-block-start: 0px;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .news-info {
    height: 52px;
    overflow: hidden;
    color: #818181;
    line-height: 26px;
  }

  .news-time {
    color: #818181;
    line-height: 22px;
    width: 20%;
    text-align: right;
    position: absolute;
    bottom:0px;
    right: 15px;
    display: inline-block;
  }
</style>
