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
					<FormItem label="类型" prop="type">
						<Select v-model="addfrom.type"  placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in list"  :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="数量" prop="num">
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
				list:[],
				ruleValidate:{
					communityName:[
							{ required: true, message: '请输入', }
					],
					num: [
						
						{ required: true, message: '请输入', trigger: 'blur' },
						{ message: '只能是数字', trigger:'change', pattern:/^\d+$|^\d+[.]?\d+$/,}
					],
					
					type: [
						{ required: true, message: '请输入', trigger: 'change' },
					],
					
				},
				
				addfrom:{
					communityName:this.$store.state.communityName,
					month:this.$store.state.month,
					num:"",	
					type:'',
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
				this.addfrom.communityId=id;
				this.addfrom.communityName=type
				this.list=list;
			},
			seleMonth(e){
				this.addfrom.month=e.value
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
