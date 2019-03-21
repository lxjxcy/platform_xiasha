


<template>	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_service_demand_ranking.vue"

	export default {
		name:"service_demand_ranking",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				typeList:[],
				showCommunity:true,
				typeNumber:19,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '服务名称',
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
							title: '服务名称',
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
				this.$api.getServiceNeed(this.$store.state.version,this.$store.state.year,this.$store.state.month,this.$store.state.communityId).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							var listed=[{
								label:'金融服务',
								value:'金融服务',
								
							},
							{
								label:'项目申报',
								value:'项目申报',
								
							},
							{
								label:'人力资源',
								value:'人力资源',
								
							},
							{
								label:'法律服务',
								value:'法律服务',
								
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

