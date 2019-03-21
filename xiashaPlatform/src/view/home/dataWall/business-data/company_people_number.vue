<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../../mixins/index.js"
	import add from "./add_data/add_company_people_number.vue"
	export default {
		name:"company_people_number",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:8,//表名对应数值
				columns1: [
					{
							title: '博士(人)',
							key: 'doctorNum',
							align: 'center'
					},
					{
							title: '硕士（人）',
							key: 'masterNum',
							align: 'center'
					},
					
					{
							title: '大学（人）',
							key: 'undergraduateNum',
							align: 'center',
							
					},
					{
							title: '专科（人）',
							key: 'collegeNum',
							align: 'center',
							
					}
        ],
				columns2: [
					{
							title: '博士(人)',
							key: 'doctorNum',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'doctorNum')
					},
					{
							title: '硕士（人）',
							key: 'masterNum',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'masterNum')
					},
					
					{
							title: '大学（人）',
							key: 'undergraduateNum',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'undergraduateNum')
							
					},
					{
							title: '专科（人）',
							key: 'collegeNum',
							align: 'center',
							render: (h, params) =>this.comUpdate(h, params,'collegeNum')
							
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
				this.$api.getCompanynmployeesNumn(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
						if(res.data!=null){
							this.updateAfter=res.data.updateAfter
							this.updateBefore=res.data.updateBefore
							this.dataToChild()
						}
				})
			},
			getUplad(data){
				var list=[]
				data.forEach((e,i,a)=>{
					list.push(
					{	
						education:"博士",
						num:e.doctorNum,
						id:e.id,
					},
					{	
						education:"硕士",
						num:e.masterNum,
						id:e.id,
					},
					{	
						education:"大学",
						num:e.undergraduateNum,
						id:e.id,
					},
					{	
						education:"专科",
						num:e.collegeNum,
						id:e.id,
					},
						
					)
					
				})
				
				return this.getTotal(list)
				
			},

// 			getTotal(data){
// 				debugger
// 				var total = 0;
// 				var target=0;
// 				data.forEach((e,i,a)=>{
// 					total += parseInt(e.num);	
// 				})				
// 				data.forEach((e,i,a)=>{
// 					target = e.num;
// 					// console.log(total)
// 					data[i]["percent"]=((parseInt(target)/parseInt(total))*100).toFixed(0) + '%'					
// 				})
// 				return data
// 			}
			

		},
	}
</script>


<style>

	

</style>
