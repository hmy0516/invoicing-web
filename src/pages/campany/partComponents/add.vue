<template>
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" >
          <span>×</span>
          <span class="sr-only">关闭弹窗</span>
        </button>
        <h4 class="modal-title" id="MymodalLabel">添加部门信息</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="LabelId" class="col-sm-3 control-label" >部门编号</label>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="cDid" id="LabelId" placeholder=""/>
            </div>
          </div>
          <div class="form-group">
            <label for="Labe2Id" class="col-sm-3 control-label">部门名称</label>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="cDepartment" id="Labe2Id" placeholder="" />
            </div>
          </div>
          <div class="form-group">
            <label for="Labe3Id" class="col-sm-3 control-label">备注</label>
            <div class="col-md-8">
              <textarea class="form-control"  v-model="cComment" id="Labe3Id" placeholder="" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" @click="Create" data-dismiss="modal">确定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import qs from 'qs'
  export default {
    name:'Add',
    data:function(){
      return{
        cDid:"",
        cDepartment:"",
        cComment:""
      }
    },
    methods:{
      Create:function(){
        this.axios({
          method:"post",
          url:'/api/department',
          data:qs.stringify({
            cDid:this.cDid,
            cDepartment: this.cDepartment,
            cComment: this.cComment
          },{ indices: false }),
          headers:{
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
          .then((response)=> {
            console.log(response);
          })
          .catch((error)=>{
            console.log(error)
          })
        this.cDid=""
        this.cDepartment=""
        this.cComment=""
      }
    }
  }
</script>

<style scoped>
.modal{
  color:#9d9d9d;
}
  .modal-title{
    font-size:16px;
    color:#080808;
  }
  textarea{
    height:100px;
  }
  .modal-dialog{
    width:500px;
    /*text-align: center;*/
  }
</style>
