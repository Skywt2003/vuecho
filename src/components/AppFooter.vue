<template>
    <div class="container text-center m-16">
        <p><span id="nis"></span><a :href="'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + getNisNum()" target="_blank">{{nis}}</a> · <a href="https://beian.miit.gov.cn/" target="_blank">{{icp}}</a></p>
        <p>© {{title}} · Powered by <a href="https://typecho.org/">Typecho</a> & <a href="https://github.com/Skywt2003/vuecho">Vuecho</a></p>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    props: ['title', 'icp', 'nis'],
    methods: {
        getNisNum(){
            return this.nis.substring(5,19);
        }
    }
}
</script>

<style>
#nis:before {
    content: url('../img/beian.png');
    vertical-align: middle;
    display: inline-block;
}
</style>