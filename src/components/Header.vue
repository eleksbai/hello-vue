<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">手术室排班系统</a>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a @click="logout" class="nav-link" href="/">Sign out</a>
      </li>
    </ul>

  </nav>

</template>

<style scoped>
</style>

<script>
export default {
  // couputed: {
  // },
  // props: {
  //   value: this.isLogin
  // },
  methods: {
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>
