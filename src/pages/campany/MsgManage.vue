<template>
  <div class="home">
    <home-header></home-header>
    <body-left></body-left>
    <body-right></body-right>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import BodyLeft from '@/pages/home/components/BodyLeft'
  import Content from './msgComponents/content'
  import HomeBottom from '@/pages/home/components/Bottom'

  export default {
    name:'MsgManage',
    components: {
      HomeHeader: HomeHeader,
      BodyLeft: BodyLeft,
      BodyRight: Content,
      HomeBottom: HomeBottom
    }
  }
</script>

<style scoped>
</style>
