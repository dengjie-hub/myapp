<template>
  <div>
    <div>
      <el-carousel id="carousel-1" arrow="never" indicator-position="none">
        <!-- 隐藏切换箭头arrow="never" -->
        <!-- indicator-position="none"隐藏指示器 -->
        <el-carousel-item v-for="(item,i) of list" :key="i">
        <img :src="base+item.hy_bimg" class="imgh">
    <div class="car">
        <div>DEEP SEA SEAFOOD, FROM THE SOURCE TO THE TABLE TO ENSURE THE HEALTH OF THE NATURAL</div>
        <div class="cartitle">
          <div>ASIA</div>
          <div>天然美味 ****</div>
        </div>
        <div>深海海鲜，从源头到餐桌保证天然健康</div>
     </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <odds/>
  </div>
</template>
<script>
import odds from "./odds"
export default {
    data(){
        return {
          base:this.$baseurls(),
          list:[]
        }
    },
    components:{
       odds
     },
    created(){
        // 调用全局api中的轮播图请求方法
        this.$banner1()
    },
    methods:{ 
    }
}
</script>
<style  scoped>
  #carousel-1{
    position: relative;
    /* width:100%; */
    /* height:400px; */
  }
  #carousel-1>>>.el-carousel__container {
    height:37.5rem !important;
  }
  .car{
    width:100%;
    position: absolute;
    z-index: 1;
    top:20%;
    left:23%;
    color:#fff;
  }
  .car>div{
    width:70%;
  }
  .cartitle>:nth-child(1){
    width:40%;
    margin-left:30%;
    font-size: 8rem;
    font-weight: bold;
    border-bottom: .1rem solid #fff;
    margin-bottom: .3rem;
  }
  .cartitle>:nth-child(2){
    width:40%;
    font-size: 1.8rem;
    margin-left:30%;
    border-top: .3rem solid #fff;
    padding-top:.4rem;
  }
</style>