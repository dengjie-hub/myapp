import Vue from 'vue'//vue 实例对象
import App from './App.vue'//vue 根组件
import router from './router'//引入路由模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入服务器基础路径方法
import baseurls from './api/api'
// 注册
Vue.use(baseurls) 
import store from './store'

// Vue.config.productionTip = false 阻止启动生产消息
// 功能二:引入字体文件
// 引入字体图标文件
import "./font/iconfont.css"

//功能三 引入axios库
// 1 引入axios库
import axios from "axios";
// 2 配置访问服务器基础路径
axios.defaults.baseURL="http://djhxsever.applinzi.com/";
// 3 配置保存session数据
axios.defaults.withCredentials=true;
// 4 注册
Vue.prototype.axios=axios;

new Vue({
  router,
  render: h => h(App),
  store//储存对象
}).$mount('#app')
