<template>
  <ul>  
    <!-- 使用 template 修正 v-for 和 v-if 的优先级问题 -->
    <template v-for="postItem in postList" :key="postItem.cid">
      <li v-if="!isEmpty(postItem.title)" class="mt-3 mb-3">
        <a :href="postItem.url">{{postItem.title}}</a>
      </li>
    </template>
  </ul>
</template>

<script>
import axios from 'axios'
const config = require('../config');

export default {
  name: "ArchiveList",
  data() {
    return {
      page: 1,
      pageSize: 10000,
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
    isEmpty(s){
      return (!s || s=='' || s==' ');
    },
    getPostList(){
      var _this = this;
      axios.get(config.default.url + '/posts', {
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
</style>