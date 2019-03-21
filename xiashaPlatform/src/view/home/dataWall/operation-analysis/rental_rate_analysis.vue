

<template>	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>
<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_rental_rate_analysis.vue"

	export default {
		name:"rental_rate_analysis",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:true,
				typeList:[],
				typeNumber:14,//表名对应数值
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '类型',
							key: 'type',
							align: 'center'
					},
					
					{
							title: '面积',
							key: 'num',
							align: 'center',
							
							
							
					},
					{
						title:"占比",
						key:"percent",
						align: 'center',
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
							title: '类型',
							key: 'type',
							align: 'center'
					},
					
					{
							title: '面积',
							key: 'num',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'num')
							
					},
					{
						title:"占比",
						key:"percent",
						align: 'center',
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
			this.$store.state.showCommunity=true
			this.$store.state.showType=false;
		},
	mixins:[commonData],
		methods: {
			getlist(){
				this.$api.getArea(this.$store.state.version,this.$store.state.year,this.$store.state.month,this.$store.state.communityId).then(res=>{
						if(res.data!=null){
							this.updateAfter=this.getTotal(res.data.updateAfter)
							this.updateBefore=this.getTotal(res.data.updateBefore)
							this.dataToChild()
							var listed=[{
								label:'已租赁面积',
								value:'已租赁面积',
								
							},
							{
								label:'剩余租赁面积',
								value:'剩余租赁面积',
								
							},
							{
								label:'自用或其它',
								value:'自用或其它',
								
							},
							]
							this.typeList=listed;
							
						}
				})
			},
			getTotal(data){
				
				var total = 0;
				var target=0;
				data.forEach((e,i,a)=>{
					total += parseInt(e.num);	
				})				
				data.forEach((e,i,a)=>{
					target = e.num;
					// console.log(total)
					data[i]["percent"]=((parseInt(target)/parseInt(total))*100).toFixed(0) + '%'					
				})
				return data
			}

		},
		
	}
</script>


<style>

	

</style>

