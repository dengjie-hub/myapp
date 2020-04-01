import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart_list:[],
    totle:"",
    islogin:false
  },
  mutations: {
    // 添加商品到购物车
    update(state,list){
      // console.log(list)
      if(state.cart_list.length!=0){
      for (let i = 0; i < state.cart_list.length; i++) {
       if(state.cart_list[i].stitle!=list.stitle){
        state.cart_list.push(list)
       }else{
         state.cart_list[i].num+=list.num
        //  console.log(state.cart_list[i].num)
       }
        
      }
    }else{
      state.cart_list.push(list)
    }
  },
  all(state){
    if(state.cart_list.length!=0)
    var totle=0;
    for (let i = 0; i < state.cart_list.length; i++) {
     totle+= (state.cart_list[i].sprice*state.cart_list[i].num)
     console.log(totle)
    }
    state.totle=totle
  } ,
  log(state){
    state.islogin=true
  }
  },
  actions: {
  },
  modules: {
  }
})
