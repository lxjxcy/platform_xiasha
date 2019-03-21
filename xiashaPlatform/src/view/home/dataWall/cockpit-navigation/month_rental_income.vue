<template>
	<div>
		<tableYear ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableYear>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
	</div>
	
	
	
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_month_rental_income.vue"
	export default {
		name:"month_rental_income",
		components:{
			add
		},
		data(){
			return{
				version:this.$store.state.version,
				updateAfter:[],//修改后数据
				updateBefore:[],//修改前数据
				showCommunity:true,//显示园区选择框
				typeNumber:21,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '园区',
							key: 'communityName',
							align: 'center'
					},
					
					{
							title: '租金收入（万元）',
							key: 'num',
							align: 'center',
					}
				],
				columns2: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '园区',
							key: 'communityName',
							align: 'center',
							
					},
					{
							title: '租金收入（万元）',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
					}
				],
				
				
			}
		},

		created(){
			this.$store.state.showCommunity=true;
			this.$store.state.showType=false;
		},
		
	mixins:[commonData],
		methods: {
			getlist(){
				// console.log(this.$store.state.getCommunityList)
				this.$api.getRentMonth(this.$store.state.version,this.$store.state.year,this.$store.state.communityId).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
						}
				})
			},
			
			
			
			
			

					

		},
	}
</script>


<style>

	

</style>
