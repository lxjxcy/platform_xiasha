

<template>	
	<div>
		<tableYear ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableYear>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
	</div>
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_park_rental_income.vue"
	export default {
		name:"park_rental_income",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:true,
				typeNumber:13,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center',
							
					},
					{
							title: '大楼',
							key: 'buildingName',
							align: 'center',
// 							filters: [],
// 							filterMethod (value, row) {
// 								return row.buildingName.indexOf(value) > -1;
// 							}
					},
					
					{
							title: '租金收入',
							key: 'num',
							align: 'center',
							
					},
					{
						title:"园区",
						key:"communityName",
						align: 'center',
					}
					
        ],
				columns2: [
					{
							title: '月份',
							key: 'month',
							align: 'center',
							
					},
					{
							title: '大楼',
							key: 'buildingName',
							align: 'center',
// 							filters: [],
// 							filterMethod (value, row) {
// 								return row.buildingName.indexOf(value) > -1;
// 							}
					},
					
					{
							title: '租金收入',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
							
					},
					{
						title:"园区",
						key:"communityName",
						align: 'center',
					}
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
				this.$api.getBuilding(this.$store.state.version,this.$store.state.year,this.$store.state.communityId,this.$store.state.typeValue).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore;
							this.dataToChild()
							
							if(this.$store.state.typeValue==''){
								var filterAfter=this.getFilters(res.data.updateAfter,'buildingName')
								this.$store.state.typelist=filterAfter;
							}
						}
				})
			},

		},
	}
</script>


<style>

	

</style>

