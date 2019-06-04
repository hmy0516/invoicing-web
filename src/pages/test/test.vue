<template>
  <div>{{msg}}</div>
</template>

<script>
  export default {
    name:'test',
    data(){
      return{
        msg:''
      }
    },
    mounted(){
      this.$axios.post('http://api.komavideo.com/news/list').then(body => {
        this.msg = body.data;
      })
    }
  }
</script>

<style>

</style>
