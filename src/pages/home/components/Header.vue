<template>
  <div class="row header">
    <div class="col-md-2 h-logo">进销存管理系统</div>
    <div class="h-nav">
        <ul class="nav navbar-nav">
          <li v-for="items of list"  :key="items.id" @click="Click(items.id)">
            <a href="javascript:void(0);" :class="SelectId === items.id ? 'b' : 'a'">{{items.text}}</a>
          </li>
        </ul>
    </div>
    <div class="h-login"><a href="#">login</a></div>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader',
  data: function () {
    return {
      SelectId: 0,
      list: [
        { id: 0,
          name: 'index',
          text: '首页'
        },
        {id: 1,
          name: 'sys',
          text: '系统管理'
        },
        { id: 2,
          name: 'cam',
          text: '企业管理'
        },
        { id: 3,
          name: 'res',
          text: '资源管理'
        },
        { id: 4,
          name: 'buy',
          text: '采购管理'
        },
        { id: 5,
          name: 'ware',
          text: '仓库管理'
        },
        { id: 6,
          name: 'sell',
          text: '销售管理'
        },
        { id: 7,
          name: 'finan',
          text: '财务管理'
        },
        { id: 8,
          name: 'form',
          text: '报表中心'
        }
      ]
    }
  },
  methods: {
    Click: function (id) {
      this.bus.$emit('sendName', id)
      this.SelectId = id
      // alert(this.items.id)
      // alert(id)
    }
  }
}
</script>

<style scoped>
  .header {
    width: 101.15%;
    padding-top: 10px;
    font-size: 14px;
    font-family: "微软雅黑 light", sans-serif;
    height: 60px;
    background-color: #292929;
    text-align: center;
  }
  .h-logo{
    padding-top: 11px;
    color: #458B74;
    font-size: 16px;
    font-family: "微软雅黑";
  }
  .h-nav{
    float: left;
  }
  .h-login{
    padding-top: 10px;
  }
  .a:hover{
    color: #000;
    background-color:#F5F5F5;
  }
  .a{
    color: #adadad;
  }
  .b{
    background-color: #EEEEEE;
    color:#BCBCBC;
  }

</style>
