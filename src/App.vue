<template>
  <div id="app">
    <nav-bar :title="title" :avatar="avatar" :links="pageList"></nav-bar>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
    <AppFooter :title="title"></AppFooter>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
const config = require('./config');

export default {
  name: "App",
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      title: config.default.title,
      avatar: config.default.avatar,
      pageList: config.default.pageList
    }
  }
}
</script>

<style lang="scss">
.container {
  max-width: 720px !important;
}

hr {
  opacity: 0.1 !important;
}
</style>