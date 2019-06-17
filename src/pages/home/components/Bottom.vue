<template>
  <div>
        <div class="bottom">&nbsp;&nbsp;&nbsp;&nbsp;© layui.com - 底部固定区域</div>
  </div>
</template>

<script>
  export default {
    name:'HeaderBottom'
  }
</script>

<style>
  .bottom{
    z-index: 9998;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: 10%;
    padding: 15px;
    background-color: #EBEBEB;
    text-align: center;
  }
</style>
