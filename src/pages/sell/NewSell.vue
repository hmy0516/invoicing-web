<template>
  <div class="bodyRight">
    <div><el-button type="primary" @click="submitForm('ruleForm')">提交</el-button></div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-col :span="5">
        <el-form-item label="单据日期:" prop="creatDate">
          <el-date-picker type="date" :picker-options="pickerOptions0" placeholder="选择日期" v-model="ruleForm.creatDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="销售单号:" prop="saleNumber">
          <el-input readonly="readonly" background="#CCCCCC" v-model="ruleForm.saleNumber"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="客户商" prop="customer">
          <el-select v-model="ruleForm.customer" placeholder="请选择客户商">
            <el-option label="客户商一" value="shanghai1"></el-option>
            <el-option label="客户商二" value="beijing2"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="销售人员" prop="salePer">
          <el-select v-model="ruleForm.salePer" placeholder="请选择活动区域">
            <el-option label="销售一" value="shanghai3"></el-option>
            <el-option label="销售二" value="beijing4"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <hr>
      <hr>

    </el-form>
    <RelateTable></RelateTable>

  </div>
</template>

<script>
import RelateTable from "./RelateTable";
export default {
  name:'Content',
  components: {RelateTable},
  data() {
    return {
      //限制今天之前的不能选择
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      details: [],
      formTypeOptions: [
        {
          value: 0,
          label: '主表'
        },
        {
          value: 1,
          label: '子表'
        }
      ],
      multipleSelection: [],
      formids: [],
      deleteIds: [],
      currentIndex: null,
      flowName: null,
      ruleForm: {
        creatDate: '',
        saleNumber:'',
        customer: '',
        salePer: ''
      },
      rules: {
        creatDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        customer: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        salePer: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    };
  },
  created() {
    this.saleNum();
    console.log(new Date().getFullYear())
    console.log(new Date().getMonth()+1)
    console.log(new Date().getDate())
  },
  methods: {
    saleNum(){
      var num= 1001;
      var month =new Date().getMonth()+1;
      num++;
      if(month<10){
        month='0'+month;
      }
      this.ruleForm.saleNumber=Number(`${new Date().getFullYear()}`+month+`${new Date().getDate()}`+1001);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
</style>
