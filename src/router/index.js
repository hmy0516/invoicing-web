import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MsgManage from '@/pages/campany/MsgManage'
import PartManage from '@/pages/campany/PartManage'
import Login from '@/pages/Login'


Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
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
