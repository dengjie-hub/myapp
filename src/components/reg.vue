<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

  <el-dialog
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <div class="login">
    <div class="logtext">
      请 注 册 
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"  placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.pwd"  placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input v-model="formLabelAlign.pwd1"  placeholder="请确认密码" @blur="pwd()"></el-input>
  </el-form-item>
  <el-form-item label="电话" >
    <el-input v-model="formLabelAlign.phone"  placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="formLabelAlign.email"  placeholder="请输入邮箱"></el-input>
  </el-form-item>
</el-form>
    </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="login()" >注册</el-button>
  </span>
</el-dialog>
  </div>
</template>


<script>
  export default {
    data() {
      return {
           labelPosition: 'right',
        formLabelAlign: {
          name: '',
          pwd: '',
          pwd1: '',
          phone:'',
          email:''

        },
        dialogVisible: true,
         input: '',
         pass:"",
         pass1:"",
         code:""
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.$router.push("/")
          })
          .catch(_ => {});
      },
        login(){
            // console.log(123)
            // 1 创建正则表达式验证用户名(字母数字3-12)
            var reg1=/1[3-8]\d{9}/
            // 邮箱 验证格式
            var reg3=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            // 2 获取用户名密码
            var phone=this.formLabelAlign.phone
            var upwd=this.formLabelAlign.pwd
            var name=this.formLabelAlign.name
            var email=this.formLabelAlign.email
            // 3 验证用户名如果格式不正确提示错误信息
             // 4 验证密码如果格式不正确提示错误信息
            if(upwd.length<6){
                 this.$message('密码长度过低');
                 return
            }
            if(!reg1.test(phone)){
                 this.$message('手机号码格式不正确');
                return
            }
            // 5 验证邮箱格式是否正确
            if(!reg3.test(email)){
                  this.$message('邮箱不正确');
                 return
            }
            // 6 创建url变量保存请求服务器地址
            var url="reg"
            // 7 创建obj变量保存请求的参数
            var obj={"uphone":phone,"upwd":upwd,"uname":this.formLabelAlign.name,"uemail":email};
            // 7 发送ajax请求
            this.axios.post(url,obj).then(res=>{
                if(res.data.code==-1){

                   this.$message('注册失败');
                }else{
                   this.$message('注册成功');
                    this.$router.push("/login")
                }
            })
            // 8 接受服务器返回结果
            // 9 如果是-1则提示用户名或者密码错误
            // 10 如果是1则跳转商品列表页product+
            // 11 测试 152825452391 1111Qw
        },
    
    pwd(){
        if(this.formLabelAlign.pwd1!=""&&this.formLabelAlign.pwd1!=this.formLabelAlign.pwd){
            this.$message('密码不正确');
            this.formLabelAlign.pwd1=""
            return 
        }
    }
    }
  };
</script>
<style  scoped>
.logtext{
  font-size: 1.3rem;
  color:#409eff;
  margin-bottom: 1rem;
}
  .login .text{
    display: flex;
    justify-content: space-between;
     margin-top: 1rem;
  }
 
 
</style>