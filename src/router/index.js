import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //注册这个路由模块


//引入 home  card film


import Home from "../components/home"
import Film from "../components/film"
import Card from "../components/card"
import Detail from "../components/detail"
import Nowplaying from "../components/nowplaying"
import Comingsoon from "../components/comingsoon"

export default new Router({

  mode:"history", //默认 hash  #/home  history模式  /home 	
  routes: [
    {
    	path:"/home",
    	component:Home
    },
    {
    	path:"/film",
    	component:Film,
    	children:[
    		{
    			path:"nowplaying", //不要重复写、/film  ,  匹配/film/nowpayling
    			component:Nowplaying
    		},
    		{
    			path:"comingsoon",
    			component:Comingsoon
    		},
    		{
    			path:"/film",
    			redirect:"/film/nowplaying"
    		}
    	]
    },
    {
    	path:"/card",
    	component:Card
    },
    {
    	path:"/detail/:id", //动态路由
    	component:Detail
    },
    {
    	path:"*",
    	redirect:"/home"
    }
  ]
})


// router.get("/aaa/aa")