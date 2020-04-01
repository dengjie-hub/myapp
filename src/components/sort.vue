<template>
<div>
    <div class="all">
        <div class="aquatic">
            <div class="aimg botimg">
                <div v-for="(item,i) of list" :key="i" @click="det($event,item.sid)">
                        <img :src="base+item.simg" >
                        <div>{{item.sherf}}</div>
                        <div>{{item.stitle}}</div>
                        <div>价格:￥{{parseInt(item.sprice).toFixed(2)}}</div>
                        <div>{{item.sproduct}}</div>
                        
                </div>
            </div>
        </div>
        <el-pagination small background :page-size="num" class="pag" layout="prev, pager, next" :total="pages[0]" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
    <div class="right"></div>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            num:1,
            base:this.$baseurls(),
            pages:[]
        }
    },
    methods:{
        handleCurrentChange(val) {
        this.$sort(val)
      },
      det(e,id){
          if(e.target.nodeName=="IMG"){
              this.$router.push(`/details/sid=${id}`)
            //   跳转到指定地页面
          }
      }
    },
    created(){
        this.$sort(this.num)
        console.log(this.pages)
    }
}
</script>
<style  scoped>
.all{
   float:left;
   margin-left: 21rem;
   margin-bottom: 3rem;
}
.aquatic{
  display: flex; 
  margin-bottom: 1rem;
  
}
.aquatic>.aimg{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width:58.75rem;
    /* padding:2rem; */
    /* border:1px solid #ccc; */
    /* height:28.75rem; */
    
}
.aquatic>.aimg img{
    width:11.25rem;
    height:11.875;

}
.aquatic>.botimg>div:hover{
    box-shadow: 0px 0px 2px 1px #ccc;
}
.aquatic>.botimg>div>div{
    padding:.15rem;
}
.aquatic>.aimg>div>div:nth-child(2){
    font-size: .9rem;
    color:black;
    font-weight: normal;
}
.aquatic>.aimg>div>div:nth-child(3),.aquatic>.aimg>div>div:nth-child(4){
    color:#aaa;
    font-size: .7rem
}
.aquatic>.aimg>div>div:last-child,.htitle>div{
    font-size: .8rem;
    color: #aaa;
    /* padding:.2rem; */
}
.aquatic>.botimg>div{
    border:1px solid #eee;
    padding:.9375rem;
    margin-top:1.4rem;
    
}
.pag{
    width:58.75rem;
    text-align: center;
}
.right{
    clear: both;
}

</style>