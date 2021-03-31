<template>
  <div clss="info">
    <topbar></topbar>
    <div class="info-container">
      <div class="user-info">
        <el-tabs v-model="activeName" @tab-click="handleClick" id="info-tab">
          <el-tab-pane label="个人信息" name="first">
            <PersonInfo></PersonInfo>
          </el-tab-pane>
          <el-tab-pane label="账号信息" name="second">
            <AccountInfo></AccountInfo>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="third">
            <ChangePass></ChangePass>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import topbar from '@/components/topbar.vue'
  import PersonInfo from '@/components/infomation/PersonInfo.vue'
  import AccountInfo from '@/components/infomation/AccountInfo.vue'
  import ChangePass from '@/components/infomation/ChangePass.vue'
  export default {
    name: 'info',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      topbar,
      PersonInfo,
      AccountInfo,
      ChangePass
    }
  }
</script>

<style>
  .info-container {
    width: 100%;
    height: 700px;
    background-color: rgb(243, 245, 249);
    overflow-x: hidden;
    position: relative;
  }

  .user-info {
    width: 1128px;
    margin: 48px auto 0 auto;

  }

  #info-tab {
    border-radius: 10px;
    border: 1px solid #f0f0f0;
    width: 100%;
    background: #FFFFFF;
  }
  #info-tab .el-tabs__item{
    height: 50px;
    line-height: 50px;
  }
  
  #tab-first{
    padding-left: 20px;
  }
</style>
