<template>
  <div>
    <h1 >你好,首页</h1>
    <p>{{city}}</p>

  </div>

</template>

<script>

import { city } from '@/api'

const axios = require('axios')
axios.get('http://127.0.0.1:5000/dev/?data=test-666')
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log(err)
  })
let url = 'http://127.0.0.1:5000/dev/?data=test-666'

// 同步调用
console.log('666')
axios.get(url).then(function (res) {
  console.log()
})
console.log('666')

// Make a request for a user with a given ID
// axios.get('http://127.0.0.1:5000/dev/?data=test-1')
//   .then(function (response) {
//     // handle success
//     console.log(response)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error)
//   })
//   .then(function () {
//     console.log('finally...test-1')
//   })
//
// let c1 = await axios.get('http://127.0.0.1:5000/dev/?data=test-2')
// console.log(c1)
//
// console.log('666')
// console.log(r1)
export default {
  data () {
    return {
      city: city()
    }
  },
  couputed: {
  },
  // props: {
  //   value: this.isLogin
  // },
  methods: {
  }
}
</script>

<style scoped>

</style>
