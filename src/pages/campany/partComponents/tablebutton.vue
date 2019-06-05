<template>
  <div class="btndiv">
    <button class="bbtn1"><i class="iconfont  iconweibiaoti520">编辑</i></button>
    <button class="bbtn2" @click="Delete"><i class="iconfont  iconshanchu">删除</i></button>
  </div>
</template>

<script>
  export default {
    name:'TbButton',
    props:["id"],
    data:function(){
      return{
        cid:this.id
      }
    },
    methods:{
      Delete:function(){
        alert("确定删除该部门？")
      }
    }
  }
</script>

<style scoped>
  .btndiv{
    font-size: 14px;
    color:#ffffff;
    font-family: Arial;
  }
  .bbtn1{
    background-color: #1E9FFF;
    border: #1E9FFF solid 1px;
    border-radius:2px;
    height: 28px;
    width: 65px;
  }
  .bbtn1:hover{
    background-color: #3EACFE;
    border: #3EACFE solid 1px;
  }
  .bbtn2{
    background-color: #FF5722;
    border: #FF5722 solid 1px;
    border-radius:2px;
    height: 28px;
    width: 65px;
  }
  .bbtn2:hover{
    background-color: #FD7449;
    border: #FD7449 solid 1px;
  }
i{
  font-size: 14px;
}
</style>
