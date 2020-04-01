<template>
<div>
    <div  v-if="list.length!=0" class="all">
        <div class="detail">
            <div class="dimg">
                <img :src="base+list[0].simg">
            </div>
            <div class="text">
                <div>{{list[0].sherf}}</div>
                <div>市场价： ￥{{list[0].surling}}</div>
                <div>
                    <span>价格</span>
                    <span>￥{{list[0].sprice}}</span>
                </div>
                <div>
                    <button @click="change({num:-1,stitle:list[0].stitle})">-</button>
                    <input type="text" v-model="num" @change="val()">
                    <button @click="change({num:+1,stitle:list[0].stitle})">+</button>
                    <span class="num">(库存9999+)</span>
                </div>
                <div class="btn">
                    <button @click="pay()">立即购买</button>
                    <button @click=add({sprice:list[0].sprice,simg:list[0].simg,stitle:list[0].stitle,num:1})>加入购物车</button>
                </div>
            </div>
        </div>
        <div class="tag">
            <el-tabs v-model="activeName" type="card" >
                <el-tab-pane label="商品信息" name="first">
                    <div class="info">
                        <div>商品描述</div>
                        <div >{{list[0].sproduct}}</div>
                        <div >{{list[0].slist}}</div>
                     </div>
                </el-tab-pane>
                <el-tab-pane label="购买记录" name="second">
                    <div class="pay">
                        <div>购买记录</div>
                        <div>
                            <div>购买人</div>
                            <div>会员级别</div>
                            <div>数量</div>
                            <div>属性</div>
                            <div>购买时间</div>
                        </div>
                        <div>共计0条记录</div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="顾客评价" name="third">
                    <div class="assess">
                         <div>顾客评价</div> 
                         <div>
                            <span>商品满意度:</span> 
                            <el-rate v-model="value" show-text></el-rate> 
                         </div>
                         <div>暂无评价</div>
                    </div>
                   
                </el-tab-pane>
                <el-tab-pane label="买家问答" name="fourth">
                    <div class="essay">
                        <div>
                            <span>买家问答</span>
                            <span>共计0条记录</span>
                        </div>
                        <div class="btn">
                             <button  class="btnpay">我要提问</button>
                        </div>
                    </div>
                    <div class="say">
                            暂无评价信息
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <div class="right"></div> 
</div>
</template>
<script>
  export default {
    data() {
      return {
          base:this.$baseurls(),
            activeName: 'first',
            list:[],
            cart:[],
            value:5,
            num:1,
           
            
      }
    
    },
    methods:{
        detail(){
            let sid=this.$route.params.sid
            if(sid!=""){
            sid=sid.slice(4)
            sid=parseInt(sid)
            this.$detail(sid)
            }
        },
        add(obj){
            obj.num=this.num
            this.$store.commit("update",obj)
            this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
            });
        },
        change(count){
            this.num+=count.num
            if(this.num<=1){
                this.num=1
            this.$message('不能在少了哟，亲!')
        // 提示消息
                return
            }
        },
        val(){
            this.num=parseInt(this.num)
        },
        pay(){
            if(this.$store.state.islogin==false){
                this.$message("请登录")
                this.$router.push("/login")
            }else{
                this.$message("改功能尚未开通")
            }
        }
    },
    created(){
        this.detail()
    }
  };
