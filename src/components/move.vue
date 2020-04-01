<template>
    <div class="all">
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
            <!-- 双11 -->
        <div class="doubel">
            <img :src="this.$baseurls()+'img_g_12_bqbx.jpg'">
        </div>
        <!-- 特惠活动列表 -->
       <div class="car" v-if="list.length!=0">
            <div v-for="(item,i) of list" :key="i" class="text" @click="ban($event,item.sid)">
                <img :src="base+item.hy_bimg2">
                <div class="title">{{item.hy_btitle}}</div>
                <div class="price">
                    <span>原价:</span>
                    <span>￥{{parseInt(item.hy_bprice).toFixed(2)}}</span>
                </div>
                <div class="ruling">
                    <span>秒杀价:</span>
                    <span>￥{{parseInt(item.hy_bruling).toFixed(2)}}</span>
                </div>
                <div class="time">
                    <span class="iconfont icon-shijian"></span>
                    <span>已结束</span>
                </div>
                <div class="detail">{{item.hy_bdetail}}</div>
            </div>
       </div>
       <div class="last">共{{list.length}}条记录</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            product:[],
            base:this.$baseurls(),
             list:[]
        }
    },
    methods:{
        det(id){
              this.$router.push(`/details/sid=${id}`)
      },
      ban(e,id){
          if(e.target.nodeName=="IMG"){
              this.$router.push(`/details/sid=${id}`)
          }

      }
    },
    created(){
         this.$banner2()
         this.$shop1()
    }
}
</script>
<style  scoped>
.all{
    width:75rem;
    margin:1rem auto;
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
.car{
    margin-top:.6rem;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* justify-content: space-between; */
    /* justify-self: ; */
}
.car img{
  /* width:12.5rem; */
  height:10.625rem;
  padding:.625rem 1.25rem;
  margin:0 .8rem;
}
.text{
    /* padding:1rem; */
    box-sizing: border-box;
    text-align: left;
    border:1px solid #ccc;
    width:13.8rem;
}
.text:hover{
    border:1px solid #444;
}
.title,.ruling,.price,.time,.detail{
margin:.3rem .7rem;
}
.text .title{
    font-size: .85rem;
    color:#222;
    font-weight: 700;
}
.text .price,.ruling{
    font-size: .6rem;
    color:#777;
}
.text .price>:last-child{
    text-decoration: line-through;
}
.text .ruling>:last-child{
    font-size: .95rem;
    color:rgb(167, 73, 73);
}
.text .time{
   border:1px solid #aaa;
   height:1rem;
   font-size: .9rem;
   line-height: 1rem;
   padding: .1rem;
   border-radius: .3rem;
   color:#ccc;
   /* text-align: center; */
}
.text .time>:last-child{
    /* text-align: center; */
    margin-left:4rem;
    
}
.detail{
    font-size: .7rem;
    white-space: nowrap;
    overflow: hidden;
    padding-bottom: 1rem;
}
.last{
    margin-top:.8rem;
}
</style>