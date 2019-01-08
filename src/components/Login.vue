<template>
      <!--<el-container >-->
        <div>
          <h1>登录</h1>
          <!--<div></div>-->
          <button  v-on:click="user_login">点击登录</button>
          <p v-if="value">
            登录成功...
          </p>
          <p v-else>登录失败</p>
          <p>99999</p>
          <!--<div>-->
            <!--hello-->
          <!--</div>-->

        </div>
      <!--</el-container>-->
  <!--<h1>登录</h1>-->

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      value: this.isLogin
    }
  },
  // props: {
  //   value: this.isLogin
  // },
  methods: {
    user_login () {
      this.$store.commit('login')
      this.$router.push({path: '/'})
      // this.$router.push()
    }
  }
}
</script>

<style scoped>

</style>
