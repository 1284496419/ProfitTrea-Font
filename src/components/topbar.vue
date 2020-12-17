<template>
  <div class="top">
    <div class="topbar"></div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  width: 100%;
  height: 100px;
  background-color: #DC143C;
}
</style>
