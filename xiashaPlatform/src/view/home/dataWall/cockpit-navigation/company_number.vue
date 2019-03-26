<template>	
<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
		
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_company_number.vue"
	export default {
		name:"company_number",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				typeList:[],
				showCommunity:false,
				typeNumber:27,//表名对应数值
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
							title: '企业数量',
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
							align: 'center'
					},
					
					{
							title: '企业数量',
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
				
				this.$api.getCompanyNumber(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							var list=[]
							// var updateAfter=this.updateAfter;
							this.$api.getparkList(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
									res.data.updateAfter.forEach((e,i,a)=>{
												list.push({
													label:e.communityName.toString(),
													value:e.communityName.toString()
												})
											})
										this.typeList=list;
									
							})
							
// 							
						}
				})
			},

		},
	}
</script>


<style>

	

</style>
