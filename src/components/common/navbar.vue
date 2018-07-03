<template>
	<nav>
		<div class="left">

		    <slot></slot>
			<!-- <span>{{$store.state.title}}</span> -->
			<!-- <span>{{mytitle}}</span> -->
			<span>{{title}}</span>
		</div>
		<div class="right">
			<span>大连</span>
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script type="text/javascript">

    import {mapState} from "vuex";
	export default{
		//计算属性
			// computed:{
		// 	mytitle(){
		// 		return this.$store.state.title;
		// 	}
		// }
		computed:{

			...mapState(["title"])			

			// ...展开数组， 展开对象， 进行合并的

			// title(){
			// 	return this.$store.state.title;
			// }
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	nav{
		position: fixed;
		top:0px;
		left:0px;
		width:100%;
		height: 50px;
		background:black;
		line-height: 50px;
		color:white;
		z-index:10;
		.left{
			float:left;
		}

		.right{
			float:right;
		}
	}
</style>