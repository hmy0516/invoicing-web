<template>
    <div>
      <div>
        <div>
          <div><el-button type="primary" @click="submitForm('ruleForm')">提交</el-button></div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item>
              <el-col :span="5">
                <el-form-item label="单据日期:" prop="danJuDate">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.danJuDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="编号:" prop="bianHao">
                  <el-input readonly="readonly" background="#CCCCCC" v-model="ruleForm.bianHao"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="交货日期:" prop="jiaoHuoDate">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.jiaoHuoDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-col :span="5">
                <el-form-item label="客户:" prop="keHu">
                  <el-select v-model="ruleForm.keHu" placeholder="请选择客户">
                    <el-option label="客户一" value="kehu1"></el-option>
                    <el-option label="客户二" value="kehu2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="销售人员:" prop="xiaoShou">
                  <el-select v-model="ruleForm.xiaoShou" placeholder="请选择销售人员">
                    <el-option label="销售一" value="xiaoshou1"></el-option>
                    <el-option label="销售二" value="xiaoshou2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="5">
                <el-form-item label="合同号:" prop="heTong">
                  <el-input v-model="ruleForm.heTong"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        danJuDate: '',
        bianHao:'',
        jiaoHuoDate: '',
        keHu: [],
        xiaoShou: [],
        heTong: ''
      },
      rules: {
        danJuDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change'
          }
        ],
        jiaoHuoDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        keHu: [
          { type: 'array', required: true, message: '请选择客户', trigger: 'change'}
        ],
        xiaoShou: [
          { type: 'array', required: true, message: '请选择销售人员', trigger: 'change'}
        ],
        heTong: [
          { required: true, message: '请填写合同号', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
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
