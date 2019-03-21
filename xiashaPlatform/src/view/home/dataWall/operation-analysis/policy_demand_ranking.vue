

<template>	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_policy_demand_ranking.vue"
	export default {
		name:"policy_demand_ranking",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				showCommunity:true,
				updateBefore:[],
				typeList:[],
				typeNumber:18,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '政策名称',
							key: 'name',
							align: 'center',
							
					},
					{
							title: '关注人数',
							key: 'num',
							align: 'center',
							
							
					},
					{
							title: '园区',
							key: 'communityName',
							align: 'center'
					},
					
					
        ],
				columns2: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '政策名称',
							key: 'name',
							align: 'center',
							
					},
					{
							title: '关注人数',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
							
					},
					{
							title: '园区',
							key: 'communityName',
							align: 'center'
					},
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
				this.$api.getPolicyNeed(this.$store.state.version,this.$store.state.year,this.$store.state.month,this.$store.state.communityId).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							var listed=[{
								label:'财政引导',
								value:'财政引导',
								
							},
							{
								label:'金融扶持',
								value:'金融扶持',
								
							},
							{
								label:'人才激励',
								value:'人才激励',
								
							},
							{
								label:'税收优惠',
								value:'税收优惠',	
							},
							]
							this.typeList=listed;
							
						}
				})
			},

		},
	}
</script>


<style>

	

</style>

