<template>
  <div class="home">
    <home-header :sid="sid"></home-header>
    <body-left></body-left>
    <body-right></body-right>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import BodyLeft from './components/BodyLeft'
import BodyRight from './components/BodyRight'
import HomeBottom from './components/Bottom'

export default {
  name: 'Home',
  data:function(){
    return{
      sid:0,
      uid:this.$route.params.id
    }
  },
  components: {
    HomeHeader: HomeHeader,
    BodyLeft: BodyLeft,
    BodyRight: BodyRight,
    HomeBottom: HomeBottom
  },
  created() {
    console.log(this.uid)
  }
}
</script>

<style>
  .home{
    height:100%;
  }

</style>
