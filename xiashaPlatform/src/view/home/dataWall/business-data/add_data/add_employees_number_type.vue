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
					<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="100">					
						<FormItem label="员工人数类型" prop="type">
							<Input  v-model="addfrom.type" style="width:300px" placeholder=""></Input>
						</FormItem>
						<FormItem label="员工人数" prop="num">
							<Input  v-model="addfrom.num" style="width:300px" placeholder=""></Input>
						</FormItem>
					</Form>
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
					
					type: [
						{ required: true, message: '请输入', trigger: 'blur' },
					],
					
				},
				
				addfrom:{
					type:"",	
					month:this.$store.state.month,
					year:this.$store.state.year,
					num:'',
					number:"",
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
