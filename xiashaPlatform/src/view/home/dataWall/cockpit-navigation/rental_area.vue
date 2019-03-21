<template>
	<div>
		<tableYear ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableYear>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>
		
	</div>
	
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_rental_area.vue"
	export default {
		name:"rental_area",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				version:this.$store.state.version,
				showCommunity:false,
				typeNumber:24,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					
					
					{
							title: '租赁面积',
							key: 'num',
							align: 'center',
							
					},
					{
							title: '租赁面积占比',
							key: 'percent',
							align: 'center',
							render: (h, params) => {								
								var residue=(Number(params.row.percent)*100).toFixed(2)+"%"								
								return h('div',{	
								},residue)
							}
					},
        ],
				columns2: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					
					
					{
							title: '租赁面积',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
					},
					{
							title: '租赁面积占比',
							key: 'percent',
							align: 'center',
							render: (h, params) => {								
								var residue=(Number(params.row.percent)*100).toFixed(2)+"%"								
								return h('div',{	
								},residue)
							}
							
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
				this.$api.getRentArea(this.$store.state.version,this.$store.state.year).then(res=>{
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
