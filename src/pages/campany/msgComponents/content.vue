<template>
  <div class="bodyRight">
    <form class="form form-horizontal">
      <fieldset class="fieldset">
        <legend>企业管理-公司信息设置</legend>
        <div class="btndiv">
          <button class="btn-edit" @click="Click"><i class="iconfont  iconweibiaoti520">编辑</i></button>
          <button class="btn-refresh"><i class="iconfont iconshuaxin">刷新</i></button>
        </div>
        <fieldset :disabled="disabled" class="fieldset2">
          <div class="table-div">
          <table>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">企业名称：</label>
                <div class="col-md-9">
                  <input class="form-control" type="text" value="仓库公司" />
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">企业性质：</label>
                <div class="col-md-9">
                  <select class="form-control"  >
                    <option v-for="(item,index) of BusinessNature" :nature="item" :key="index">{{item}}</option>
                  </select>
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">经营范围：</label>
                <div class="col-md-9">
                  <input class="form-control" type="text" value="仓库各方面管理"  />
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">成立时间：</label>
                <div class="col-md-9">
                  <input type="text" class="form-control" v-model="date" />
                </div>
              </div>
<!--              <td>2019/5/31</td>-->
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">注册资金：</label>
                <div class="input-group col-md-3">
                  <span class="input-group-addon">￥</span>
                  <input type="text" class="form-control"  value="100" >
                  <span class="input-group-addon">万元</span>
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">员工人数：</label>
                <div class="radio col-md-9">
<!--                  <input class="form-control" type="text" value="6人" disabled />-->
                  <label>
                    <input type="radio" name="cb" checked />1-20人
                  </label>
                  <label>
                    <input type="radio" name="cb" />20-50人
                  </label>
                  <label>
                    <input type="radio" name="cb" />50-100人
                  </label>
                  <label>
                    <input type="radio" name="cb" />100人以上
                  </label>
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-md-3 control-label">占地面积：</label>
                <div class="input-group col-md-2">
<!--                  <span class="input-group-addon">￥</span>-->
                  <input type="text" class="form-control" value="60" >
                  <span class="input-group-addon">平方米</span>
                </div>
              </div>
            </tr>
            <tr v-if="show">
              <button class="btn-submit">立即提交</button>
              <button class="btn-reset">重置</button>
            </tr>
          </table>
        </div>
        </fieldset>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Content',
    data:function(){
      return{
        show:false,
        nature:"",
        disabled:true,
        BusinessNature:["国有企业","集体企业","联营企业","股份合作制企业","私有企业",
          "个体户","合伙企业","有限责任工资","股份企业有限"],
        date:new Date(),
        options: {
          format: 'YYYY-MM-DD',
          useCurrent: false,
          locale: 'zh-cn',
          tooltips: {
            selectTime: ''
          }
        }
      }
    },
    methods:{
      Click:function(){
        // alert("aaa")
        this.show=true
        this.disabled=false
      }
    }
  }
</script>

<style scoped>
  .bodyRight{
    /*height:503px;*/
    /*background: #F5F5F5;*/
    /*font-size: 14px;*/
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
  .fieldset {
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
  .btndiv{
    padding-top: 1%;
    color:#ffffff;
    height:7%
  }
  .btn-edit{
    background-color: #1E9FFF;
    border: #1E9FFF solid 1px;
    border-radius:2px;
    height: 90%;
    width: 6%;
  }
  .btn-edit:hover{
    background-color: #3EACFE;
    border: #3EACFE solid 1px;
  }
  .btn-refresh{
    background-color: #009688;
    border: #009688 solid 1px;
    border-radius:2px;
    width: 6%;
    height:90%;
  }
  .btn-refresh:hover,.btn-submit:hover{
    background-color: #2FA89D;
    border: #2FA89D solid 1px;
  }
  .btn-submit{
    background-color: #009688;
    border: #009688 solid 1px;
    border-radius:2px;
    height: 90%;
    width: 10%;
    font-size: 0.9em;
    color: #ffffff;
    font-family: "微软雅黑";
    margin-left: 35px;
    margin-top: 10px;
  }
  .btn-reset{
    /*background-color: #009688;*/
    border: #d4d4d4 solid 1px;
    border-radius:2px;
    height: 90%;
    width: 10%;
    font-size: 0.9em;
    color: #5e5e5e;
    font-family: "微软雅黑";
    margin-left: 2%;
  }
  i{
    font-size: 0.9em;
  }
  .fieldset2{
    height:90%;
  }
.table-div{
  margin-top: 2%;
  color:#666666;
  height:90%;
  overflow-y: auto;
  font-size: 1.15em;
  font-family: "新宋体";
  border-top: #E6E6E6 solid 1px;
}
  table{
    margin-top: 2%;
    margin-left: 3%;
    height:100%;
    width: 85%;
  }
  tr{
    /*height:20%;*/
  }
  .head{
    color:#222222;
    font-family: "字魂5号-无外润黑体";
  }
  .form-control{
    border-radius: 3px;
    width:100%;
    font-size: 1em;
    color: #A3A3A3;
  }
  .input-group{
    padding-left: 1.8%;
  }
</style>
