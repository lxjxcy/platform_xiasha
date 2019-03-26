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
					<FormItem label="企业名称" prop="companyName">
						<Input  v-model="addfrom.companyName" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="进驻项目" prop="communityName">
						<Input  v-model="addfrom.communityName" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="面积" prop="area">
						<Input  v-model="addfrom.area" style="width:300px" placeholder=""></Input>
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

					communityName: [
							{ required: true, message: '请输入', trigger: 'blur' },
					],
					
					companyName: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					area: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				
				addfrom:{
					companyName:"",	
					communityName:"",
					month:this.$store.state.month,
					year:this.$store.state.year,
					area:'',
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
