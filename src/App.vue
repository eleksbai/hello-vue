<template>
  <div id="app">
    <div v-if="this.$store.state.isLogin">
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">手术室排班系统</a>

        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">

                  <a class="nav-link" href="#" id="bar-1">
                    <span data-feather="home"></span>
                    主页 <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item">

                  <a class="nav-link" href="#" id="bar-2">
                    <span data-feather="file"></span>
                    用户管理
                  </a>
                </li>
                <li class="nav-item">

                  <a class="nav-link" href="#" id="bar-3">
                    <span data-feather="file"></span>
                    上传历史文件
                  </a>
                </li>

              </ul>
            </div>
          </nav>

          <main class="col-md-9 ml-sm-auto col-lg-10 px-4" role="main">
            <router-view></router-view>
          </main>

        </div>
      </div>
    </div>

    <div v-else>
      <vlogin></vlogin>
    </div>

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

<style lang="css" scoped>
  /*!*@import "src/assets/sass/abstracts/abstracts";*! */
  /*@import "src/assets/css/dashboard.css";*/
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
