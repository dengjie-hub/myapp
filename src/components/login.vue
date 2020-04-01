<template>
  <div>
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

  <el-dialog
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <div class="login">
    <div class="logtext">
      请 登 录
    </div>
    <div class="text">
      <el-input placeholder="请输入用户名" v-model="input" clearable maxlength=12>
        <template slot="prepend" class="inpw">用 户</template>
        </el-input>
    </div>
    <div class="text">
      <el-input placeholder="请输入密码" v-model="pass" show-password maxlength=12>
        <template slot="prepend" class="inpw">密 码:</template>
      </el-input>
    </div>
    
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="()=>{this.$router.push('/reg')}">注册</el-button>
    <el-button type="primary" @click="login()" >登录</el-button>
  </span>
</el-dialog>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        dialogVisible: true,
         input: '',
         pass:"",
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
        let uname=this.input;
        let upwd=this.pass;
        this.$user(uname,upwd)
        setTimeout(() => {

         if(this.code==1){
          this.$message('登录成功');
          // 将全局islogin改为true
          this.$store.commit("log")
          this.$router.push("/")
        }else{
           this.$message('用户或者密码不正确');
           return
        }
        }, 500);
        
        
      
         
      }
    }
  };
</script>
<style  scoped>
.logtext{
  font-size: 1.3rem;
  color:#409eff;
}
  .login .text{
    display: flex;
    justify-content: space-between;
     margin-top: 1rem;
  }
 
 
</style>