import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import list from '../components/list'
import sort1 from "../components/sort"
import news from "../components/news"
import header from "../components/header"
import move from "../components/move"
import details from "../components/details"
import login from "../components/login"
import reg from "../components/reg"

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home',component: home},
  {path:"/list",name:"List",component:list},
  {path:"/sort",name:"Sort",component:sort1},
  {path:"/news",name:"News",component:news},
  {path:"/header",name:"Header",component:header},
  {path:"/move",name:"Move",component:move},
  {path:"/details/:sid",name:"details",component:details},
  {path:"/login",name:"login",component:login},
  {path:"/reg",name:"reg",component:reg}

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
