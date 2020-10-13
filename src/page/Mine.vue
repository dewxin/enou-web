<template>
  <el-button @click="onLogout">登出</el-button>
</template>

<script>
export default {
  name: "Mine",
  methods: {
    onLogout() {
      let mine = this;
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/logout"
      }).then(function (response){
        console.log(response);
        delete localStorage.token;
        mine.$router.push("/home");
      })

    }

  }
}
</script>

<style scoped>

</style>