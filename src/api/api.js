export default {
    install (Vue, options) {
      Vue.prototype.$baseurls = function () {
        //   配置服务器基础路径
        return "http://djhxsever.applinzi.com/home/"
      };
      Vue.prototype.$banner1 = function () {
        // 首页轮播图一请求数据
        this.axios.get("bnr").then(res=>{
            this.list=res.data.data
            //  console.log(this.list);
            
            }).catch(err=>{console.log(err)}) 
       };
       Vue.prototype.$banner2 = function () {
        // 首页轮播图一请求数据
        this.axios.get("bnr2").then(res=>{
            this.list=res.data.data
            //  console.log(this.list);
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$shop1 = function () {
        // 获取首页商品精选海鲜6条数据

        this.axios.get("shop",{params:{pno: 1,pageSize: 6}}).then(res=>{
            this.product=res.data.data
             console.log(this.product);
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$shop2 = function () {
        // 获取首页商品海鲜水产6条数据

        this.axios.get("shop",{params:{pno: 2,pageSize: 6}}).then(res=>{
            this.aquatic=res.data.data
             console.log(this.aquatic);
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$banner3= function () {
        // 获取首页商品海鲜水产轮播数据

        this.axios.get("shop",{params:{pno: 5,pageSize: 3}}).then(res=>{
            this.banner3=res.data.data
             console.log(this.banner3);
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$botimg= function () {
        // 获取首页商品海鲜水产底部图片数据

        this.axios.get("shop",{params:{pno: 2.5,pageSize: 10}}).then(res=>{
            this.botimg=res.data.data
             console.log(this.botimg);
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$sort= function (num) {
        // 获取首页商品海鲜水产分类数据
        this.axios.get("sort",{params:{pno: num,pageSize:16}}).then(res=>{
            this.list=res.data.data
            this.pages.push(res.data.pages)
            // console.log(this.pages)
            //  console.log(this.list);
            //  console.log(res)
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$news= function (num) {
        // 获取首页商品海鲜水产分类数据
        this.axios.get("news",{params:{pno: num,pageSize:16}}).then(res=>{
            this.list=res.data.data
            // this.pages.push(res.data.pages)
            // console.log(this.pages)
             console.log(this.list);
            //  console.log(res)
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$header= function (num) {
        // 获取首页商品海鲜水产分类数据
        this.axios.get("header",{params:{pno: num,pageSize:16}}).then(res=>{
            this.list=res.data.data
            // this.pages.push(res.data.pages)
            // console.log(this.pages)
             console.log(this.list);
            //  console.log(res)
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$detail= function (sid) {
        // 根据sid获取商品详细信息
        console.log(sid)
       
        
        
         this.axios.post("deatil",{sid}).then(res=>{
            this.list=res.data.data
            // this.pages.push(res.data.pages)
            // console.log(this.pages)
             console.log(this.list);
            //  console.log(res)
            
            }).catch(err=>{console.log(err)}) 
       } ; 
       Vue.prototype.$user= function (uname,upwd) {
        // 根据sid获取商品详细信息
        console.log(uname,upwd)
       
        
        
         this.axios.post("user",{uname,upwd}).then(res=>{
          //  console.log(res.data.code)
              this.code=res.data.code

            // this.code=1
           
            
            }).catch(err=>{console.log(err)}) 
            
       } ; 
    }
    
    
   
  }