<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//import Registry from "./page/Registry";
///import Login from "./page/Login";
import router from "./router/main-router";
export default {
  name: 'App',
  router,
  components: {
  //  Registry,
 ////   Login
  },
  methods:{
    hasToken() {
      return localStorage.token != null;
    },

    onLogin() {

    }
  }
}
</script>

<style>

</style>
