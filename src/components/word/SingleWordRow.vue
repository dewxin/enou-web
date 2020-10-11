<template>
  <div class="word-div">
    <el-link type="primary" :href="link" target="_blank" class="word-link">{{ word }}</el-link>
    <el-button class="word-button" >编辑</el-button>
  </div>
</template>

<script>
export default {
  name: "SingleWordRow",
  props:{
    id:Number,
    word:String,
  },
  computed:{
    link: function (){
      return "https://cn.bing.com/search?q="+this.word+"+define&qs=n";
    }
  }
}
</script>

<style scoped>
.word-div{
  margin-top: 5px;
  width: 50%;
}

.word-link {
  vertical-align:bottom;
}

.word-button {
  padding: 5px;
  float: right;
}
</style>