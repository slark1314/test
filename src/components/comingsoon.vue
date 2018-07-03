<template>
	<div>
		
		<ul>
			<li v-for="data in comingsoonlist">
				<img :src="data.poster.origin"/>
								<h3>{{data.name}}</h3>
								<p>{{data.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

    import {mapState} from "vuex";
	export default{

		mounted(){
			if(this.comingsoonlist.length==0){
				//发起请求
				this.$store.dispatch("getCommingsoonList");
			}else{

			}
		},


		computed:{
			...mapState(["comingsoonlist"])
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