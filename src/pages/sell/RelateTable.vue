<template>
  <div>
    <el-button type="primary" @click="addLine">添加行数</el-button>
    <el-button type="primary" @click="save">提交</el-button>
    <div class="TestWord">
      <el-table
        class="table"
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="cDesc" label="商品">
          <template slot-scope="scope">
            <el-input v-model="scope.row.cDesc" placeholder="商品" @click.native="addDesc"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="cFormat" label="规格">
          <template slot-scope="scope">
            <el-input v-model="scope.row.cFormat" placeholder="规格"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="fQuant" label="数量">
          <template slot-scope="scope">
            <el-input style="width: 120px" v-model="scope.row.fQuant" placeholder="数量"></el-input>{{scope.row.cBunit}}
          </template>
        </el-table-column>
        <el-table-column prop="fPrice" label="单价">
          <template slot-scope="scope">
            <el-input size="2" v-model="scope.row.fPrice" placeholder="单价"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="fAmount" label="总金额">
          <template slot-scope="scope">
            <el-input v-model="scope.row.fAmount" placeholder="总金额"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="cComment" label="备注">
          <template slot-scope="scope">
            <el-input type="textarea" v-model="scope.row.cComment"></el-input>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              v-if="!scope.row.editing"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <el-dialog title="选择商品" :visible.sync="dialogTableVisible">
      <el-table :data="dialogTable" @selection-change="handleSelectionChange" :row-key="getRowKeys">
        <el-table-column type="selection" :reserve-selection="true" width="50" prop="cId">
        </el-table-column>
        <el-table-column property="cId" label="编号" width="150"></el-table-column>
        <el-table-column property="cDesc" label="商品" width="150"></el-table-column>
        <el-table-column property="cFormat" label="规格" width="200"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--<el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>您有一条新订单{{this.$parent.ruleForm.saleNumber}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">查看订单</el-button>
  </span>
    </el-dialog>-->
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[{
        cDesc: '',
        fAmount: '',
        cComment: '',
        fQuant: '',
        fPrice: '',
        cFormat:'',
        cBunit:'',
        cGid:'',
        iNo:'',
        dtDt:''
      }],
      dialogTable:[{
        cDesc: '',
        cFormat:'',
        cId:'',
        dtDt:''
      }],
      dialogTableVisible: false,
      //dialogVisible: false,
      // 获取row的key值
      getRowKeys(row) {
        return row.cId;
      },
      selectedData: []
    }
  },
  created() { // 页面创建生命周期函数
    //this.initWebSocket()
  },
  destroyed: function () { // 离开页面生命周期函数
    this.websocketclose();
  },
  methods:{
    addLine(){ //添加行数
      var newValue = {
        cDesc: '',
        fAmount: '',
        cComment: '',
        fQuant: '',
        fPrice: '',
        cFormat:''
      };
      //添加新的行数
      this.tableData.push(newValue);
    },
    addDesc(){ //添加商品
      this.axios.get("/api/goods").then((res)=>{
        this.dialogTable=res.data.data.goods;
        this.dialogTableVisible=true;
      }).catch(function(res){
      });
    },
    handleDelete(index){ //删除行数
      this.tableData.splice(index, 1)
    },
    handleSelectionChange(rows) {
      this.selectedData = [];
      if (rows) {
        rows.forEach(row => {
          if (row) {
            console.log("rowcDesc",row.cDesc);
            console.log("row",row);
            var d={
              cDesc: row.cDesc,
              dtDt: this.$parent.ruleForm.creatDate,
              fAmount: '',
              cComment: '',
              fQuant: '',
              fPrice: '',
              cFormat:row.cFormat,
              cBunit:row.cBunit,
              cGid:row.cId,
              iNo:this.$parent.ruleForm.saleNumber
            };
            this.selectedData.push(d);
          }
        });
      }
      this.tableData=this.selectedData;
    },
    save(){
      //这部分应该是保存提交你添加的内容
      console.log("提交数据",this.tableData);
      console.log(this.$parent.ruleForm.customer);
      console.log(this.$parent.ruleForm.creatDate);
      console.log(this.$parent.ruleForm.salePer);
      this.axios({
        method: 'post',
        url: '/api/SaleOrder',
        data: {
          dtDt:this.$parent.ruleForm.creatDate,
          iNo:this.$parent.ruleForm.saleNumber,
          cCid:this.$parent.ruleForm.customer,
          cClerk:this.$parent.ruleForm.salePer,
          iStatus:'0',
          detailList:this.tableData
        }
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      });
      this.dialogVisible=true
    },
    /*initWebSocket: function () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket("ws://localhost:8080/websocket");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      //var da = JSON.parse(e.data);
      console.log(e.data);
      this.dialogVisible=true
      //this.message = da;
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }*/
  }
}
</script>

<style scoped>
  .TestWord{
    padding-top: 3ex;
  }
</style>
