<template>
    <el-collapse-item :title="articleTitle" :name="articleId">
        <el-button type="primary" @click="parseArticle">分析</el-button>
        <div>{{articleContent}}</div>

        <el-dialog width="100%" title="单词" :visible.sync="dialogTableVisible">
            <div class="word-div">
                <SingleWordRow class="one-word" v-for="w in words" :key="w" :word="w">
                </SingleWordRow><br>
            </div>
        </el-dialog>

    </el-collapse-item>
</template>

<script>
import SingleWordRow from '../word/SingleWordRow.vue';
export default {
  name: "OneArticle",
  components: { SingleWordRow},
  props:{
    
    articleId:Number,
    articleTitle:String,
    articleContent:String,


  },
  data(){
      return {
        dialogTableVisible:false,
        words:[],
      }
  },
  methods:{
    parseArticle() {
        let oneArticle = this;
        oneArticle.dialogTableVisible = true;
        this.axios({
            method: 'get',
            url: process.env.VUE_APP_HOST+"/article/"+oneArticle.articleId +"/unkownword",
            params: {
                id: oneArticle.articleId,
            },
        }).then(function (response){
            oneArticle.words = response.data.data;
            console.log(oneArticle.words);
        }).catch(function (thrown){
            console.log(thrown);
        //todo pop a window
        });
    }

  },

}
</script>

<style scoped>
.el-button {
    float:right;
}
.word-div {
    overflow-y:auto;max-height:25rem;
}
.one-word {
    float: left;
}
</style>