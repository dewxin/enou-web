<template>
  <div id="registerDiv">
    <h2>注册页面</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password  v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onRegister">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:"Register",
  data() {
    return {
      form: {
        account: '',
        password:'',
      }
    }
  },
  methods:{
    onRegister() {
      let register = this;
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/register", //todo put in global variable
        data: {
          account: this.form.account,
          password: this.form.password
        }
      }).then(function (response){
        console.log(response);
        register.$message('注册成功');
        register.$router.push('/login');
      }).catch(function (thrown){
        console.log(thrown);
        //todo pop a window
        // todo error hint is not friendly , need modification
      });
    }
  }
}
</script>

<style scoped>
#registerDiv {
  width: 400px;
}
</style>