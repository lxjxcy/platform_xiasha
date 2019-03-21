<template>
	
<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
	</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_company_manage.vue"
	export default {
		name:"company_manage",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:3,//表名对应数值
				columns1: [
					{
							title: '季度',
							key: 'quarter',
							align: 'center',
							render: (h, params) => {								
								var residue=Number(params.row.quarter)+1								
								return h('div',{	
								},residue)
							}
					},
					{
							title: '主营收入（元）',
							key: 'businessIncome',
							align: 'center'
					},
					{
							title: '企业税收（元）',
							key: 'develoInvestment',
							align: 'center'
					},
					{
							title: '研发投入（元）',
							key: 'enterpriseTax',
							align: 'center'
					},
					
				
				],
				columns2: [
					{
							title: '季度',
							key: 'quarter',
							align: 'center',
							render: (h, params) => {								
								var residue=Number(params.row.quarter)+1								
								return h('div',{	
								},residue)
							}
					},
					{
							title: '主营收入（元）',
							key: 'businessIncome',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'businessIncome')
							
					},
					{
							title: '企业税收（元）',
							key: 'develoInvestment',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'develoInvestment')
					},
					
					
					{
							title: '研发投入（元）',
							key: 'enterpriseTax',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'enterpriseTax')
					},
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
				this.$api.getCompanynManage(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
						if(res.data!=null){
							var data=res.data.updateAfter
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
