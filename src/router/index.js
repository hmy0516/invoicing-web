import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MsgManage from '@/pages/campany/MsgManage'
import PartManage from '@/pages/campany/PartManage'
import test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path:'/Msg',
      name:'MsgManage',
      component: MsgManage
    },
    {
      path:'/Part',
      name:'PartManage',
      component: PartManage
    }
  ]
})
