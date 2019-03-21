
<template>	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_occupancy_rate.vue"
	export default {
		name:"occupancy_rate",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				typeList:[],
				showCommunity:true,
				typeNumber:11,//表名对应数值
				field:"rentalRate",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '大楼名称',
							key: 'buildingName',
							align: 'center'
					},
					{
							title: '出租率',
							key: 'rentalRate',
							align: 'center',
							
					},
					
					{
							title: '园区名称',
							key: 'communityName',
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
							title: '大楼名称',
							key: 'buildingName',
							align: 'center'
					},
					{
							title: '出租率',
							key: 'rentalRate',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'rentalRate')
					},
					
					{
							title: '园区名称',
							key: 'communityName',
							align: 'center',
							
					}
				],
				
				
			}
		},
		created(){
			this.$store.state.showCommunity=true
			this.$store.state.showType=false;
		},
		
	mixins:[commonData],
		methods: {
			getlist(){
				this.$api.getReaBuilding(this.$store.state.version,this.$store.state.year,this.$store.state.month,this.$store.state.communityId).then(res=>{
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

