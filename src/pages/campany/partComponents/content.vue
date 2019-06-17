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
    height:503px;
    background: #F5F5F5;
    font-size: 14px;
  }
  .form{
    position: relative;
    top:10px;
    width:1250px;
  }
  fieldset {
    position: inherit;
    margin-left:230px;
    padding-left: 20px;
    padding-right: 20px;
    height:470px;
    border: 1px solid #E6E6E6;
  }
  legend {
    padding: .5em;
    border: 0;
    width: auto;
    font-size: 19px;
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
    font-size: 14px;
  }
</style>
