<template>
  <div id="app">
    <app-header :title="title" :description="description" :avatar="avatar" :links="pageList"></app-header>
    <div>
      <router-view></router-view>
    </div>
    <AppFooter :title="title" :icp="icp" :nis="nis"></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
const config = require('./config');

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      title: config.default.title,
      description: config.default.description,
      avatar: config.default.avatar,
      pageList: config.default.pageList,
      icp: config.default.icp,
      nis: config.default.nis
    }
  }
}
</script>

<style>
  @import url('https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap');

  .font-serif {
    font-family: 'Noto Serif SC', serif;
  }

  .container {
    @apply max-w-max md:max-w-screen-md mx-auto;
    @apply font-serif text-base leading-normal;
  }

  h1 { @apply text-4xl my-5 font-bold; }
  h2 { @apply text-3xl my-4 font-bold; }
  h3 { @apply text-2xl my-3 font-bold; }
  h4 { @apply text-xl my-2 font-semibold; }
  h5 { @apply text-lg my-1 font-semibold; }

  p, ul, pre, code, blockquote, q { @apply mb-5; }

  pre, code { @apply overflow-scroll; }

  ul { @apply ml-5; }
  li { @apply list-disc list-outside; }
  ul > li > p { @apply my-0 inline-block; }
  li > ul { @apply my-0; }

  a {
    @apply text-yellow-700 underline;
    @apply hover:text-yellow-600;
    @apply transition duration-500 ease-in-out;
  }

  img, pre { @apply rounded-md shadow-lg; }

  hr { @apply my-5; }

  blockquote {
    @apply pl-5 border-l-2;
  }
</style>