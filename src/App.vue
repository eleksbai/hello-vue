<template>
  <div id="app">
    <router-view></router-view>
    <!--<el-container v-if="is_login" >-->
      <!--<el-header class="header" >-->
        <!--<vheader/>-->
      <!--</el-header>-->
      <!--<el-container>-->
        <!--<el-aside width="200px">-->
          <!--<navmenu></navmenu>-->
        <!--</el-aside>-->
        <!--<el-main>-->
          <!--<router-view></router-view>-->
        <!--</el-main>-->
      <!--</el-container>-->
    <!--</el-container>-->

    <!--<el-container v-else >-->
      <!--<vlogin></vlogin>-->
    <!--</el-container>-->

  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'
import Login from '@/components/Login'
export default {
  name: 'App',
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'vlogin': Login
  },
  data: function () {
    return {
      is_login: true
    }
  }

}

</script>

<style>
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
