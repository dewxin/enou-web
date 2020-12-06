<template>

  <el-container>
    <el-aside width="7rem" >
      <article-aside @handleClickSide="handleClickSide" />
    </el-aside >

    <el-main widt="10rem">
      <article-upload v-show="currentShow=='upload'"/>
      <article-view v-show="currentShow=='view'"/>
      <div v-show="currentShow=='default'">
        可以上传文章，然后分析其中不认识的单词。
      </div>
    </el-main>
  </el-container>

</template>


<script>
import ArticleAside from '../components/article/ArticleAside.vue'
import ArticleUpload from '../components/article/ArticleUpload.vue'
import ArticleView from '../components/article/ArticleView.vue'

export default {
  components: { ArticleAside, ArticleUpload, ArticleView },
  name: "Article",
  data() {
    return {
      currentShow:"default",
    }
  },

  methods: {

    handleClickSide(panelName) {
      this.currentShow = panelName;
    }
  }
    
}
</script>

<style scoped>

</style>