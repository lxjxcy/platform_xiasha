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
				<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="100">
					<FormItem label="月份" prop="month">
						<Select v-model="addfrom.month" @on-change="seleMonth" placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in this.$store.state.monthList"  :value="item.month" :key="item.month">{{ item.monthName }}月</Option>
						</Select>
					</FormItem>
					
					<FormItem label="租赁面积" prop="num">
						<Input  v-model="addfrom.num" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="剩余凭租面积" prop="percent">
						<Input  v-model="addfrom.percent" style="width:300px" placeholder=""></Input>
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
					month: [
							{ required: true, message: '请输入', trigger: 'blur' }
					],
					
					num: [
						
						{ required: true, message: '请输入', trigger: 'blur' },
						{ message: '只能是数字', trigger:'change', pattern:/^\d+$|^\d+[.]?\d+$/,}
					],
					percent: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				addfrom:{
					num:"",	
					year:this.$store.state.year,
					percent:'',
					number:'',
				}
			}
		},
		mounted(){
			
		},
		mixins:[openData],
		methods:{
			//打开弹框
			openModal(e,type){
				this.addModal=true;
				this.addfrom.number=e,
				this.addfrom.communityName=type
			},
			seleMonth(e){
				this.addfrom.month=e.value
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
