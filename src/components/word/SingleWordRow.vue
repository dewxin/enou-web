<template>
  <div class="word-div">
    <el-button @click="getWordDef">{{ word }}</el-button>
      <el-dialog width="100%" title="单词" :visible.sync="dialogTableVisible">
        <el-button @click="learn">学习</el-button>
        {{wordDef}}
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SingleWordRow",
  props:{
    id:Number,
    word:String,
  },
  data() {
      return {
        dialogTableVisible:false,
        wordDef:Object,
      }
  },

  methods:{
    getWordDef() {
        let oneWord = this;
        oneWord.dialogTableVisible = true;
        this.axios({
            method: 'get',
            url: process.env.VUE_APP_HOST+"/api/word",
            params: {
              word: oneWord.word,
            },
        }).then(function (response){
            oneWord.wordDef = response.data.data;
            console.log(oneWord.wordDef);
        }).catch(function (thrown){
            console.log(thrown);
        //todo pop a window
        });
    },
    learn() {
      let oneWord = this;
        this.axios({
            method: 'post',
            url: process.env.VUE_APP_HOST+"/word/learn",
            params: {
              spell: oneWord.word,
            },
        }).then(function (response){
            oneWord.dialogTableVisible= false;
            console.log(response.data);
        }).catch(function (thrown){
            console.log(thrown);
        //todo pop a window
        });
    }

  },

}
</script>

<style scoped>
.word-div{
  margin-top: 5px;
  text-align: left;;
}

.word-link {
  vertical-align:bottom;
}

.word-button {
  padding: 5px;
  float: right;
}
.el-button {
  padding: 5px;
  margin :2px;
}
</style>