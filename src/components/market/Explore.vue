<template>
  <div class="explore">
    <span>探索我们的市场和交易</span>
    <div class="e-main">
      <div class="e-main-block">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="e-main-block">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.explore{
  height: 750px;
  width: 90%;
  background-color: rgba(205,51,51,80%);
  margin: auto;
  border-radius: 10px;
}
.explore > span{
  display: inline-block;
  color: white;
  font-size: 30px;
  margin: 30px 0 0 50px;
}
.e-main{
  width: 93.5%;
  height: 90%;
  margin: auto;
}
.e-main-block{
  width: 100%;
  height: 50%;
}
.e-main-block > div{
  width: 30%;
  height: 90%;
  float: left;
  background-color: white;
}
.e-main-block > div:not(:first-child){
  margin-left: 5%;
}
</style>
