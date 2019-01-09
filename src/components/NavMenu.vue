<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">

        <li :key="item.id" class="nav-item" v-for="item in menu">
          <a :href="item.link" class="nav-link">
            <icon :name="item.icon"></icon>
            <span v-text="item.name"></span>
          </a>
        </li>

      </ul>
    </div>
  </nav>
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
