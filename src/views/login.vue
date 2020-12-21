<template>
  <div class="login">
    <h1 class="toIndex" @click="toIndex">ProfitTrea</h1>
    <Form></Form>
  </div>
</template>

<script>
import Form from '@/components/login/Form.vue'

export default {
  components: {
    Form
  },
  methods: {
    toIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .login{
    margin: auto;
    width: 100%;
    height: 800px;
    /* 控制禁止滚动 */
    background-size: 100% auto;
    background-image: url(../../static/images/profittrea.jpg);
    text-align: center;
  }
  .toIndex{
    color: #DC143C;
    font-size: 45px;
    display: inline-block;
    margin: auto;
    cursor: pointer;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  /*
    不允许空行否则会报错
    Trailing spaces not allowed no-trailing-spaces
  */
</style>
