<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        @close="handleClose"
        @open="handleOpen"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        router
        text-color="#fff"
        unique-opened>

        <el-submenu :index="item.id" :key="item.id" v-for="item in menu">
          <template slot="title">
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group :key="sub.componentName" class="over-hide" v-for="sub in item.sub">
            <el-menu-item :index="sub.componentName" v-text="sub.name">
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
  .over-hide {
    overflow: hidden;
  }
</style>

<script>
import menu from '@/config/menu-config'
export default {
  data () {
    return {
      menu: menu
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
