<template>
  <div class="btndiv">
    <button class="bbtn1" type="button" data-toggle="modal" data-target="#addModal"><i class="iconfont icontianjia1">添加</i></button>
    <button class="bbtn2"><i class="iconfont iconshuaxin">刷新</i></button>
<!--    <button class="btn btn-default btn-sm">Button3</button>-->
    <Add id="addModal"></Add>
  </div>
</template>

<script>
  import Add from './add'
  export default {
    name:'Button',
    components:{
      Add:Add
    }
  }
</script>

<style scoped>
  .btndiv{
    /*border-bottom: #E6E6E6 solid 1px;*/
    padding-bottom: 15px;
    font-size: 14px;
    color:#ffffff;
    font-family: Arial;
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
</style>
