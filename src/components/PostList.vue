<template>
    <template v-for="postItem in postList" :key="postItem.cid" >
      <section class="mt-3 mb-3">
        <img v-if="postItem.fields.headPic.value != ''" :src="postItem.fields.headPic.value" :alt="postItem.title" :title="postItem.title" class="mt-2 mb-2 shadow img-fluid rounded" />
        <h2><router-link :to="'/post/'+postItem.slug" v-html="postItem.title"></router-link></h2>
        <p v-html="postItem.digest"></p>
      </section>
      <hr>
    </template>
    <!-- <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li v-for="i in pages" :key="i" class="page-item">
          <a class="page-link" :class="{'active':(i==page)}" href="#">{{i}}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav> -->
</template>

<script>
import axios from 'axios'

export default {
  name: "PostList",
  data() {
    return {
      page: 1,
      pageSize: 10,
      nowPageSize: 10,
      pages: 1,
      postList: [
        {
          "cid": "2775", 
          "title": "title",
          "created": "1655712120",
          "modified": "1655712463",
          "slug": "automatic-remote-dr-solution-for-servers-free",
          "commentsNum": "3",
          "type": "post",
          "digest": "...",
          "password": "",
          "categories":[
            {
              "mid": "112",
              "name": "name",
              "slug": "tech",
              "type": "category",
              "description": "",
              "count": "30",
              "order": "4",
              "parent": "0",
              "cid": "2775",
              "directory": ["tech"],
              "permalink": "https://blog.skywt.cn/category/tech/",
              "url": "https://blog.skywt.cn/category/tech/",
              "feedUrl": "https://blog.skywt.cn/feed/category/tech/",
              "feedRssUrl": "https://blog.skywt.cn/feed/rss/category/tech/",
              "feedAtomUrl": "https://blog.skywt.cn/feed/atom/category/tech/"
            }
          ],
          "category": "tech",
          "directory": ["tech"],
          "date": {
            "timeStamp": 1655740920,
            "year": "2022",
            "month": "06",
            "day": "20"
          },
          "year": "2022",
          "month": "06",
          "day": "20",
          "hidden": false,
          "pathinfo": "/posts/automatic-remote-dr-solution-for-servers-free",
          "permalink": "https://blog.skywt.cn/posts/automatic-remote-dr-solution-for-servers-free",
          "url": "https://blog.skywt.cn/posts/automatic-remote-dr-solution-for-servers-free",
          "isMarkdown": true,
          "feedUrl": "https://blog.skywt.cn/feed/posts/automatic-remote-dr-solution-for-servers-free",
          "feedRssUrl": "https://blog.skywt.cn/feed/rss/posts/automatic-remote-dr-solution-for-servers-free",
          "feedAtomUrl": "https://blog.skywt.cn/feed/atom/posts/automatic-remote-dr-solution-for-servers-free",
          "fields": {
            "headPic": {
              "name": "headPic",
              "type": "str",
              "value": ""
            },
            "linkTo": {
              "name": "linkTo",
              "type": "str",
              "value": ""
            },
            "pageIcon": {
              "name": "pageIcon",
              "type": "str",
              "value": ""
            },
            "pubPlace": {
              "name": "pubPlace",
              "type": "str",
              "value": ""
            }
          }
        }
      ]
    }
  },
  created() {
    this.getPostList();
  },
  methods: {
    getPostList(){
      var _this = this;
      axios.get('https://blog.skywt.cn/api/posts', {
        params: {
          page: this.page,
          pageSize: this.pageSize,
          showDigest: "more"
        }
      })
      .then(function (response) {
        _this.page = response.data.data.page;
        _this.nowPageSize = response.data.data.pageSize;
        _this.pages = response.data.data.pages;
        _this.postList = response.data.data.dataSet;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
section {
  h2 {
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
}

</style>