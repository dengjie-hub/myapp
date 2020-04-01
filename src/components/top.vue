<template>
    <div>
        <!-- top -->
        <div class="top">
            <img :src="this.$baseurls()+'logo_01hyx.png'">
            <div class="title">
                <div>来自一</div>
                <div class="container">
                    <div>万公里外</div>
                    <div>肉质紧实</div>
                    <div>新鲜美味</div>
                    <div>体硕肉肥</div>
                    <div>产地直供</div>
                </div>
            </div>
            <div class="name">
                <input type="text" class="text" placeholder="请输入商品名称" autofocus>
                <div>
                    <input type="radio" name="a" checked><span>名称</span>
                    <input type="radio" name="a"><span>描述</span>
                    <input type="radio" name="a"><span>内容</span>
                </div>
            </div>
            <span class="login" v-if="this.$store.state.islogin">
                <span>欢迎回来</span>
            </span>
            <span class="login" v-else>
                    <span @click="()=>{this.$router.push('/login')}">登录</span>
                    <span>|</span>
                    <span @click="()=>{this.$router.push('/reg')}">注册</span>
                </span>
            <div class="set">
                <span>设为首页</span>
                <span>|</span>
                <span>添加收藏</span>
            </div>
            <div class="hea">
                Health is better than wealth
            </div>
             <div class="float"></div>
        </div>
       
        <!-- sort -->
        <div class="sort">
            <div>所有商品分类</div>
            <div class="textline">
                <div>
                    <router-link to="/">首页</router-link>
                </div>
                <div>
                    <router-link to="/sort"> 全部分类</router-link>
                    </div>
                <div>
                    <router-link to="/news"> 新鲜水产</router-link>
                </div>
                <div>
                    <router-link to="/header">放心鲜肉</router-link>   
                </div>
                <div>
                     <router-link to="/move">特惠活动</router-link>   
                </div>
            </div>
            <div>
                <div>
                    <el-button @click="drawer = true" style="margin-left: 16px;" ><span class="iconfont icon-gouwuche"></span> 购物车
                    </el-button>
                    <el-drawer
                    title="我是标题"
                    :visible.sync="drawer"
                    :with-header="false"
                    size="50rem">
                    <cart></cart>
                    </el-drawer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cart from "./cart"
export default {
    data() {
      return {
        drawer: false,
      };
    },
   components:{
       cart
  }
}
</script>
<style  scoped>
.float{
    clear: both;
}
    .top{
        /* margin:0; */
        /* min-width: 64rem; */
        width:100%;
        height:7.5rem;
        background:#ffdd00;
        white-space: nowrap;
    }
    .top>img{
       float:left;
       margin-left:5%;
    }
    .title{
        float: left;
        margin-left: 2rem;
        text-align: right;
        color:#000;
    }
    .title>:first-child{
        font-size:1.2rem;
    }
    .container{
    writing-mode: vertical-rl;
    /* 设置文本y轴排列 */
    padding-right: 0;
    }
    .container>div{
        border-left: 1px solid #000;
        font-size:.8rem;
        letter-spacing: 3px;
        /* 设置文本之间间距 */
        padding:3px;
        
    }
    .container>:first-child{
        padding-left: 5px;
    }
    .text{
        /* float: left; */
        /* margin:4rem; */
        width:28rem;
        min-width: 18rem;
        height:1.5rem;
        border-radius: 1.2rem;
        border:.4rem solid #fff;
        background: #ddd;
        padding-left: .5rem;
        outline: none; 
        /* 去掉input默认框 */
        
    }
    .name{
        
        float: left;
        margin:2rem 0 0 4rem;
        /* margin-left:4rem; */
    }
    .name>div{
        text-align: left;
        font-size: .6rem;
        margin-top:.2rem;
    }
    .set{
        color:#000;
        font-size: .8rem;
        /* float: right; */
    padding:2rem 6rem 0 0;
    
    }
    .set>span+span{
        margin-left: .3rem;
    }
    .hea{
        /* float:right; */
        color:#fff;
        margin-right: 6rem;
        font-size: .9rem;
        
    }
    .sort{
        display: flex;
        justify-content: space-between;
        height:2.5rem;
        background:#da0207;
        color:#fff;
        font-size: .8rem;
    }
    .sort div{
        line-height: 2.5rem;
    }
    .sort>:first-child,.sort>:last-child{
        /* width:20%; */
        line-height: 2.5rem;
    }
    .sort>:first-child{
        margin-left: 3rem;
       min-width:16rem;
        background: rgb(255, 0, 6);
    }
    .sort>:nth-child(2){
        width:60%;
        display:flex;
        justify-content: space-around;
        margin-left: 1rem;
    }
    .sort>:nth-child(2)>div:hover{
        color:#ffdd00;
    }
    .sort>:last-child{
        margin:0 4rem 0 0;
         border-radius:0;
    }
    .textline a{
        text-decoration: none;
        color:#fff;
    }
    a:hover{
       color:#ffdd00; 
    }
    .login{
        float: right;
        color:#fff;
        padding-left: 1rem;
        margin:1rem;
    }
    .login>span{
        padding:.5rem;
    }
</style>