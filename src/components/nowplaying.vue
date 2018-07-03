<template>
	<div>
		nowplaying

		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check	=  "false"
  infinite-scroll-distance="0">
			<li v-for="data in datalist" @click="handleClick(data.id)" :key="data.id">
				<img :src="data.poster.origin"/>
				<h3>{{data.name}}</h3>
				<p>{{data.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
import kerwinrouter from "../router"; //默认找的是router 文件夹 下的index.js 
	export default{

		data(){
			return {
				datalist:[],
				current:1, //此时是第几页
				total:0,//记录总页数
				loading:false//是不是禁用
			}
		},


		mounted(){
			// https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
			// https://m.maizuo.com/v4/api/film/now-playing?page=2&count=7
			axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
				console.log(res.data);
				this.total = res.data.data.page.total;
				this.datalist= res.data.data.films;
			})
		},
 
		methods:{
			handleClick(id){
				console.log(id);

				//编程式跳转
				kerwinrouter.push(`/detail/${id}`) ; // /detail/11111
			},

			loadMore(){
				console.log("滚动到底部了")

				//请求数据
			
				this.current++;

				if(this.current>this.total){
					//禁用请求
					return ;
				}

				axios.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).then(res=>{
					console.log(res.data);
					// [1,2,3]    [4,5,6]
					this.datalist= [...this.datalist,...res.data.data.films];
				})
			}
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	ul{
		li{
			padding:10px;
			overflow: hidden;
			img{
				float:left;
				width:100px;
			}
		}
	}
</style>