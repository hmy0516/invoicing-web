<template>
  <div class="bodyRight">
      <form class="form form-horizontal">
        <fieldset class="fieldset">
          <legend>企业管理-职务设置</legend>
<!--          <div class="btndiv">-->
<!--            <button class="btn-edit" @click="Click"><i class="iconfont  iconweibiaoti520">编辑</i></button>-->
<!--            <button class="btn-refresh"><i class="iconfont iconshuaxin">刷新</i></button>-->
<!--          </div>-->
        </fieldset>
      </form>
  </div>
</template>

<script>
  export default {
    name:'Content'
  }
</script>

<style scoped>
  .bodyRight{
    height:100%;
    width: 100%;
    background: #F5F5F5;
    font-size: 0.9em;
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
</style>
