<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_enter_number_type.vue"
	export default {
		name:"enter_number_type",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:1,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '月份',
							key: 'month',
							align: 'center'
					},
					{
							title: '进驻类型',
							key: 'type',
							align: 'center',
							
					},
					
					{
							title: '进驻企业数量',
							key: 'num',
							align: 'center',
							
					},
					{
							title: '进驻类型占比',
							key: 'parcent',
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
						title: '进驻类型',
						key: 'type',
						align: 'center',
						
				},
				
				{
						title: '进驻企业数量',
						key: 'num',
						align: 'center',
						render: (h, params) =>this.comUpdate(h, params,'num')
						
				},
				{
						title: '进驻类型占比',
						key: 'parcent',
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
			getlist(){
				this.$api.getCompanyTopNume(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
						if(res.data!=null){
							this.updateBefore=this.getTotal(res.data.updateBefore)
							this.updateAfter=this.getTotal(res.data.updateAfter)							
							this.dataToChild()
							
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
					console.log(total)
					data[i]["parcent"]=((parseInt(target)/parseInt(total))*100).toFixed(0) + '%'					
				})
				return data
			}

		},
	}
</script>


<style>

	

</style>
