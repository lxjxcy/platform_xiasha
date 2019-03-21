<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_electricity.vue"
	export default {
		name:"electricity",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
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
			getlist(year,month){
// 				this.$api.getCompanyElectric(year,month).then(res=>{
// 						if(res.data!=null){
// 							this.updateAfter=res.data.updateAfter
// 							this.updateBefore=res.data.updateBefore;
// 							this.dataToChild()
// 						}
// 				})
			},

		},
	}
</script>


<style>

	

</style>
