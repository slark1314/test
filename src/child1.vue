<template>
	<div>child1111--{{text}}

		<button @click="handleClick">click</button>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:["text"],

		methods:{
			handleClick(){
				this.$emit("kerwinevent","来自child")
			}
		}
	}
</script>


<style scoped>
	div{
		background-color: red;
	}
</style>