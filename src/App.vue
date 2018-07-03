<template>
  <div>

    <navbar>
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <sidebar :show="isShow" @kerwinevent="isShow=false"></sidebar>
    <!-- 路由容器 -->
   

     <section>
        <router-view></router-view>
     </section>

   <!--  {{10+20}}


    {{name}}

    <ul>
      <li @click="handleClick(index)" v-for="data,index in datalist">
        {{data}}
      </li>
    </ul>

    {{getAllSum}}


    <child1 text="来自app" @kerwinevent="handleEvent"></child1>
    <child2></child2> -->
    <!-- 路由容器 /home  -->
    
  </div>
</template>


<script type="text/javascript">
 

import navbar from "./components/common/navbar";
import sidebar from "./components/common/sidebar";
//ES6的方式 导出
export default {

  data(){
    return {
      isShow:false
    }
  },
  components:{
    navbar,
    sidebar
  }  
}



</script>


<style lang="scss" >


  .kerwinactive{
    background-color: red;
  }


  *{
    margin:0px;
    padding:0px;
  }

  html,body{
    height: 100%;
  }


  ul {
    list-style: none;
  }

  section{
    position: relative;
    top:50px;
  }
</style>