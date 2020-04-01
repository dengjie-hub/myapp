<template>
    <div class="all">
        <!-- 特惠活动 -->
       <div class="odds">
           <div class="times">
               <div class="iconfont icon-youhui icon"></div>
               <div>
                   <div>特惠活动</div>
                    <div>08:00-18:00</div>
               </div>
               
           </div>
           <div class="pure">
               纯净带来的鲜美好味，是自然给我们的美味一击！
           </div>
           <div class="meal"> 
               美味让你尖叫，低价让你偷笑
           </div>
       </div>
       <!-- 特惠活动列表 -->
       <div class="car" v-if="list.length!=0">
            <div>
                <img :src="base+item.hy_bimg2" v-for="(item,i) of list" :key="i" @click="ban($event,item.sid)">
            </div>
       </div>
       <!-- 精选海鲜标题 -->
       <div class="title">
           <div>
                <span></span>
                <span>精选水鲜</span>
                <span>/ 鲜活冰鲜，给家人较新鲜的味道 /</span>
           </div>
           <div></div>
           <div>
               <el-button plain size="mini">大闸蟹</el-button>
           </div>
           
       </div>
       <!-- 精选海鲜列表 -->
        <div>
           <div class="product" v-if="product.length!=0">
               <div>
                  <img :src="base+product[0].h_img" @click="det(product[0].sid)"> 
               </div>
               <div>
                  <img :src="base+product[1].h_img" @click="det(product[1].sid)"> 
                  <img :src="base+product[2].h_img" @click="det(product[2].sid)"> 
               </div>
               <div class="htitle">
                  <img :src="base+product[3].h_img" @click="det(product[3].sid)"> 
                  <span>{{product[3].htitle}}</span>
                  <div>价格:￥{{parseInt(product[3].hprice).toFixed(2)}}</div>
               </div>
               <div>
                  <img :src="base+product[4].h_img" @click="det(product[4].sid)"> 
                  <img :src="base+product[5].h_img" @click="det(product[5].sid)"> 
               </div>
               
            </div> 
        </div>
        <!-- 双11 -->
        <div class="doubel">
            <img :src="this.$baseurls()+'img_g_12_bqbx.jpg'" alt="">
        </div>
        <!-- 海鲜水产标题 -->
         <div class="title">
           <div>
                <span></span>
                <span>海鲜水产</span>
                <span>/ 浓郁海味，领“鲜”一步 /</span>
           </div>
           <div></div>
           <div>
               <el-button plain size="mini">冻虾</el-button>
           </div>
           
       </div>
       <!-- 海鲜水产内容 -->
       <div class="aquatic">
           <img :src="this.$baseurls()+'ing_dx_15_2v2c.jpg'" @click="det(5)">
           <div class="aimg">
               <div v-for="(item,i) of aquatic" :key="i" @click="ban($event,item.sid)">
                    <img :src="base+item.h_img" >
                    <div>{{item.htitle}}</div>
                    <div>价格:￥{{parseInt(item.hprice).toFixed(2)}}</div>
               </div>
           </div>
           <div>
               <!-- 海鲜水产轮播图 -->
            <div :style="{backgroundImage:`url(${base}produt_18_sssp.jpg)`}" class="aaa">
                <div >
                <el-carousel indicator-position="none" >
                <el-carousel-item v-for="(item,i ) of banner3" :key="i" >
                   <img :src="base+item.h_img" @click="ban($event,item.sid)">
                </el-carousel-item>
                </el-carousel>
                <div class="bannertext">
                    <div>全球营养海鲜</div>
                    <div>十年海产经验</div>
                    <div>让更多家庭喜欢</div>
                    <el-button plain size="medium">立即抢购</el-button>
                </div>
                </div>
            </div>
            </div>    
            
       </div>
       <!-- 海鲜水产底部图片 -->
       <div class="aquatic">
          <div class="aimg botimg">
               <div v-for="(item,i) of botimg" :key="i" @click="ban($event,item.sid)">
                    <img :src="base+item.h_img" >
                    <div>{{item.htitle}}</div>
                    <div>价格:￥{{parseInt(item.hprice).toFixed(2)}}</div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            product:[],
            base:this.$baseurls(),
            aquatic:[],
            banner3:[],
            botimg:[]

        }
    },
    created(){
        this.$banner2()
        this.$shop1()
        this.$shop2()
        this.$banner3()
        this.$botimg()
    },
    methods:{
        change(i){

            this.count+=i
            this.count>=this.list.length-1&&(this.count=0)
            
            console.log(this.count)
        },
         ban(e,id){
          if(e.target.nodeName=="IMG"){
              this.$router.push(`/details/sid=${id}`)
          }

      },
       det(id){
              this.$router.push(`/details/sid=${id}`)
      },
    }
}
</script>
<style  scoped>
.all{
    width:75rem;
    margin:2.5rem auto 9rem auto;
}
.odds{
    
    height:3.75rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#fe575f;
    opacity: .9;
    color:#ffffff;

}
.odds .times{
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    

}
.times>.icon{
    font-size: 3.5rem;
    margin-right: 1.3rem;
}
.times>div>div:first-child{
    font-size: 1rem;
}
.times>div>div:last-child{
    font-size: .7rem;
}
.pure{
    opacity: .7;
    font-size: .9rem;
}
.meal{
    font-size: 1.5rem;
    padding-right: 6rem;
    font-weight: bold;
}
.imgw{
    width:100%;
    height:100%;
}
.car img{
  /* width:12.5rem; */
  height:10.625rem;
  padding:.625rem 1.25rem;
  margin:0 .8rem;
}
.title{
    margin: .4rem 0;
    display: flex;
    justify-content: space-between;
}
.title>:nth-child(2){
    width:65%;
    border-bottom: 1px solid #ccc;
}
.title>div>span:nth-child(2){
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 2rem;
    color:#000;
}
.title>div>span:last-child{
    font-size: .8rem;
    color:#999;
}
.product{
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;

}
.product img{
    border:1px solid #eee;
    border-radius: .3rem;
}
.product img:hover{
    transform: scale(1.05);
}
/* .htitle span,.htitle>div{
    margin-top:1.2rem;
} */
.aquatic{
  display: flex; 
}
.aquatic>.aimg{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:37.5rem;
    height:28.75rem;
    
}
.aquatic>.aimg img{
    width:11.25rem;
    height:11.875;

}
.aquatic>.aimg>div>div:nth-child(2),.htitle>span{
    font-size: .9rem;
    font-weight: normal;
}
.aquatic>.aimg>div>div:last-child,.htitle>div{
    font-size: .8rem;
    color: #aaa;
    padding:.2rem;
}
.aaa{
    width:12.5rem;
    height:100%;
}
.aaa img{
    width: 100%;
    /* height: */
}
.bannertext{
    color:ivory;

}
.bannertext>div:first-child{
    font-size: 1rem;
    padding-bottom:1rem;
}
.bannertext>div:nth-child(2),.bannertext>div:nth-child(3){
    font-size: .75rem;
   margin:0 auto;
}
.bannertext button{
    opacity: .6;
    margin-top:1rem;
}
.aquatic>.botimg{
    width:100% ;
    justify-content: space-between;
    margin: 1rem auto;
   

}
.aquatic>.botimg>div{
    border:1px solid #eee;
    padding:.9375rem;
    margin-top:.7rem;
    
}
.aquatic>.botimg>div>img{
    width:12.5rem;
    /* margin-top: .8rem; */
}
.aquatic>.botimg>div:hover{
    box-shadow: 0px 0px 2px 1px #ccc;
}





</style>