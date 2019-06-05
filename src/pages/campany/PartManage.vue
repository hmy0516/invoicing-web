<template>
  <div class="home">
    <home-header :sid="sid"></home-header>
    <body-left :sid="sid"></body-left>
    <body-right :list="partList"></body-right>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import BodyLeft from '@/pages/home/components/BodyLeft'
  import Content from './partComponents/content'
  import HomeBottom from '@/pages/home/components/Bottom'
  import axios from 'axios'

  export default {
    name:'PartManage',
    components: {
      HomeHeader: HomeHeader,
      BodyLeft: BodyLeft,
      BodyRight: Content,
      HomeBottom: HomeBottom
    },
    data:function(){
      return{
        partList:[]
      }
    },
    created(){
      this.sid = this.$route.query.sid;
    },
    methods:{
      getPartInfo:function(){
        axios.get('/api/showAll/2/2')
          .then(this.getPartInfoSucc)
      },
      getPartInfoSucc:function(res){
        res = res.data;
        console.log(res)
        this.partList = res
      }
    }
    ,
    mounted(){
      this.getPartInfo()
    }
  }
</script>

<style scoped>
</style>
