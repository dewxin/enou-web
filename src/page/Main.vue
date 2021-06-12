<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="首页">首页</el-tab-pane>
      <el-tab-pane label="单词"><word></word></el-tab-pane>
      <el-tab-pane label="文章" hidden><Article></Article></el-tab-pane>
      <el-tab-pane label="我的"><mine></mine></el-tab-pane>
    </el-tabs>
  </div>
  
</template>

<script>
import Word from "./Word";
import Mine from "./Mine"
import Article from './Article.vue';
export default {
  name: "Main",
  components: {Mine, Word, Article}
}
</script>

<style scoped>

</style>