<template>
	<div >
		<Card style="margin-bottom: 5px;">
			<searchYear v-on:getMonth="showMonth" ref="showParkList"></searchYear>
		</Card>
	
		<div class="boxall">
		<Card style="width:49.5%;">	
				<h3>修改前</h3>
			<Table height="400" :columns="columns1" :data="updateBefore"></Table>
		</Card>
		<Card style="width:49.5%">
			<h3 style="position: relative;">修改后
			<Button  type="primary" @click="addData" style=" position: absolute;right:10px;top:-10px">
			<Icon type="md-add" />新增
			</Button>
			</h3>
			<Table height="400" :columns="columns2" :data="updateAfter"></Table>
		</Card>
		</div>
	</div>
</template>

<script>

	export default {
		name:"tableYear",
		data(){
			return{
				columns1:[],
				columns2:[],
				updateAfter:[],
				updateBefore:[],
				
			}
		},
		methods: {
			getChild(e) {
				this.columns1=e.columns1;
				this.columns2=e.columns2;
				this.updateAfter=e.updateAfter;
				this.updateBefore=e.updateBefore;
			},
			sendParkId(){
				this.$refs.showParkList.getCommunityList()
			},
			//获取月
			showMonth(){
				this.$emit("getMonthYear")		
			},
			addData(){
				this.$emit("getOpen")	
			}
		},
		
		
	}
</script>

<style>

</style>
