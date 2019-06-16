import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MsgManage from '@/pages/campany/MsgManage'
import PartManage from '@/pages/campany/PartManage'
import Commodity from '@/pages/resource/Commodity'
import Customer from '@/pages/resource/Customer'
import Price from '@/pages/resource/Price'
import Cunit from '@/pages/resource/Cunit'
import Supply from '@/pages/resource/Supply'
import Kinds from '@/pages/resource/Kinds'
import Log from '@/pages/system/Log'
import Operator from '@/pages/system/Operator'
import Role from '@/pages/system/Role'
import Job from '@/pages/campany/Job'
import Staff from '@/pages/campany/Staff'
import Purchase from '@/pages/purchase/Purchase'
import Setware from '@/pages/warehouse/Setware'
import Inware from '@/pages/warehouse/Inware'
import Outware from '@/pages/warehouse/Outware'
import Sell from '@/pages/sell/Sell'
import Get from '@/pages/finance/Get'
import GetAccount from '@/pages/finance/GetAccount'
import Pay from '@/pages/finance/Pay'
import PayAccount from '@/pages/finance/PayAccount'
import Inall from '@/pages/form/Inall'
import Outall from '@/pages/form/Outall'
import Indetail from '@/pages/form/Indetail'
import Outdetail from '@/pages/form/Outdetail'
import Invoicing from '@/pages/form/Invoicing'
import Stock from '@/pages/form/Stock'
import Ledger from '@/pages/form/Ledger'

import test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '/',
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
    },
    {
      path:'/Commodity',
      name:'Commodity',
      component: Commodity
    },
    {
      path:'/Customer',
      name:'Customer',
      component: Customer
    },
    {
      path:'/Price',
      name:'Price',
      component: Price
    },
    {
      path:'/Cunit',
      name:'Cunit',
      component: Cunit
    },
    {
      path:'/Log',
      name:'Log',
      component: Log
    },
    {
      path:'/Operator',
      name:'Operator',
      component: Operator
    },
    {
      path:'/Role',
      name:'Role',
      component: Role
    },
    {
      path:'/Job',
      name:'Job',
      component: Job
    },
    {
      path:'/Staff',
      name:'Staff',
      component: Staff
    },
    {
      path:'/Purchase',
      name:'Purchase',
      component: Purchase
    },
    {
      path:'/Setware',
      name:'Setware',
      component: Setware
    },
    {
      path:'/Inware',
      name:'Inware',
      component: Inware
    },
    {
      path:'/Outware',
      name:'Outware',
      component: Outware
    },
    {
      path:'/Sell',
      name:'Sell',
      component: Sell
    },
    {
      path:'/Pay',
      name:'Pay',
      component: Pay
    },
    {
      path:'/PayAccount',
      name:'PayAccount',
      component: PayAccount
    },
    {
      path:'/Get',
      name:'Get',
      component: Get
    },
    {
      path:'/GetAccount',
      name:'GetAccount',
      component: GetAccount
    },
    {
      path:'/Inall',
      name:'Inall',
      component: Inall
    },
    {
      path:'/Indetail',
      name:'Indetail',
      component: Indetail
    },
    {
      path:'/Outall',
      name:'Outall',
      component: Outall
    },
    {
      path:'/Outdetail',
      name:'Outdetail',
      component: Outdetail
    },
    {
      path:'/Invoicing',
      name:'Invoicing',
      component: Invoicing
    },
    {
      path:'/Stock',
      name:'Stock',
      component: Stock
    },
    {
      path:'/Ledger',
      name:'Ledger',
      component: Ledger
    },
    {
      path:'/Supply',
      name:'Supply',
      component: Supply
    },
    {
      path:'/Kinds',
      name:'Kinds',
      component: Kinds
    }
  ]
})
