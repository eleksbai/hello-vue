<template>
  <div id="app">
    <el-container v-if="this.$store.state.isLogin">
    <!--<el-container>-->
      <el-header class="header">
        <vheader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

    <el-container v-else>
      <vlogin></vlogin>
    </el-container>

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
      loginType: 'username'
    }
  },
  computed: {
  },
  methods: {
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
