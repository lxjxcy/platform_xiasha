<template>
	<div>
		<Modal
			v-model="addModal"
			title="新增"
			width="450"
			@on-cancel="asyncCancel"
			@on-ok="asyncOK"
			:mask-closable="false">
			<div>	
				<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="80">
					<FormItem label="园区">
						<div v-model="addfrom.communityName" style="width:300px;height:33px;border: 1px solid #dbdee2;border-radius: 5px;padding-left:5px;">{{addfrom.communityName}}</div>
					</FormItem>
					<FormItem label="大楼名称" prop="buildingName">
						<Input  v-model="addfrom.buildingName" style="width:300px" placeholder=""></Input>
					</FormItem>
					
					<FormItem label="出租率" prop="rentalRate">
						<Input  v-model="addfrom.rentalRate" style="width:300px" placeholder=""></Input>
					</FormItem>
					
					
				</Form>
			</div>
		</Modal>
	
	</div>
	
</template>

<script>
	import openData from "../../../../../mixins/open.js"
	export default {
		name:"add_user",
		data(){
			return{
				ruleValidate:{
					
					
					
					buildingName: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					rentalRate: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				addfrom:{
					buildingName:"",
					rentalRate:"",
					communityName:this.$store.state.communityName,
					communityId:'',
					month:this.$store.state.month,
					year:this.$store.state.year,
					number:'',
				}
			}
		},
		mounted(){
			
		},
		mixins:[openData],
		methods:{
			//打开弹框
			openModal(e,type,list,id){
				
				this.addModal=true;
				this.addfrom.number=e,
				this.addfrom.communityName=type
				this.addfrom.communityId=id
				
			},
			seleMonth(e){
				this.addfrom.month=e.value
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
