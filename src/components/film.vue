<template>
	<div>

		<ul>
			<router-link tag="li" to="/film/nowplaying" activeClass="active">正在热映</router-link>
			<router-link tag="li" to="/film/comingsoon" activeClass="active">即将上映</router-link>
		</ul>
			<!-- 二级路由容器		 -->
			<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{

		mounted(){
			this.$store.commit("myChangeTitle","卖座电影");
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	ul{
		display: flex;
		li{
			flex:1;
			text-align: center;
			height: 40px;
			line-height: 40px;

		}
	}

	.active{
		border-bottom:5px solid red;
	}


</style>