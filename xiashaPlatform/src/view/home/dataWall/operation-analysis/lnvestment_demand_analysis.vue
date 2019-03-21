


<template>
	<div>
		<tableYear ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableYear>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_lnvestment_demand_analysis.vue"
	export default {
		name:"lnvestment_demand_analysis",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:true,
				typeNumber:17,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '面积',
							key: 'num',
							align: 'center'
					},
					{
							title: '类型',
							key: 'typeName',
							align: 'center',
// 							filters: [],
// 							filterMethod (value, row) {
// 								return row.typeName.indexOf(value) > -1;
// 							},
							render:(h,params)=>{
								var residue=params.row.typeName==1?"剩余租赁面积":"招商意向面积"	;						
									return h('div',{	
									},residue)
							}
					},
					{
						title:"园区",
						key:"communityName",
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
							title: '面积',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
					},
					{
							title: '类型',
							key: 'typeName',
							align: 'center',
// 							filters: [],
// 							filterMethod (value, row) {
// 								return row.typeName.indexOf(value) > -1;
// 							},
							render:(h,params)=>{
								var residue=params.row.typeName==1?"剩余租赁面积":"招商意向面积"	;						
									return h('div',{	
									},residue)
							}
					},
					{
						title:"园区",
						key:"communityName",
						align: 'center',
					},
				],
				
				
			}
		},
		created(){
			this.$store.state.showCommunity=true;
			this.$store.state.typeValue='';
			this.$store.state.showType=true;
		},
	mixins:[commonData],
		methods: {
			getlist(){
				this.$api.getIntention(this.$store.state.version,this.$store.state.year,this.$store.state.communityId,this.$store.state.typeValue).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
// 							if(this.$store.state.typeValue==''){
// 								var filterAfter=this.getFilters(res.data.updateAfter,'typeName')
// 								this.$store.state.typelist=filterAfter;
// 							}
					var listed=[
						{
							label:'招商意向面积',
							value:2
						},
						{
							label:'剩余租赁面积',
							value:1
						},
					]
						
							if(this.$store.state.typeValue==''){
								// var filterAfter=this.getFilters(res.data.updateAfter,'typeName')
								this.$store.state.typelist=listed
								this.typeList=listed;
							}else{
								var list=[]
								var value=this.$store.state.typeValue;
								if(value==1){
									var label="剩余租赁面积"
								}else{
									var label="招商意向面积"
								}
								
								
									list.push({
										label:label,
										value:value
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


