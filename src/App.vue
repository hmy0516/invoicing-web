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
  #app{
    margin: 0 auto;
    min-width: 600px;      /*最小宽度*/
    max-width: 2880px;
  }
</style>
