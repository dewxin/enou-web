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
  },

}
</script>

<style>
  body {
    width:100%;
    margin:0;
  }
</style>
