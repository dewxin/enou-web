<template>
  <div class="upload-article">
    <el-input
      type="textarea"
      maxlength="100"
      show-word-limit
      :autosize="{ minRows: 1, maxRows: 2}"
      placeholder="请输入文章标题"
      v-model="titleTextArea"></el-input>
      <br/>
      <br/>
      <el-input
      type="textarea"
      maxlength="200000"
      show-word-limit
      :autosize="{ minRows: 4, maxRows: 20}"
      placeholder="请输入文章内内容"
      v-model="contentTextArea">
    </el-input>

    <el-button @click="onUpload">上传</el-button>
  </div>
</template>

<script>

export default {
  name: "ArticleUpload",
  data() {
    return {
      titleTextArea:'',
      contentTextArea: '',
    }
  },

  methods:{
    onUpload() {
      let upload = this;
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/article",
        data: {
          title: this.titleTextArea,
          content: this.contentTextArea
        }
      }).then(function (response){
        upload.titleTextArea="";
        upload.contentTextArea="";
        upload.$message({
          message: '上传成功',
          type: 'success'
        });
        console.log(response);
      })
    }

  }
}
</script>


<style scoped>

.el-button {
  float: right;
}
</style>