<template>
  <div class="data">
    <topbar/>
    <DataMain></DataMain>
  </div>
</template>

<script>
  import topbar from '@/components/topbar.vue'
  import DataMain from '@/components/data/dataMain.vue'
  export default{
    data(){
      return{

      }
    },
    components:{
      topbar,
      DataMain
    }
  }
</script>

<style>
</style>
