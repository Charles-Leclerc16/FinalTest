<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  router,
  components:{
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(104, 209, 244);
}
</style>


