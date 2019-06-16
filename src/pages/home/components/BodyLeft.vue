<template>
  <div class="bodyLeft">
    <ul class="nav nav-stacked" v-once v-if="staticId == 1">
      <li v-for="item of sys" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 2">
      <li v-for="item of cam" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 3">
      <li v-for="item of res" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
        <ul class="goods">
          <li class="gli" v-for="citem of Rgoods" :key="citem.id" v-if="citem.parent == item.id">
            <router-link :to="{path:citem.href,query:{sid:staticId}}" class="c">
            {{citem.text}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 4">
      <li v-for="item of buy" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 5">
      <li v-for="item of ware" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 6">
      <li v-for="item of sell" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 7">
      <li v-for="item of finan" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else-if="staticId == 8">
      <li v-for="item of form" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

    <ul class="nav nav-stacked" v-once v-else>
      <li v-for="item of index" :key="item.id">
        <router-link :to="{path:item.href,query:{sid:staticId}}" class="a">{{item.text}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'BodyLeft',
  props:["sid"],
  data: function () {
    return {
      staticId: this.sid,
      chooseId: 0,
      Rgoods:[{
        id:0,
        text:'价格',
        href:'/Price',
        parent:31
      }, {
        id:1,
        text:'单位',
        href:'/Cunit',
        parent:31
      }, {
        id:2,
        text:'商品种类',
        href:'/Kinds',
        parent:31
      }],
      index: [{
        id: 0,
        text: '首页',
        href: '/'
      }],
      sys: [
        {
          id: 11,
          text: '角色权限设置',
          href: '/Role'
        }, {
          id: 12,
          text: '操作员设置',
          href: '/Operator'
        }, {
          id: 13,
          text: '系统日志',
          href: '/Log'
        }],
      cam: [
        { id: 21,
          text: '企业信息设置',
          href: '/Msg'
        },
        { id: 22,
          text: '部门管理',
          href: '/Part'
        },
        { id: 23,
          text: '职务设置',
          href: '/Job'
        },
        { id: 24,
          text: '员工管理',
          href: '/Staff'
        }],
      res: [
        { id:31,
        text:'商品库管理',
        href:'/Commodity'
        },
        { id:32,
         text:'供应商管理',
         href:'/Supply'
        },
        { id:33,
          text:'客户商管理',
          href:'/Customer'
        }],
      buy: [
        {id:41,
        text:'采购单管理',
        href:'/Purchase'
        }],
      ware: [
        { id:51,
          text:'仓库设置',
          href:'/Setware'
        },
        { id:52,
          text:'入库管理',
          href:'/Inware'
        },
        { id:53,
          text:'出库管理',
          href:'/Outware'
        }],
      sell: [
        {id:61,
          text:'销售单',
          href:'/Sell'
        }],
      finan: [
        { id: 71,
          text: '采购应付款报表',
          href: '/Pay'
        },
        { id: 72,
          text: '采购应付结算单',
          href: '/PayAccount'
        },
        { id: 73,
          text: '销售应收款报表',
          href: '/Get'
        },
        { id: 74,
          text: '销售应收结算单',
          href: '/GetAccount'
        }],
      form:[
        { id: 81,
          text: '库存报表',
          href: '/Stock'
        },
        { id: 82,
          text: '进销存报表',
          href: '/Invoicing'
        },
        { id: 83,
          text: '商品台账报表',
          href: '/Ledger'
        },
        { id: 84,
          text: '入库汇总报表',
          href: '/Inall'
        },
        { id: 85,
          text: '入库明细报表',
          href: '/Indetail'
        },
        { id: 86,
          text: '出库汇总报表',
          href: '/Outall'
        },
        { id: 87,
          text: '出库明细报表',
          href: '/Outdetail'
        }],
      // form: ['库存报表', '进销存报表', '商品台账报表'],
      // show: true,
    }
  },
  created: function () {
    this.SecondNav()
  },
  methods: {
    SecondNav: function () {
      this.bus.$on('sendSelectId', (id) => { this.staticId = id })
    }
  }
}
</script>

<style  scoped>
  .bodyLeft{
    z-index: 9999;
    position: relative;
    font-size: 14px;
    /*padding-left: 20px;*/
    float:left;
    width: 200px;
    height:549px;
    background-color: #393D49;
    float: left;
  }
  .bodyLeft > ul > li:hover ul {
    display: block;
  }
  .a{
    padding-top: 17px;
    display: block;
    color:#A3A3A3;
    height:50px;
  }
  .a:hover{
    background-color: #708090;
    color: #fff;
  }
  .nav> li >a:focus,.b{
    text-decoration: none;
    background-color: #009688;
    color:#AADCD7;
    padding-top: 17px;
    display: block;
    height:50px;
  }
  .b:hover{
    background-color: #009688;
  }
  .goods{
    display: none;
    width: 150px;
    background-color: #708090;
    position: absolute;
    left:200px;
    top:0px;
    /*border: #cccccc solid 1px;*/
  }
  .gli{
    /*width: 20px;*/
    /*border:#cccccc solid 1px;*/
    padding-top: 10px;
    text-align: center;
    height:40px;
    color:#d4d4d4;
  }
  .c{
    color:#d4d4d4;
  }
  .c:hover{
    text-decoration: none;
    color:#fff;
  }
</style>
