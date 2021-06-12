<template>

  <el-container>
    <el-aside width="8rem">
      <word-aside @queryWordAfter="queryWordAfter"/>
    </el-aside >
    <el-main width="8rem">
      <word-main ref="wordmain">

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
  methods: {
    queryWordAfter(timeStampMilli) {
      this.$refs.wordmain.updateTimeStamp(timeStampMilli);
    }
  }
}
</script>

<style scoped>

</style>