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
        axios.get('/api/department')
          .then(this.getPartInfoSucc)
      },
      getPartInfoSucc:function(res){
        res = res.data;
        //console.log("sss"+res.data.list)
        this.partList = res.data.list
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
