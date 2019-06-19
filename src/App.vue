<template>
  <div id="app">
    <router-view/>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>您有一条新订单{{message}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">查看订单</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        dialogVisible: false,
        message:'',
        cUid:''
      }
    },
    created(){
      /*this.initWebSocket(),
      console.log("vuelogin",this.$refs.home)
      console.log("vueuid",this.uid)*/
    },
    methods:{

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style>
  @import "../static/css/main.css";
  @import "../static/css/color-dark.css";     /*深色主题*/
  #app{
    margin: 0 auto;
    min-width: 600px;      /*最小宽度*/
    max-width: 2880px;
  }
  html,body,#app{
    height: 100%;
  }
</style>
