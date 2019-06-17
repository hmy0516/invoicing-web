<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import "../static/css/main.css";
  @import "../static/css/color-dark.css";     /*深色主题*/
  #app{
    margin: 0 auto;
    min-width: 600px;      /*最小宽度*/
    max-width: 2880px;
  }
  html,body,#app{
    height: 100%;
  }
</style>
