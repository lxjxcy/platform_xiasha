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
					<FormItem label="园区" prop="value">
						<Select v-model="value" @on-change="seleMonth" placeholder="请选择" style="width:300px" :label-in-value="true">
								<Option v-for="item in communityList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>

					<FormItem label="租金收入" prop="num">
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
					
					
					num: [
						
						{ required: true, message: '请输入', trigger: 'blur' },
						{ message: '只能是数字', trigger:'change', pattern:/^\d+$|^\d+[.]?\d+$/,}
					],
					
					value: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				communityList:[],
				value:"",
				addfrom:{
					communityName:this.$store.state.communityName,
					month:this.$store.state.month,
					num:"",	
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
			openModal(e,type,communityList){
				this.addModal=true;
				this.addfrom.number=e;
				this.communityList=communityList;
			
			},
			seleMonth(e){
				// this.month=e.value
				this.addfrom.communityName=e.label
			},
			
			
			
		}
		
		
	}
</script>

<style>

</style>
