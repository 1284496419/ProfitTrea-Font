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
          <th class="low">
            <font>标题</font>
          </th>
          <th class="low">
            <font>公告日期</font>
          </th>
        </tr>
      </thead>
      <tbody>

        <tr class="datarow" v-for="an in this.announce">
          <td class="nm">
            <div class="over2l">
              <font v-text="an.id"></font>
            </div>
          </td>
          <td>
            <div class="idx">
              <font v-text="an.announceCode"></font>
            </div>
          </td>
           <td class="high" v-text="an.announceName"></td>
          <td class="op">
            <p class="">
              <a :href="an.pdfUrl" v-text="an.announceTitle"></a>
            </p>
          </td>
          <td class="low" v-text="an.announceDate"></td>
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
  export default{
    name:'announcement',
    data(){
      return {
        announce:[]
      }
    },
    mounted() {
      this.$axios.get('/quotation/QUERY||ANNOUNCE.do')
      .then((response)=>{
        this.announce = response.data.data
        console.log(this.announce)
      }).catch()
    }
  }
</script>

<style>
  .dataTable th{
    text-align: center;
  }
  
  .newBlock {
    text-align: center;
    width: 1060.8px;
  }
</style>
