<template>
  <div class="bodyRight">
<!--    <div class="div">-->
<!--      <table class="table table-border table-bordered table-hover table-bg">-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th scope="col" colspan="6">角色管理</th>-->
<!--        </tr>-->
<!--        <tr class="text-c">-->
<!--          <th width="25"><input type="checkbox" value="" name=""></th>-->
<!--          <th width="40">ID</th>-->
<!--          <th width="200">角色名</th>-->
<!--          <th>用户列表</th>-->
<!--          <th width="300">描述</th>-->
<!--          <th width="70">操作</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr class="text-c">-->
<!--          <td><input type="checkbox" value="" name=""></td>-->
<!--          <td>1</td>-->
<!--          <td>超级管理员</td>-->
<!--          <td><a href="#">admin</a></td>-->
<!--          <td>拥有至高无上的权利</td>-->
<!--          <td class="f-14"><a title="编辑" href="javascript:;" onclick="admin_role_edit('角色编辑','admin-role-add.html','1')" style="text-decoration:none"><i class="Hui-iconfont">&#xe6df;</i></a> <a title="删除" href="javascript:;" onclick="admin_role_del(this,'1')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>-->
<!--        </tr>-->
<!--        <tr class="text-c">-->
<!--          <td><input type="checkbox" value="" name=""></td>-->
<!--          <td>2</td>-->
<!--          <td>总编</td>-->
<!--          <td><a href="#">张三</a></td>-->
<!--          <td>具有添加、审核、发布、删除内容的权限</td>-->
<!--          <td class="f-14"><a title="编辑" href="javascript:;" onclick="admin_role_edit('角色编辑','admin-role-add.html','2')" style="text-decoration:none"><i class="Hui-iconfont">&#xe6df;</i></a> <a title="删除" href="javascript:;" onclick="admin_role_del(this,'1')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>-->
<!--        </tr>-->
<!--        <tr class="text-c">-->
<!--          <td><input type="checkbox" value="" name=""></td>-->
<!--          <td>3</td>-->
<!--          <td>栏目主辑</td>-->
<!--          <td><a href="#">李四</a>，<a href="#">王五</a></td>-->
<!--          <td>只对所在栏目具有添加、审核、发布、删除内容的权限</td>-->
<!--          <td class="f-14"><a title="编辑" href="javascript:;" onclick="admin_role_edit('角色编辑','admin-role-add.html','3')" style="text-decoration:none"><i class="Hui-iconfont">&#xe6df;</i></a> <a title="删除" href="javascript:;" onclick="admin_role_del(this,'1')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>-->
<!--        </tr>-->
<!--        <tr class="text-c">-->
<!--          <td><input type="checkbox" value="" name=""></td>-->
<!--          <td>4</td>-->
<!--          <td>栏目编辑</td>-->
<!--          <td><a href="#">赵六</a>，<a href="#">钱七</a></td>-->
<!--          <td>只对所在栏目具有添加、删除草稿等权利。</td>-->
<!--          <td class="f-14"><a title="编辑" href="javascript:;" onclick="admin_role_edit('角色编辑','admin-role-add.html','4')" style="text-decoration:none"><i class="Hui-iconfont">&#xe6df;</i></a> <a title="删除" href="javascript:;" onclick="admin_role_del(this,'1')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name:'Content'
  }
</script>

<style scoped>
  .bodyRight{
    position: relative;
    /*width: 800px;*/
    height:503px;
    background: #F5F5F5;
    font-size: 14px;
  }
  .table{
    display: inline-block;
    width: auto;
  }
  .div{
    z-index: 9999;
    position: absolute;
    width:750px;
    /*left:*/
    /*left:100px;*/
  }
</style>
