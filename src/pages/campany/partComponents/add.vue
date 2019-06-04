<template>
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" >
          <span>&time;</span>
          <span class="sr-only">关闭弹窗</span>
        </button>
        <h4 class="modal-title" id="MymodalLabel">添加部门信息</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="LabelId" class="col-sm-2 control-label">部门编号</label>
            <div class="col-md-5">
              <input type="text" class="form-control" id="LabelId" placeholder="">
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-dismiss="modal">确定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name:'Add'
  }
</script>

<style scoped>
.modal{
  color:#9d9d9d;
}
</style>
