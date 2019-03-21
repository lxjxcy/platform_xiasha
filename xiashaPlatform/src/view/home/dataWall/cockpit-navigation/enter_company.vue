<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_enter_company.vue"
	export default {
		name:"enter_company",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:26,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '企业名称',
							key: 'companyName',
							align: 'center'
					},
					{
							title: '进驻项目',
							key: 'communityName',
							align: 'center'
					},
					
					{
							title: '面积',
							key: 'area',
							align: 'center',
// 							render: (h, params) => {								
// 								var residue=(Number(params.row.percent)*100).toFixed(2)+"%"								
// 								return h('div',{	
// 								},residue)
// 							}
					}
        ],
				columns2: [
					{
							title: '企业名称',
							key: 'companyName',
							align: 'center'
					},
					{
							title: '进驻项目',
							key: 'communityName',
							align: 'center'
					},
					
					{
							title: '面积',
							key: 'area',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'area')
// 							render: (h, params) => {								
// 								var residue=(Number(params.row.percent)*100).toFixed(2)+"%"								
// 								return h('div',{	
// 								},residue)
// 							}
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
				this.$api.getCompanyDetail(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
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
