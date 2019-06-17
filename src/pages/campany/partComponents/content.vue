<template>
  <div class="bodyRight">
    <form class="form form-horizontal">
      <fieldset>
        <legend>企业管理-部门管理</legend>
        <div class="form-group">
          <label class="sr-only col-md-3 control-label" for="search">Search</label>
          <div class="col-md-3">
            <input type="text" class="form-control col-md-2" id="search" placeholder="">
          </div>
          <div class="col-md-2">
            <button type="submit" class="btn btn-default"><i class="iconfont  iconchaxun1">查询</i></button>
          </div>
        </div>
        <Button></Button>
        <Table :list="list" :page="page"></Table>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import Button from './button'
  import Table from './table'

  export default {
    name: 'Content',
    props:["list","page"],
    components:{
      Button:Button,
      Table:Table
    }
  }
</script>

<style scoped>
  .bodyRight{
    height:100%;
    width: 100%;
    background: #F5F5F5;
    font-size: 0.9em;
    font-family: Arial;
    padding-top: 1%;
  }
  .form{
    width:80%;
    height: 92%;
    margin-left: 18.4%;
  }
  fieldset {
    position: inherit;
    padding-left:2%;
    height:96%;
    border: 1px solid #E6E6E6;
  }
  legend {
    padding: .5em;
    border: 0;
    width: auto;
    font-size: 1.35em;
    font-family: "微软雅黑 light";
  }
  .form-group{
    margin-left: 3px;
    padding: 5px 0px 20px 100px;
    border-bottom: #E6E6E6 solid 1px;
    width:970px;
  }
  .btn{
    background-color: #009688;
    border: #009688 solid 1px;
    color: #ffffff;
    height: 33px;
  }
  .btn-default:hover{
    background-color: #2FA89D;
    border: #2FA89D solid 1px;
    color:#ffffff;
  }
  i{
    font-size: 0.9em;
  }
</style>
