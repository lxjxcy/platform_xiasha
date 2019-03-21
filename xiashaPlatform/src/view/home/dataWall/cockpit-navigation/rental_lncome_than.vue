<template>
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
		
	</div>
	
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_rental_lncome_than.vue"
	export default {
		name:"rental_lncome_than",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				typeList:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:22,//表名对应数值
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
			this.$store.state.showCommunity=false
			this.$store.state.showType=false;
		},
		
	mixins:[commonData],
		methods: {
			getlist(){
				this.$api.getRentCompare(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							var list=[]
							this.$api.getparkList(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
									res.data.updateAfter.forEach((e,i,a)=>{
												list.push({
													label:e.communityName.toString(),
													value:e.communityId.toString()
												})
											})
										this.typeList=list;
										
									
							})
						}
				})
			},

		},
	}
</script>


<style>

	

</style>
