<template>
  <div>
    <h1>登录</h1>
    <p>计数:{{ this.$store.state.count }}</p>
    <button v-on:click="user_login">点击登录</button>
    <p v-if="value">
      登录成功...
    </p>
    <p v-else>登录失败</p>
    <p>99999</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      value: this.isLogin
    }
  },
  couputed: {
  },
  // props: {
  //   value: this.isLogin
  // },
  methods: {
    user_login () {
      this.$store.commit('login', '666')
      this.$store.commit('increment')

      this.$router.push({path: '/'})
      // this.$router.push()
    }
  }
}
</script>

<style scoped>

</style>
