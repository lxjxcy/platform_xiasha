<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_company_financing.vue"
	export default {
		name:"company_financing",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:5,//表名对应数值
			
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '融资类型',
							key: 'type',
							align: 'center'
					},
					
					{
							title: '融资金额',
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
							title: '融资类型',
							key: 'type',
							align: 'center'
					},
					
					{
							title: '融资金额',
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
				this.$api.getCompanynFinancing(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
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
