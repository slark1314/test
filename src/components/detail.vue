<template>
	<div v-if="filminfo">
		
		<img :src="filminfo.cover.origin"/>
		<h2>{{filminfo.name}}</h2>
		<p>{{filminfo.synopsis}}</p>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default{

		data(){
			return {
				filminfo:null
			}
		},
		
		mounted(){

			//获取上一级路由传来的id值
			console.log(this.$route.params.id);//ajax 做请求数据，数据驱动页面更新
 		
			//https://m.maizuo.com/v4/api/film/4243?__t=1530497395644
			axios.get(`/v4/api/film/${this.$route.params.id}?__t=1530497395644`).then(res=>{
				console.log(res.data);
				this.filminfo =res.data.data.film

				//同步可以省略 dispatch 到action 这一步， 直接到 mutation 
				
				// this.$store.commit("myChangeTitle",this.filminfo.name);
				// 
				this.$store.dispatch("mychangeTitleAction",this.filminfo.name);
			})
 		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	img{
		width: 100%;
	}
</style>