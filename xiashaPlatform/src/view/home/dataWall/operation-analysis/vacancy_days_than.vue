
<template>	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_vacancy_days_than.vue"
	export default {
		name:"vacancy_days_than",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				typeList:[],
				showCommunity:true,
				typeNumber:16,//表名对应数值
				field:"num",//修改字段
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
							title: '数量',
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
							title: '数量',
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
				this.$api.getDayRoom(this.$store.state.version,this.$store.state.year,this.$store.state.month,this.$store.state.communityId).then(res=>{
					if(res.data!=null){
						this.updateAfter=this.getTotal(res.data.updateAfter)
						this.updateBefore=this.getTotal(res.data.updateBefore)
						this.dataToChild()
						var listed=[
							{
								label:'<1个月',
								value:'<1个月',
								
							},
							{
								label:'1~6个月',
								value:'1~6个月',
								
							},
							{
								label:'6~12个月',
								value:'6~12个月',
								
							},
							{
							label:'1年以上',
							value:'1年以上',
							
							}

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
