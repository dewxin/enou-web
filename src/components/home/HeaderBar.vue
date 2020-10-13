<template>
  <div class="user-button">
      <el-button size="medium" round>注册</el-button>
      <el-button size="medium" round>登录</el-button>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
}
</script>

<style scoped>
.user-button {
    float: right;
}
.user-button > .el-button {
    font:bold;
    background: #ffffff69;
}
</style>