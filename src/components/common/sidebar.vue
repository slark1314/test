<template>

 <transition name="bounce">
	<aside v-show="show">
<!--       <ul>

        <li><a href="#/home">home</a></li>
        <li><a href="#/film">film</a></li>
        <li><a href="#/card">card</a></li>
      </ul> -->

      <!-- hash -->

       <ul @click="handleClick()">
          <!-- 声明式导航 -->
         <router-link to="/home" tag="li" activeClass="kerwinactive">home</router-link>
         <router-link to="/film" tag="li" activeClass="kerwinactive">film</router-link>
         <router-link to="/card" tag="li" activeClass="kerwinactive">card</router-link>
       </ul>
    </aside>
  </transition>


</template>

<script type="text/javascript">
	export default{
		props:["show"],
		methods:{
			handleClick(){
				this.$emit("kerwinevent");//触发kerwinevent;
			}
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	
	aside{
		position:fixed;
		width:50%;
		height: 100%;
		top:50px;
		left:0px;
		background:black;
		color:white;
		z-index:10;
		li{
			padding:10px;
		}
	}

	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform:translateX(-100%);
	    opacity: 0;
	  }
	  100% {
	    transform:translateX(0px);
	    opacity: 1;
	  }
	}

</style>