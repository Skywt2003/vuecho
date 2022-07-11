<template>
  <article>
    <img v-if="item.fields.headPic.value != ''" :src="item.fields.headPic.value" :alt="item.title" :title="item.title" class="mt-2 mb-2" />
    <h1 v-html="item.title"></h1>
    <hr>
    <div v-html="item.text"></div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostContent',
  data(){
    return {
      item: {
        "title":"Hello World!",
        "cid":"403",
        "created":"1510477500",
        "type":"post",
        "slug":"helloworld",
        "commentsNum":"0",
        "text":"<p>Hello World!</p>",
        "password":"",
        "categories":[{
            "mid":"105","name":"测试分类",
            "slug":"life",
            "type":"category",
            "description":"",
            "count":"18",
            "order":"2",
            "parent":"0",
            "cid":"403",
            "directory":["life"],
            "permalink":"https://blog.skywt.cn/category/life/",
            "url":"https://blog.skywt.cn/category/life/",
            "feedUrl":"https://blog.skywt.cn/feed/category/life/",
            "feedRssUrl":"https://blog.skywt.cn/feed/rss/category/life/",
            "feedAtomUrl":"https://blog.skywt.cn/feed/atom/category/life/"
          }],
        "category":"life",
        "directory":["life"],
        "date":{
          "timeStamp":1510506300,
          "year":"2017",
          "month":"11",
          "day":"12"
        },
        "year":"2017",
        "month":"11",
        "day":"12",
        "hidden":false,
        "pathinfo":"/posts/helloworld",
        "permalink":"https://blog.skywt.cn/posts/helloworld",
        "url":"https://blog.skywt.cn/posts/helloworld",
        "isMarkdown":true,
        "feedUrl":"https://blog.skywt.cn/feed/posts/helloworld",
        "feedRssUrl":"https://blog.skywt.cn/feed/rss/posts/helloworld",
        "feedAtomUrl":"https://blog.skywt.cn/feed/atom/posts/helloworld",
        "fields":{
          "headPic":{
            "name":"headPic",
            "type":"str",
            "value":""
          },
          "linkTo":{
            "name":"linkTo",
            "type":"str",
            "value":""
          },
          "pageIcon":{
            "name":"pageIcon",
            "type":"str",
            "value":""
          }
        },
        "csrfToken":"o+pnGI7+8+LYIJ1KdDD5aEKbUqgvvJWxCrHui9rkO84="
      }
    }
  },
  created(){
    this.getPost();
  },
  updated(){
    this.getPost();
  },
  methods: {
    getPost(){
      var _this = this;
      axios.get('https://blog.skywt.cn/api/post', {
        params: {
          slug: this.$route.params.slug
        }
      })
      .then(function (response) {
        _this.item = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

article {
  img {
    @extend .img-fluid;
    @extend .shadow;
    @extend .rounded
  }
}

</style>