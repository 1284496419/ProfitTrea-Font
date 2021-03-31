<template>
  <div class="quotation">
    <topbar/>
    <QuotationInfo></QuotationInfo>
  </div>
</template>

<script>
  import topbar from '@/components/topbar.vue'
  import QuotationInfo from '@/components/quotation/QuotationInfo.vue'
  export default{
    data(){
      return{

      }
    },
    components:{
      topbar,
      QuotationInfo
    }
  }
</script>

<style>
</style>
