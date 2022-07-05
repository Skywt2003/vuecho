<template>
    <div class="container mb-5 mt-5 text-center">
        © {{title}} | Powered by <a href="https://typecho.org/">Typecho</a> & <a href="https://github.com/Skywt2003/vuecho">Vuecho</a>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    props: ['title']
}
</script>