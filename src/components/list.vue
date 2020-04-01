<template>
    <div class="list">
        <div v-for="(item, index) in list" :key="index">
            <div class="title">
                <span class="iconfont" :class="item.font"></span>
                <span>{{item.title}}</span>
            </div>
            <div class="det">
                <span class="details" v-for="(value, i) in list[index].details" :key="i" >
                    <span  @click="det($event,list[index].sid[i])">{{value}}</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {font:"icon-xia",title:"海鲜水产",details:["扇贝","海参","小黄鱼","鱿鱼条"],sid:[11,9,10,8]},
                {font:"icon-xie",title:"虾兵蟹将",details:["大闸蟹","帝*蟹","冻虾","虾仁"],sid:[7,6,5,4]},
                {font:"icon-cishen",title:"日料刺身",details:["三文鱼","北极贝刺身","生蚝"],sid:[1,2,3]},
                {font:"icon-icon-test",title:"美味鱼类",details:["龙利鱼","鳕鱼","带鱼","鱿鱼"],sid:[15,14,13,12]},
                {font:"icon-rou",title:"无肉不欢",details:["牛排","牛肉","羊排","羊肉串","鸡肉"],sid:[21,18,20,19,17]}

            ],
           
            
        }
    },
    methods:{
        det(e,id){
            console.log(id)
            if(e.target.nodeName=="SPAN"){
              this.$router.push(`/details/sid=${id}`)
              location.reload();
            //   跳转到指定地页面
          }
      
        }
    }

    
    
}
</script>
<style scoped>
    .list{
        position: absolute;
        /* top:7.5rem; */
        left:3rem;
        z-index: 3;
        height:37.5rem;
        width:16rem;
        background: rgba(0,0,0,.4);
        /* opacity: .4; */
    }
    .list .title{
        text-align: left;
        margin-left: .7rem;
    }
    .list .title>span{
        color: #ffdd00;
        font-size: .8rem;
        margin-right: .7rem;
        
    }
    .list .title>:first-child{
        font-size: 1.3rem;
    }
    .list .det{
        display: flex;
        margin-left: 2.7rem;
    }
    .list .details{
        color:#fff;
        font-size: .7rem;
        padding-bottom: .6rem;
        border-bottom: 1px solid #ffffff;
    }
    .list .details>:first-child{
        border:0;
        padding-left: 0;
    }
   .list .details>span{
       margin-right: .5rem;
   }
   .list .details>span:hover{
       color:#ffdd00;
   }
    .list>:first-child{
        padding-top: 3rem;
    }
    .list>:not(:first-child){
        margin-top: 1.6rem;
    }
    
</style>