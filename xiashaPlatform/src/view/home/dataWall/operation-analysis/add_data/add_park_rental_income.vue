<template>
	<div>
		<Modal
			v-model="addModal"
			title="新增"
			width="450"
			:loading="loading"
			@on-cancel="asyncCancel"
			@on-ok="asyncOK"
			:mask-closable="false">
			<div>	
				<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="80">
					<FormItem label="园区" prop="communityName">
						<div v-model="addfrom.communityName" style="width:300px;height:33px;border: 1px solid #dbdee2;border-radius: 5px;padding-left:5px;">{{addfrom.communityName}}</div>
					</FormItem>
					<FormItem label="月份" prop="month">
						<Select v-model="addfrom.month" @on-change="seleMonth" placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in this.$store.state.monthList"  :value="item.month" :key="item.month">{{ item.monthName }}月</Option>
						</Select>
					</FormItem>
					
					<FormItem label="大楼" prop="buildingName">
						<Input  v-model="addfrom.buildingName" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="租金收入" prop="num">
						<Input  v-model="addfrom.num" style="width:300px" placeholder=""></Input>
					</FormItem>
					 <!-- <FormItem label="角色" prop="roleId">
					</FormItem> -->
					
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
					communityName:[
							{ required: true, message: '请输入', }
					],
					month: [
							{ required: true, message: '请输入', trigger: 'change' }
					],
					
					num: [
						
						{ required: true, message: '请输入', trigger: 'blur' },
						{ message: '只能是数字', trigger:'change', pattern:/^\d+$|^\d+[.]?\d+$/,}
					],
					
					
					buildingName: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				addfrom:{
					buildingName:'',
					communityName:this.$store.state.communityName,
					month:"",
					num:"",	
					year:this.$store.state.year,
					number:'',
					communityId:"",
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
				this.addfrom.communityId=id;
				
			},
			seleMonth(e){
				this.addfrom.month=e.value
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
