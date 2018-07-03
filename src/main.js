// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";


//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

 
//ES6 导入模块的方式-第二种
import {obj as a,test as b}  from "./module/moduleB";// export {}
console.log(a,b);


//ES6 导入模块的方式-第三种
import myModuleC , {test1,test2} from "./module/moduleC";
console.log(myModuleC,test1,test2);

//ES6 导入模块的方式-第四种
import * as all from "./module/moduleC";
console.log(all);


/*
	ES6 vS commonJS

	ES6 按需导入 只导入某几个接口，
	commonJS 只能导入所有的


	Es6 导入 起别名， 防止变量名冲突。
 */


Vue.config.productionTip = false



// var Child={
// 	template:`<div>12345</div>`
// }


/* eslint-disable no-new */
new Vue({
  el: '#box',
  store, //vuex 与vue 模块结合
  router, //vue 与 vue 路由模块结合。
  components: { App },
  template: '<App></App>'
})


