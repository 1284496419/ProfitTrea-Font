<template>
  <div clss="info">
    <topbar :class="isShow"></topbar>
    <Top :class="isOn"></Top>
    <div class="info-container">
      <div class="user-info">
        <el-tabs v-model="activeName" @tab-click="handleClick" id="info-tab">
          <el-tab-pane label="个人信息" name="first" :class="person_info">
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
  import Top from '@/components/administrator/Top.vue'
  import PersonInfo from '@/components/infomation/PersonInfo.vue'
  import AccountInfo from '@/components/infomation/AccountInfo.vue'
  import ChangePass from '@/components/infomation/ChangePass.vue'
  export default {
    name: 'info',
    data() {
      return {
        activeName: 'first',
        isShow:'',
        isOn:'',
        person_info:''
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
      ChangePass,
      Top
    },
    mounted() {
      var role = this.$route.params.role
      console.log('role' + role)
      if(role === 14){
        this.activeName = 'first'
        this.isOn = 'show-top'
        this.person_info = ''
      }else{
        this.activeName = 'second'
        this.isShow = 'show-top'
        this.person_info = 'show-top'
      }
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
  .show-top{
    display: none;
  }
</style>