</script>
<style  scoped>
.all{
    float:left;
   margin-left: 21rem;
    margin-top:1rem;
    margin-bottom:2rem;
}
.detail{
    display: flex;
    width:58.8rem;
    height:20.25rem;
    border:1px solid #999;
    
}
.detail .dimg{
    border:1px solid #ccc;
    width:18.75rem;
    height:18.75rem;
    border-radius: .3rem;
    padding:.625rem;
    transform-style: preserve-3d;
}
.dimg:hover{
    transition-duration: 1.5s;
    transform: rotateY(60deg);
    background: linear-gradient(top,#fda3a5,#a2fa77);
}
.detail .text{
    margin-left: 1rem;
    margin-right: 4rem;
    text-align: left;
     flex:1;
}
.detail .text>:first-child{
    font-size: 1.2rem;
    color:#000;
    padding-bottom:.4rem;
    font-weight: bold;
    border-bottom: 1px solid #ccc;

}
.detail .text>:nth-child(2){
    font-size: .8rem;
    color: #aaa;
    padding:.8rem 0;
    text-decoration: line-through;
}
.detail .text>:nth-child(3){
    font-size: .8rem;
    font-weight: normal;

}
.detail .text>:nth-child(3)>:last-child{
    font-size: 1.2rem;
    color: tomato;
    margin-left: 1rem;
}
.detail .text>:nth-child(4)>button{
    width:2rem;
    /* border-radius: .3rem; */
}
.detail .text>:nth-child(4)>input{
    width:3rem;
    text-align: center;
    margin:.6rem .3rem;
}
.detail .text>:nth-child(4)>:last-child{
    font-size: .8rem;
}
.detail .btn>button{
    width:8.125rem;
    height:2.25rem;
    font-size: 1rem;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.6);
    border:0;
    color:#fff;
    margin-top:1rem;
}
.btn>:first-child{
    background: linear-gradient(top , #ff5e00, #ff2e00);
}
.btn>:first-child:hover{
   background: linear-gradient(top , #f05e00, #ff2e33);
}
.detail .btn>:last-child{
    
     background: linear-gradient(top , #ace0f3, #9bc0e3);
    margin-left: .5rem;
    
}
.tag{
    margin-top:1rem;
    width:58.8rem;
}
.tag .info{
    border:1px solid #aaa;
    text-align: left;
    padding-left: .5rem;
    font-size: .8rem;
    color:#333;
    
}
.tag .info>div{
    margin: 1.7rem 0;
}
.tag .info>:nth-child(2){
    border-bottom: 1px solid #ccc;
    padding-bottom:1.7rem;
}
.tag .pay{
  
    color:#222;
    font-weight: 600;
}
.tag .pay>:first-child{
     border-top:2px solid #bbb;
    text-align: left;
    font-size: 1.1rem;
    padding:.5rem .7rem;
    background: linear-gradient(top,#ccc,#fff);

}
.tag .pay>:nth-child(2){
    padding:1rem .7rem;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    border-bottom:2px solid #bbb;
}
.tag .pay>:nth-child(3){
    padding:.7rem;
    font-size:.7rem;
    font-weight: normal;
    color:#999;
    text-align: right;
}
.tag .assess>:first-child{
     color:#222;
    font-weight: 600;
     border-top:2px solid #bbb;
    text-align: left;
    font-size: 1.1rem;
    padding:.5rem .7rem;
    background: linear-gradient(top,#ccc,#fff); 
}
.tag .assess>:nth-child(2){
    padding:1rem .7rem;
    display: flex;
    justify-content: start;
    font-size: .8rem;
}
.tag .assess>:nth-child(3){
    padding:.7rem;
    text-align: left;
    font-size:.8rem
}
.essay{
    display:flex;
    justify-content: space-between;
    color:#222;
    font-weight: 600;
     border-top:2px solid #bbb;
    text-align: left;
    font-size: 1.1rem;
    padding:.5rem .7rem;
    background: linear-gradient(top,#ccc,#fff); 
}
.essay .btnpay{
    padding:.2rem .5rem;
    color:#fff;
}
.essay span+span{
    margin-left:1.5rem;
    
}
.essay span:last-child{
    font-size: .8rem;
    color:#777;
}
.say{
    padding:3rem .7rem 5rem .7rem;
    font-size: .8rem;
    color:#777;
    text-align: left;
}
.num{
    margin-left: .5rem;
}
.right{
    clear: both;
}
</style>