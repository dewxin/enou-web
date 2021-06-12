<template>

  <div v-if="timeStampMilli>0">
    <el-button @click="getData(currentOffset-20)" v-if="currentOffset>=20">上一页</el-button>
    <el-button @click="getData(currentOffset+20)" v-if="words.count=20">下一页</el-button>
    <SingleWordRow v-for="w in words" :key="w.word" :word="w.word">
    </SingleWordRow><br>
  </div>
</template>

<script>
import SingleWordRow from "./SingleWordRow";
export default {
  name: "WordMain",
  components: {SingleWordRow},
  data() {
    return {
      words:[],
      timeStampMilli:Number,
      currentOffset:0,
    }
  },

  methods: {
    updateTimeStamp(timeStamp) {
      this.timeStampMilli = timeStamp;
      this.currentOffset = 0;
      this.words = [];
      this.getData(this.currentOffset);
    },
    getData(targetOffset) {
      let word = this;
      this.axios({
        method: 'get',
        url: process.env.VUE_APP_HOST+"/word",
        params: {
          time: this.timeStampMilli,
          offset: targetOffset,
          count: 20,
        },
      }).then(function (response){

        word.words = response.data.data;
        word.currentOffset = targetOffset;
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