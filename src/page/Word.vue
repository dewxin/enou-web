<template>

  <el-container>
    <el-aside width="200px">
      <word-aside @queryWordAfter="queryWordAfter"/>
    </el-aside>
      <el-main>
        <word-main :words="words">

        </word-main>
      </el-main>
  </el-container>


</template>

<script>

import WordAside from "../components/word/WordAside";
import WordMain from "../components/word/WordMain";

export default {
name: "Word",
  components: {
    WordMain,
    WordAside
  },
  data() {
    return {
      words:[],
    }
  },
  methods: {
    queryWordAfter(timeStampMilli) {
      let word = this;
      this.axios({
        method: 'get',
        url: process.env.VUE_APP_HOST+"/word",
        params: {
          time: timeStampMilli
        },
      }).then(function (response){
        word.words= response.data.data;
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