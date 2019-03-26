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
				<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="100">					
					<FormItem label="总收入" prop="total">
						<Input  v-model="addfrom.total" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="核销率" prop="percent">
						<Input  v-model="addfrom.percent" style="width:300px" placeholder=""></Input>
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
					
					percent: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
					total: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				addfrom:{
					total:"",	
					month:this.$store.state.month,
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
				this.addfrom.number=e
			
			},			
		}
		
		
	}
</script>

<style>

</style>
