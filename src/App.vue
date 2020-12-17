<template>
  <div id="app">
    <!-- 登录页背景图片  -->
    <div class="login-img">
      <img src="../static/images/profittrea.jpg" alt="图片正在加载中……" />
    </div>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .login-img{
    width: 100%;
    height: 50rem;
    /* 控制禁止滚动 */
    overflow: hidden;
  }
  .login-img img{
    width: 100%;
    height: auto;
  }
  /*
    不允许空行否则会报错
    Trailing spaces not allowed no-trailing-spaces
  */
</style>
