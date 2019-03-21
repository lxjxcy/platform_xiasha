<template>
	
	<div>
		<tableYear ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableYear>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_enter_customer_number.vue"
	export default {
		name:"enter_customer_number",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				typeList:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:25,//表名对应数值
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					
					
					{
							title: '客户数',
							key: 'num',
							align: 'center'
					},
					{
							title: '类型',
							key: 'clientType',
							align: 'center',
							
					},
				],
				columns2: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					
					
					{
							title: '客户数',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
					},
					{
							title: '类型',
							key: 'clientType',
							align: 'center',
							
					},
				],
			}
		},
		
		created(){
			this.$store.state.showCommunity=false;
			this.$store.state.typeValue='';
			this.$store.state.showType=true;
		},
		mixins:[commonData],
		methods: {
			getlist(){
				this.$api.getCustomerNumber(this.$store.state.version,this.$store.state.year,this.$store.state.typeValue).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							var listed=[{
								label:'进驻客户',
								value:'进驻客户',
								
							},
							{
								label:'新签客户',
								value:'新签客户',
								
							},
							{
								label:'迁出客户',
								value:'迁出客户',
								
							},
							]
							if(this.$store.state.typeValue==''){
								var filterAfter=this.getFilters(res.data.updateAfter,'clientType')
								this.$store.state.typelist=listed;
							}
							if(this.$store.state.typeValue==""){
								var arr=this.unique(this.updateAfter,'clientType')
								var list=[]
								arr.forEach((e,i,a)=>{
									list.push({
										label:e.clientType,
										value:e.clientType
									})
								})
								this.typeList=list;
							}else{
								var list=[]
								
									list.push({
										label:this.$store.state.typeValue,
										value:this.$store.state.typeValue
									})
								this.typeList=list;
								
							}
							
							
								
						}
				})
			},

		},
	}
</script>


<style>

	

</style>
