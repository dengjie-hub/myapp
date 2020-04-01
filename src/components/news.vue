<template>
<div>


    <div class="news">
        <div v-for="(item ,i) of list" :key="i" @click="det($event,item.sid)">
            <div>
                <img :src="base+item.simg" >
            </div>
            <div class="text">
                <div>{{item.sherf}}</div>
                <div>{{item.slist}}</div>
                <div>价格:￥{{parseInt(item.sprice).toFixed(2)}}</div>
                <div class="strike">
                    <div>
                        <div>成交</div>
                        <div>0</div>
                    </div>
                    <div>
                        <div>评论</div>
                        <div>0</div>
                    </div>
                    <div>
                        <div>库存</div>
                        <div>9999+</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="all"><span>共有{{list.length}}条记录</span></div>
    </div>
    <div class="right"></div>
</div>
</template>
<script>
export default {
    data(){
        return{
            base:this.$baseurls(),
            list:[]
        }
        
    },
    methods:{
        det(e,id){
          if(e.target.nodeName=="IMG"){
              this.$router.push(`/details/sid=${id}`)
            //   跳转到指定地页面
          }
      }
    },
    created(){
        this.$news(1)
    }
}
</script>
<style  scoped>
.news{
    float:left;
   margin-left: 21rem;
    width:58.6rem;
    display: flex;
    justify-content: space-around;
    padding:1rem;
    flex-wrap: wrap;
}
.news img{
    width:12.5rem;
    height:12.5rem;
}
.news>div{
    width:28rem;
    display:flex;
    border:1px solid #ccc;
    border-radius: .3rem;
    margin:.6rem 0;

}
.news .text{
    width:15.5rem;
    padding:0 .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}
.news .text:hover{
    background:#fe575f;
}
.news .text:hover div{
    color:#fff !important;
}
.news .text>:first-child{
    margin-top: 3rem;
    font-size: .8rem;
    color:#000;
    text-align: right;
}
.news .text>:nth-child(2){
    font-size:.7rem;
    color:#ccc;
    text-align: left;
}
.news .text>:nth-child(3){
    font-size: .9rem;
    color:#fe575f;
    font-weight: 600;
    text-align: right;
    }
.news .text>.strike{
    border-top:1px dashed #aaa;
    display: flex;
    justify-content:flex-end;
}
.news .text>.strike>div+div{
    border-left:1px solid #aaa;
    
}
.news .text>.strike>div{
    padding:0 .8rem;
    margin-top:.3rem;
    font-size: .7rem;
   
}
.news .text>.strike>div>div{
    /* text-align: center; */
    box-sizing:content-box;
    /* align-items: center; */
    /* margin:0 auto; */
}
.all{
    border:0 !important;
    text-align: center;
}
.all>span{
    margin:0 auto;
}
.right{
    clear: both;
}
</style>