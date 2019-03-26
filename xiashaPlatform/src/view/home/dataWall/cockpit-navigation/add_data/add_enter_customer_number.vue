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
					<FormItem label="类型" v-if="list.length==1">
						<div v-model="addfrom.clientType" style="width:300px;height:33px;border: 1px solid #dbdee2;border-radius: 5px;padding-left:5px;">{{addfrom.clientType}}</div>
					</FormItem>
					<FormItem label="月份" prop="month">
						<Select v-model="addfrom.month" @on-change="seleMonth" placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in this.$store.state.monthList"  :value="item.month" :key="item.month">{{ item.monthName }}月</Option>
						</Select>
					</FormItem>
					
					
					<FormItem label="类型" prop="clientType" v-if="list.length!=1">
						<Select v-model="addfrom.clientType" @on-change="seleType" placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in list" :label="item.label" :value="item.label" :key="item.label">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="客户数量" prop="num">
						<Input  v-model="addfrom.num" style="width:300px" placeholder=""></Input>
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
					month: [
							{ required: true, message: '请输入', trigger: 'change' }
					],
					
					num: [
						
						{ required: true, message: '请输入', trigger: 'blur' },
						{ message: '只能是数字', trigger:'change', pattern:/^\d+$|^\d+[.]?\d+$/,}
					],
					
					clientType: [
						{ required: true, message: '请输入', trigger: 'change', },
					],
		
				},
				list:[
				],
				value:"",
				addfrom:{
					month:'',
					num:"",	
					clientType:'',
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
			openModal(e,type,list){
				this.addModal=true;
				this.addfrom.number=e;
				this.list=list
				if(list.length==1){
					this.addfrom.clientType=list[0].value
					this.value=list[0].value
				}

			},
			seleMonth(e){
				this.addfrom.month=e.value
			},
			seleType(e){
				this.addfrom.clientType=e.label;
				// debugger
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
