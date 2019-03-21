<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_year_rental_income.vue"
	export default {
		name:"year_rental_income",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:23,//表名对应数值
				field:"total",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center',
					},
					{
							title: '总收入（万元）',
							key: 'total',
							align: 'center'	
					},
					{
							title: '核销率',
							key: 'percent',
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
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '总收入（万元）',
							key: 'total',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'total')
					},
					
					{
							title: '核销率',
							key: 'percent',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'percent')
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
				this.$api.getRentYear(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
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
