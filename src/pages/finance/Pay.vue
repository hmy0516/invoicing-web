<template>
  <div class="pay">
    <home-header :sid="sid"></home-header>
    <body-left :sid="sid"></body-left>
    <body-right></body-right>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import BodyLeft from '@/pages/home/components/BodyLeft'
  import Content from './pay/Fi-Pay-content'
  import HomeBottom from '@/pages/home/components/Bottom'
  export default {
    name:'Pay',
    components: {
      HomeHeader: HomeHeader,
      BodyLeft: BodyLeft,
      BodyRight: Content,
      HomeBottom: HomeBottom
    },
    data:function(){
      return{
      }
    },
    created(){
      this.sid = this.$route.query.sid;
    }
  }
</script>

<style scoped>
.pay{
  height: 100%;
}
</style>
