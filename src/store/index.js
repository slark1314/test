import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);//注册模块

const store = new Vuex.Store({


	state:{
		title:"卖座电影22", //定义共享状态
		name:"kerwin",
		comingsoonlist:[]
	},

	actions:{
		mychangeTitleAction(store,payload){
			console.log(payload);
			//ajax请求
			
			setTimeout(() => {
			  	store.commit("myChangeTitle",payload);
			}, 1000)
		},
		getCommingsoonList(store){
			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				console.log(res.data);

				store.commit("getCommingsoonListMutation",res.data.data.films);
			})
		}
	},

	mutations:{

		myChangeTitle(state,payload){
			//接受commit 提交来的数据
			console.log(payload);

			state.title = payload;
		},

		getCommingsoonListMutation(state,payload){
			state.comingsoonlist = payload;
		}
	}
})
//store 一个“全局对象”

export default store;