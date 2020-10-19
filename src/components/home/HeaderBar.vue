<template>
  <div class="user-button">
      <el-button size="medium" round @click="dialogDownloadVisible = true">下载</el-button>
      <el-button size="medium" round @click="dialogRegisterVisible = true">注册</el-button>
      <el-button size="medium" round @click="dialogLoginVisible = true">登录</el-button>

      <el-dialog
      title="登录"
      :visible.sync="dialogLoginVisible"
      width="23rem">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input show-password v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogLoginVisible = false">取 消</el-button>
        <el-button type="primary" @click="onLogin">登录</el-button>
        </span>
      </el-dialog>

      <el-dialog
      title="注册"
      :visible.sync="dialogRegisterVisible"
      width="23rem">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input show-password v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRegisterVisible = false">取 消</el-button>
        <el-button type="primary" @click="onRegister">注册</el-button>
        </span>
      </el-dialog>

      <el-dialog
      title="下载"
      :visible.sync="dialogDownloadVisible"
      width="23rem">
        链接：https://pan.baidu.com/s/1EqlXRUfbf0I-gpMnMuKmyQ <br>
        提取码：vf3q 
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDownloadVisible = false">确定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      dialogLoginVisible: false,
      dialogRegisterVisible: false,
      dialogDownloadVisible: false,
      form: {
        account: '',
        password:'',
      }
    };
  },
  methods: {
    onLogin() {
      let home = this;
      this.axios({
        method: 'post',
        url: process.env.VUE_APP_HOST+"/login",
        data: {
          account: this.form.account,
          password: this.form.password
        }
      }).then(function (response){
        console.log(response.data);
        localStorage.token = response.data.data;
        home.$router.push('/main');
      }).catch(function (error){
        console.log(error.config);
      });
    },

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
        register.onLogin();
      }).catch(function (thrown){
        console.log(thrown);
      });
    },


  }

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