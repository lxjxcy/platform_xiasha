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
					<FormItem label="园区名称" prop="communityName">
						<Input  v-model="addfrom.communityName" style="width:300px" placeholder=""></Input>
					</FormItem>	
				</Form>
			</div>
		</Modal>
	</div>
</template>
<script>
	import openData from "../../../mixins/open.js"
	export default {
		name:"add_community",
		data(){
			return{
				ruleValidate:{
					communityName: [
							{ required: true, message: '请输入', trigger: 'blur' },
					],
				},
				addfrom:{
					communityName:"",
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
			openModal(e,type){
				this.addModal=true;
				this.addfrom.number=e
			
			},			
		}
		
		
	}
</script>

<style>

</style>
