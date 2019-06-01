<template>
  <div class="home">
    <home-header></home-header>
    <body-left></body-left>
    <body-right></body-right>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import BodyLeft from './components/BodyLeft'
import BodyRight from './components/BodyRight'

export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    BodyLeft: BodyLeft,
    BodyRight: BodyRight
  }
}
</script>

<style scoped>
  .home{
  }

</style>
