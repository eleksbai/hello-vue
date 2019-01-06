<template>
  <div id="app">

    <el-container>
      <el-header>头部</el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>主要内容区</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'App',
  components: {
    'navmenu': NavMenu
  }
}

</script>

<style>

</style>
