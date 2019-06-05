<template>
  <div class="tablediv table-responsive">
    <table class="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>部门编号</th>
          <th>部门名称</th>
          <th>备注</th>
          <th class="td">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items of list" :key="items.cDid">
          <td>{{items.cDid}}</td>
          <td>{{items.cDepartment}}</td>
          <td>{{items.cComment}}</td>
          <td class="td"><tb-button :id="items.cDid"></tb-button></td>
        </tr>
<!--        <tr>-->
<!--          <td>02</td>-->
<!--          <td>开发部</td>-->
<!--          <td>进行与企业相关的软件开发</td>-->
<!--          <td class="td"><tb-button></tb-button></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>03</td>-->
<!--          <td>人事部</td>-->
<!--          <td>社区哦嗲我比较吃不起</td>-->
<!--          <td class="td"><tb-button></tb-button></td>-->
<!--        </tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
  import TbButton from "./tablebutton"
  export default {
    name:'Table',
    props:["list"],
    components:{
      TbButton:TbButton
    }
  }
</script>

<style scoped>
.tablediv{
  color:#666666;
  }
th{
  height:40px;
  /*padding-top: 13px;*/
  background-color: #E6E6E6;
}
td{
  height:55px;
  /*vertical-align: middle;*/
  }
.td{
  width:190px;
  text-align: center;
}
</style>
