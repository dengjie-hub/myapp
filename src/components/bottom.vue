<template>
    <div>
      <div class="bottom">
          <div v-for="(item, i) of font1" :key="i">
              <span class="iconfont" :class="item.anqaun"></span>
              <span v-text="item.title"></span>
              <span v-text="item.brief"></span>
          </div>
         <div class="call">
             <div>
                 <img :src="this.$baseurls()+'tel_06_t2q9.png'">
             </div>
             <div>
                 <div>专属客服</div>
                 <div>在线客服: <img :src="this.$baseurls()+'offline_qq_41.png'"></div>
                 <div>客服电话: 300-0000-0000</div>
                 <div>服务时间: 08:00-20:00</div>
             </div>
         </div>
      </div>  
        <div class="foot">
            <div>
                <span>版权所有：©2016-20000  呵呵品质水鲜电子商务有限公司 </span>
                <span>公安网备案号：12310502025423</span>
                <span>沪ICP备110012352544号</span> 
                <span>沪B2-20165240421号</span>          
            </div>
            <div>
                <span>公司地址：某某市某某区某某路某某号某某公司</span>
                <span>联系电话：028-1234-56477858 </span>
                <span>联系邮箱：mwenju@139.com</span>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            font1:[
                {anqaun:"icon-anquan",title:"食品安全",brief:"精选生鲜 严格质检"},
                {anqaun:"icon-chuntianran",title:"鲜活天然",brief:"绿色生态 京东精选"},
                {anqaun:"icon-lengcang",title:"全程冷链",brief:"自营物流 安全可控"},
                {anqaun:"icon-fx-shop2",title:"放心购物",brief:"坏单赔付 重新发货"},
                ]
        }
    },
}
</script>
<style  scoped>
.bottom{
    border-top:1px solid #ddd;
    padding-top:1.6rem;
    margin:0 3rem;
    display:  flex;
    justify-content: space-around;
}
.bottom>div>span:nth-child(2){
    font-size: 1rem;
    font-weight: bold;
    color:#111;
}
.bottom>div>span:last-child{
    font-size: .8rem;

}
.bottom>div>span{
    display: block;
    flex-direction: column;
}
.bottom>div>:first-child{
    font-size: 3.3rem;
   
}
.call{
    height:6.25rem;
    display: flex;
    justify-content: space-around;
}
.call>:first-child{
    background: #222;
   margin:auto 0;
}
.call>:last-child{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: .7rem;
}
.call>:last-child>div:first-child{
    font-size: .9rem;
    font-weight: bold;
    color:#111;
}
.call>:last-child>div:not(:first-child){
    font-size: .8rem;
}
.foot{
    margin-top:1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:6.25rem;
    background:#da0207;
    color:#fff;
    font-size: .7rem;
     /* margin:auto auto; */
     
    
}
.foot span+span{
    margin-left: 1rem;
}
.foot>div{
    margin-top:.5rem;
}
</style>