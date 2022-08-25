<template>
    <div class="container flex items-center flex-col pt-32 pb-16">
        <img class="rounded-full shadow-xl" :src="avatar" :alt="title" :title="title" width="128" height="128" />
        <h1>{{ title }}</h1>
        <h5>{{ description }}</h5>
        <div class="my-5">
            <router-link
                class="mx-3"
                v-for="navItem in links"
                :key="navItem.id"
                :to="navItem.url">
            {{navItem.title}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    props: ['title', 'description', 'avatar', 'links']
}
</script>
