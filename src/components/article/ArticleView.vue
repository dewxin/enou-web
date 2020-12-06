<template>
  <div>
    <el-button v-show="pageIndex > 0" @click="getArticle(pageIndex-1)">上一页</el-button>
    当前页:{{pageIndex}}
    <el-button v-show="articles.length == 10" @click="getArticle(pageIndex+1)">下一页</el-button> 
    <el-collapse accordion>
      <OneArticle v-for="e in articles" :key="e.id" :articleTitle="e.title" :articleId="e.id" :articleContent="e.content" >
      </OneArticle>
    </el-collapse>
  </div>
</template>

<script>
import OneArticle from './OneArticle.vue';

export default {
  components: { OneArticle },
  name: "ArticleView",
  data() {
    return {
      pageIndex:Number,
      articles:[],
    }
  },
  mounted:function() {
    this.getArticle(0);
  },
  methods: {
    getArticle(pageIndex) {
      let articleView = this;
      this.axios({
        method: 'get',
        url: process.env.VUE_APP_HOST+"/article",
        params: {
          pageIndex: pageIndex,
        },
      }).then(function (response){
        articleView.articles= response.data.data;
        articleView.pageIndex=pageIndex;
        console.log(response);
      }).catch(function (thrown){
        console.log(thrown);
        //todo pop a window
      });
    }
  }
  
}
</script>

<style scoped>

</style>