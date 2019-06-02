<template>
  <div class="bodyLeft">
    <ul class="nav nav-stacked" v-once v-if="staticId == 0">
      <li v-for="item of index" :key="item.id" @click="SelectOn(item.id)">
        <router-link to="/Msg" class="a">{{item.text}}</router-link>
      </li>
    </ul>
    <ul class="nav nav-stacked" v-once v-else-if="staticId == 1">
      <li v-for="item of sys" :key="item.id" @click="SelectOn(item.id)">
        <router-link to="/Msg" class="a">{{item.text}}</router-link>
      </li>
    </ul>
    <ul class="nav nav-stacked" v-once v-else>
      <li v-for="item of cam" :key="item.id" @click="SelectOn(item.id)">
        <router-link to="/Msg" class="a">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BodyLeft',
  data: function () {
    return {
      staticId: 0,
      chooseId: 0,
      index: [{
        id: 0,
        text: '首页'}],
      sys: [
        {
          id: 11,
          text: '角色权限设置'
        }, {
          id: 12,
          text: '操作员设置'
        }, {
          id: 13,
          text: '系统日志'
        }],
      cam: [
        { id: 21,
          text: '企业信息设置'
        },
        { id: 22,
          text: '部门管理'
        },
        { id: 23,
          text: '职务设置'
        },
        { id: 24,
          text: '员工管理'
        }]
      // res: ['商品库管理', '供应商管理', '客户商管理'],
      // buy: ['采购单管理'],
      // ware: ['仓库设置', '入库管理', '出库管理'],
      // sell: ['销售单'],
      // finan: ['采购应付款报表', '采购应付结算单', '采购应收款报表', '销售应收结算单'],
      // form: ['库存报表', '进销存报表', '商品台账报表'],
      // show: true,
    }
  },
  // mounted: function () {
  //   this.bus.$on('sendName', function (id) {
  //     var this_ = this
  //     this_.staticId = id
  //     alert(this_.staticId)
  //     // this.$forceUpdate()
  //   })
  // },
  created: function () {
    this.SecondNav()
  },
  methods: {
    SecondNav: function () {
      this.bus.$on('sendName', (id) => { this.staticId = id })
    },
    SelectOn:function(id){
      this.$set(this.chooseId,id)
      // alert(this.chooseId)
    }
  }
}
</script>

<style scoped>
  .bodyLeft{
    font-size: 14px;
    /*padding-left: 20px;*/
    width: 200px;
    height:549px;
    background-color: #393D49;
    float: left;
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
</style>
