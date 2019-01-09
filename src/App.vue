<template>
  <div id="app">

    <div v-if="this.$store.state.token === ''">
      <vlogin></vlogin>

    </div>

    <div v-else>
      <!-- 顶部导航栏 -->
      <vheader></vheader>

      <div class="container-fluid">
        <div class="row">
          <!-- 左侧导航栏 -->
          <vnavmenu></vnavmenu>

          <main class="col-md-9 ml-sm-auto col-lg-10 px-4" role="main">
            <router-view></router-view>
          </main>

        </div>
      </div>

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
    'vnavmenu': NavMenu,
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
