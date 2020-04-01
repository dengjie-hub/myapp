<template>
  <div id="app">
    <div>
      <el-backtop >
        <!-- 回到顶部 -->
        <div>UP</div>
      </el-backtop>
      <top/>
      <list v-if="show"/>
      <router-view></router-view>
      <bottom/>
    </div>
  </div>
</template>
<script>
import top from "./components/top"
// 引入头部组件到app中注册
import bottom from "./components/bottom"
// 引入底部部组件到app中注册
import list from "./components/list"
export default{
  data(){
    return {
      show:true
    }
  },
  watch:{
    $route(e){
      // 当路由为Move时隐藏列表 ps浏览器默认e.name开头大写
      console.log(e)
      e.name=="Move"?this.show=false:this.show=true
    }
  },
  name:'app',
  components:{
    top,
    bottom,
    list
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
