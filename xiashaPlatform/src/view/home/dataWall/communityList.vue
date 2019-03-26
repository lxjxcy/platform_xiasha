
<template>
	
	<div>
		<tableMonth ref="showChild" v-on:getMonthYear="showMonthYear" v-on:getOpen='open'></tableMonth>
		<add ref='addChild' v-if="hackReset" v-on:parReset="resetModal" v-on:updataList="getlist"></add>	
	</div>
</template>

<script>
	import commonData from "../../../mixins/index.js"
	import add from "./add_community.vue"
	export default {
		name:"communityList",
		components:{
			add
		},
		data(){
			return{
				updateAfter:[],
				updateBefore:[],
				showCommunity:false,
				typeNumber:20,//表名对应数值
				field:"num",//修改字段
				columns1: [
					{
							title: '园区名称',
							key: 'communityName',
							align: 'center'
					},
					{
							title: '创建时间',
							key: 'createTime',
							align: 'center'
					},
					
					
        ],
				columns2: [
					{
							title: '园区名称',
							key: 'communityName',
							align: 'center'
					},
					{
							title: '创建时间',
							key: 'createTime',
							align: 'center'
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
				this.$api.getparkList(this.$store.state.version,this.$store.state.year,this.$store.state.month).then(res=>{
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

