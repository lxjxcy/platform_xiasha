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
					<FormItem label="主营收入" prop="businessIncome">
						<Input  v-model="addfrom.businessIncome" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="企业税收" prop="develoInvestment">
						<Input  v-model="addfrom.develoInvestment" style="width:300px" placeholder=""></Input>
					</FormItem>
					
					<FormItem label="研发投入" prop="enterpriseTax">
						<Input  v-model="addfrom.enterpriseTax" style="width:300px" placeholder=""></Input>
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
					develoInvestment: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					businessIncome: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					enterpriseTax: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				addfrom:{
					develoInvestment:"",	
					businessIncome:'',
					enterpriseTax:'',
					number:'',
					month:this.$store.state.month,
					year:this.$store.state.year,
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
