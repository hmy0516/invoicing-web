<template>
  <div class="bodyRight">
    <form class="form form-horizontal">
      <fieldset>
        <legend>企业管理-公司信息设置</legend>
        <div class="btndiv">
          <button class="bbtn1"><i class="iconfont  iconweibiaoti520">编辑</i></button>
          <button class="bbtn2"><i class="iconfont iconshuaxin">刷新</i></button>
        </div>
        <div class="table-div">
          <table>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">企业名称：</label>
                <div class="col-sm-10">
                  <input class="form-control" type="text" value="仓库公司" disabled />
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">企业性质：</label>
                <div class="col-sm-10">
                  <select class="form-control" disabled >
                    <option v-for="item of BusinessNature">{{item}}</option>
                  </select>
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">经营范围：</label>
                <div class="col-sm-10">
                  <input class="form-control" type="text" value="仓库各方面管理" disabled />
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">成立时间：</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="date" />
                </div>
              </div>
<!--              <td>2019/5/31</td>-->
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">注册资金：</label>
<!--                <div class="input-group col-md-6">-->
<!--                  <span class="input-group-addon">$</span>-->
<!--                  <input type="email" class="form-control" placeholder="金额">-->
<!--                  <div class="input-group-addon">.00</div>-->
<!--                </div>-->
                <div class="input-group col-md-10">
                  <span class="input-group-addon">￥</span>
                  <input type="text" class="form-control"  style="width: 617.34px;">
                  <span class="input-group-addon">万元</span>
                </div>
              </div>
            </tr>
            <tr>
              <div class="form-group">
                <label class="head col-sm-2 control-label">员工人数：</label>
                <div class="radio col-md-10">
<!--                  <input class="form-control" type="text" value="6人" disabled />-->
                  <label>
                    <input type="radio" name="cb" />1-20人
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
                <label class="head col-sm-2 control-label">占地面积：</label>
                <div class="col-sm-10">
                  <input class="form-control" type="text" value="60平方米" disabled />
                </div>
              </div>
            </tr>
            <tr v-if="show">
              <button>确认</button>
              <button>重置</button>
            </tr>
          </table>
        </div>
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
    }
  }
</script>

<style scoped>
  .bodyRight{
    height:503px;
    background: #F5F5F5;
    font-size: 14px;
    font-family: Arial;
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
  .btndiv{
    padding-top: 10px;
    color:#ffffff;
  }
  .bbtn1{
    background-color: #1E9FFF;
    border: #1E9FFF solid 1px;
    border-radius:2px;
    height: 22px;
    width: 60px;
  }
  .bbtn1:hover{
    background-color: #3EACFE;
    border: #3EACFE solid 1px;
  }
  .bbtn2{
    background-color: #009688;
    border: #009688 solid 1px;
    border-radius:2px;
    height: 22px;
    width: 60px;
  }
  .bbtn2:hover{
    background-color: #2FA89D;
    border: #2FA89D solid 1px;
  }
  i{
    font-size: 14px;
  }
.table-div{
  margin-top: 17px;
  color:#666666;
  height:360px;
  overflow-y: auto;
  font-size: 16px;
  font-family: "新宋体";
  border-top: #E6E6E6 solid 1px;
}
  table{
    margin-top: 18px;
    margin-left: 20px;
  }
  tr{
    height:60px;
  }
  .head{
    color:#222222;
    font-family: "字魂5号-无外润黑体";
  }
  .form-control{
    border-radius: 3px;
    width:730px;
    height: 38px;
    font-size: 16px;
    color: #A3A3A3;
  }
  .input-group{
    padding-left: 15px;
  }
</style>
