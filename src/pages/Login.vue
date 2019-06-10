<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm()">
            <!--<i class="el-icon-view el-input__icon" :style="fontstyle" slot="suffix" @click="showPassword"></i>-->
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
          <el-input v-model="ruleForm.verifyCode" placeholder="请输入验证码" class="identifyinput" @keyup.enter.native="submitForm()"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="identifyBox">
            <div @click="refreshCode">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
            <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
          </div>
        </el-form-item>
        <el-checkbox v-model="checked">记住账号</el-checkbox>
        <div class="login-btn">
          <el-button type="primary" v-loading="loading" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
	  //import loginApi from '../api/login';
    import SIdentify from './common/Identify'
    export default {
        name:'Login',
        components: { SIdentify },
        data(){
            // 验证码自定义验证规则
            const validateVerifycode = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入验证码'))
              } else if (value !== this.identifyCode) {
                console.log('validateVerifycode:', value);
                this.refreshCode();
                callback(new Error('验证码不正确!'))
              } else {
                callback()
              }
            }
            return {
                loading:false,
                ruleForm: {
                    username: 'a001',
                    password: '123456',
                    verifyCode: ''
                },
                checked: false,
                identifyCodes: '1234567890',
                identifyCode: '',
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min:3, max:6, message: '账号长度3-6', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min:3, max:6, message: '密码长度3-6', trigger: 'blur' }
                    ],
                    verifyCode: [
                        { required: true, trigger: 'blur', validator: validateVerifycode }
                    ]
                }
            }
        },
        mounted() {
          // 验证码初始化
          this.identifyCode = ''
          this.makeCode(this.identifyCodes, 4)
        },
        methods: {
            submitForm() {
              this.$refs.ruleForm.validate(v=>{
                if(v){
                  this.axios.post("/api/login",this.ruleForm).then(res=>{
                    if(res.data.status==200){
                      this.$message({
                        message:res.data.msg,
                        type:'success'
                      });
                      this.$router.push("/Home")
                    }else{
                      this.refreshCode();
                      this.$message.error(res.data.msg)
                    }
                  })
                }else{
                  this.refreshCode();
                  console.log("失败")
                }
              })
            },
          // 生成随机数
          randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
          },
          // 切换验证码
          refreshCode() {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
          },
          // 生成四位随机验证码
          makeCode(o, l) {
            for (let i = 0; i < l; i++) {
              this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ]
            }
            console.log(this.identifyCode)
          }
        }
    }
</script>

<style scoped>
    .identifyBox{
      display: flex;
      justify-content: space-between;
      margin-top:7px;
    }
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../assets/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
