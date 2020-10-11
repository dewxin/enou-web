<template>
  <div id="loginDiv">
    <h2>登录页面</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button @click="onClickRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

export default {
  name:"Login",

  data() {
    return {
      form: {
        account: '',
        password:'',
      }
    }
  },
  methods:{
    onLogin() {
      let login = this;
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/login",
        data: {
          account: this.form.account,
          password: this.form.password
        }
      }).then(function (response){
        console.log(response.data);
        localStorage.token = response.data;
        login.$router.push('/home');
      }).catch(function (error){
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);

      });
    },
    onClickRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
#loginDiv {
  width: 400px;
}
</style>