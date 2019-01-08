<template>
  <div>
    <child>若子组件没有slot，则这句话不会显示</child>
  </div>
</template>

<script>
import T2 from './T2'
export default {
  name: 'T1',
  components: {
    'child': T2
  }
}
</script>

<style scoped>

</style>
