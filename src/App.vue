<template>
  <div id="app">

    <div v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </div>
    <div>
      <button @click="toggleLoginType">Toggle login type</button>
    </div>

    <!--<router-view></router-view>-->
    <el-container key="index" v-if="loginType === 'username'">
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

    <el-container key="login" v-else>
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
      is_login: false,
      loginType: 'username'
    }
  },
  methods: {
    toggleLoginType: function () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
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
