<template>
	<div>
		  <el-button type="primary">主要按钮</el-button>
		  <el-checkbox v-model="checked">备选项</el-checkbox>
		  <el-switch
			  v-model="value2"
			  active-color="#13ce66"
			  inactive-color="#ff4949">
		  </el-switch>  

		 <el-button type="text" @click="open">点击打开 Message Box</el-button>



		<el-date-picker
		      v-model="value1"
		      type="datetime"
		      placeholder="选择日期时间">
		    </el-date-picker>

		<el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="item in 6" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		  </el-carousel>

		  <button @click="sheetVisible = !sheetVisible">actionsheet</button>
		  <mt-actionsheet
		    :actions="actions"
		    v-model="sheetVisible">
		  </mt-actionsheet>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				checked:false,
				value2:true,
				value1:0,
				sheetVisible:false,
				actions:[
					{
						name:"分享到朋友圈",
						method:function(){

						}
					},
					{
						name:"分享到qq",
						method:function(){
							
						}
					}
				]
			}
		},
		methods: {
	      open() {
	        this.$alert('这是一段内容', '标题名称', {
	          confirmButtonText: 'kerwin确定',
	          callback: action => {
	            this.$message({
	              type: 'info',
	              message: `action: ${ action }`
	            });
	          }
	        });
	      }
	    }
	}
</script>



<style type="text/css" lang="scss" scoped>
	.el-carousel__item h3 {
	   color: #475669;
	   font-size: 14px;
	   opacity: 0.75;
	   line-height: 200px;
	   margin: 0;
	 }
	 
	 .el-carousel__item:nth-child(2n) {
	   background-color: #99a9bf;
	 }
	 
	 .el-carousel__item:nth-child(2n+1) {
	   background-color: #d3dce6;
	 }
</style>