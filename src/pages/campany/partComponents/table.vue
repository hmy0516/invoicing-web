<template>
  <div class="tablediv table-responsive">
    <table class="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>部门编号</th>
          <th>部门名称</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>行政部</td>
          <td>执行行政相关工作</td>
          <td>……</td>
        </tr>
        <tr>
          <td>02</td>
          <td>开发部</td>
          <td>进行与企业相关的软件开发</td>
          <td>……</td>
        </tr>
        <tr>
          <td>03</td>
          <td>人事部</td>
          <td>社区哦嗲我比较吃不起</td>
          <td>……</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name:'Table'
  }
</script>

<style scoped>
  .tablediv{
    color:#666666;
  }
th{
  height:40px;
  padding-top: 13px;
  background-color: #E6E6E6;
  /*text-align: center;*/
}
td{
   height:55px;
  /*text-align: center;*/
  display: table-cell;
  vertical-align: middle;
  }
</style>
