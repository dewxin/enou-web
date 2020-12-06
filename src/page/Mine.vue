<template>
  <div>

    <el-button @click="onLogout">登出</el-button><br>
    <span>QQ号:</span><input width="8rem" v-model="qqAccount"/>
    <el-button @click="onBindQQ">绑定</el-button>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      qqAccount:String
    }
  },
  mounted:function() {
    let mine= this;
      this.axios({
        method: 'get',
        url: process.env.VUE_APP_HOST+"/third/info/qq",
      }).then(function (response){
        mine.qqAccount= response.data.data.thirdAccount;
        console.log(response.data);
      }).catch(function (thrown){
        console.log(thrown);
        //todo pop a window
      });
  },
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

    },
    onBindQQ() {
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/third/info",
        data: {
          thirdParty: "qq",
          thirdAccount: this.qqAccount
        }
      }).then(function (response){
        console.log(response);
      })
    }

  },
}
</script>

<style scoped>

</style>