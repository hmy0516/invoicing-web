<template>
  <div class="home">
    <home-header></home-header>
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
  components: {
    HomeHeader: HomeHeader,
    BodyLeft: BodyLeft,
    BodyRight: BodyRight,
    HomeBottom: HomeBottom
  }
}
</script>

<style scoped>
  .home{
    height: 100%;
  }

</style>
