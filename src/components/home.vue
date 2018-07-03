<template>
	<div>
		<swipe class="my-swipe" :auto="1000">
		  <swipe-item class="slide1" v-for="data in looplist" :key="data.id">
		  	<img :src="data.imageUrl"/>
		  </swipe-item>
		  
		</swipe>

		<ul>
			<li v-for="data in list" :key="data.id">
				<img :src="data.cover.origin"/>
				<h3>{{data.name}}</h3>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

	// require('vue-swipe/dist/vue-swipe.css');//vue-swipe css 引入
 
 	import "vue-swipe/dist/vue-swipe.css"
	import { Swipe, SwipeItem } from 'vue-swipe';

	import { Indicator } from 'mint-ui';

	import axios from "axios";//
	export default{

		data(){
			return {
				list:[],
				looplist:[]
			}
		},

		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem //注册局部组件
		},

		mounted(){
			//ajax  -jquery ajax?  // 原生ajax
			//
			//vue react =>     axios 第三方的库
			
			//get 请求 (后端的数据接口)
			// axios.get("/v4/api/billboard/home?__t=1530347798272").then(res=>{
			// 	console.log(res.data);
			// }).catch(error=>{
			// 	console.log(error);
			// })

			Indicator.open('正在加载中...');
			fetch("/v4/api/billboard/home?__t=1530347798272").then(res=>res.json()).then(res=>{
				// console.log(res);
				this.looplist  =res.data.billboards;
				console.log(this.looplist)

				Indicator.close();
			})



			// axios.get("/list").then(res=>{

			// })

			// http://localhost:3000/list
			// http://10.2.151.123:3000/list

			// http://www.kerwin.com/list



			// axios.get("/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wwmt70gy6fb&latitude=36.08431&limit=24&longitude=120.37148&offset=0&terminal=web").then(res=>{
			// 	console.log(res.data)
			// })
			

			axios.get("/v4/api/film/now-playing?__t=1530347798282&page=1&count=5").then(res=>{
				console.log(res.data);

				this.list =  res.data.data.films
			}) 

			// setTimeout(() => {
			//   this.datalist=[]
			// }, ms)
			


		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	ul{
		li{
			padding:10px;
			img{
				width:100%;
			}
		}
	}


	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	}

	.slide1 {
	  background-color: #0089dc;
	  color: #fff;
	}

	.slide2 {
	  background-color: #ffd705;
	  color: #000;
	}

	.slide3 {
	  background-color: #ff2d4b;
	  color: #fff;
	}

	.my-swipe {
		img{
			width:100%;
		}
	}
</style>