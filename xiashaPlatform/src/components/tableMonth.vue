<template>
	<div >
		<Card style="margin-bottom: 5px;">
			<searchMonth v-on:getMonth="showMonth" ref="showParkList"></searchMonth>
		</Card>
	
		<div class="boxall">
		<Card style="width:49.5%;">	
				<h3>修改前</h3>
			<Table height="400" :columns="columns1" :data="updateBefore"></Table>
		</Card>
		<Card style="width:49.5%">
			<h3 style="position: relative;">修改后
			<Button  v-if="showAdd" type="primary" @click="addData" style=" position: absolute;right:10px;top:-10px">
			<Icon type="md-add" />新增
			</Button></h3>
			<Table height="400" :columns="columns2" :data="updateAfter"></Table>
		</Card>
		</div>
	</div>
</template>

<script>

	export default {
		name:"tableMonth",
		data(){
			return{
				showAdd:true,
				columns1:[],
				columns2:[],
				updateAfter:[],
				updateBefore:[],
				
			}
		},
		mounted(){
			let path = this.$route.matched[1].path ;
			 if(path.indexOf('/business-data/company_people_number')==0||path.indexOf('/business-data/company_manage')==0){
			 	
			 	this.showAdd=false
			 }else{
				 this.showAdd=true;

			 }
		},
		methods: {
			getChild(e) {
				this.columns1=e.columns1;
				this.columns2=e.columns2;
				this.updateAfter=e.updateAfter;
				this.updateBefore=e.updateBefore;
			},
			//获取月
			showMonth(){
				this.$emit("getMonthYear")		
			},
			sendParkId(){
				this.$refs.showParkList.getCommunityList()
			},
			addData(){
				this.$emit("getOpen")	
			}
		},
		
		
	}
</script>

<style>

</style>
