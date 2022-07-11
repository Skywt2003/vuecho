<template>
  <nav class="navbar navbar-expand-lg bg-light shadow">
    <div class="container">
      <img :src="avatar" alt="" width="30" height="24" />
      <router-link class="navbar-brand" to="/">{{title}}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-for="navItem in links" :key="navItem.id" class="nav-link" aria-current="page" :to="navItem.url">{{navItem.title}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ['title', 'avatar', 'links']
}
</script>