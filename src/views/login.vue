<template>
  <div class="login">
    <h1 class="toIndex" @click="toIndex">ProfitTrea</h1>
    <Form></Form>
    <!-- <h1><a @click="toIndex">ProfitTrea</a></h1> -->
    <!-- <div class="login-img">
      <img src="../../static/images/profittrea.jpg" alt="图片正在加载中……" />
    </div> -->
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
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 50px; */
    /* margin: 10px 0 0 ; */
  }
  /* a{
    text-decoration: none;
    color: #DC143C;
    cursor: pointer;
  }
  .login-img{
    width: 100%;
    height: 50rem;
    overflow: hidden;
    z-index: 100;
  }
  .login-img img{
    width: 100%;
    height: auto;
  }
  .login-bord{
    text-align: center;
    position: absolute;
    width: 400px;
    height: 500px;
    background-color: white;
    z-index: 101;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 87%;
    border-radius: 10px;
  }
  .head{
    margin-top: 35px;
  }
  .el-form{
    text-align: center;
    margin-top: 30px;
  }
  .el-form-item{
    margin-bottom: 5px;
  }
  .el-form-item__label{
    color: #DC143C;
    font-size: 17px;
    font-weight: bold;
  }
  .el-input{
    width: 80%;
  } */
  /*
    不允许空行否则会报错
    Trailing spaces not allowed no-trailing-spaces
  */
</style>
