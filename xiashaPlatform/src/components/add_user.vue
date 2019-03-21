<template>
	<div>
		<Modal
			v-model="addmodal"
			title="新增"
			:loading="loading"
			width="450"
			@on-cancel="asyncCancel"
			@on-ok="asyncOK"
			:mask-closable="false">
			<div>	
				<Form ref="addfrom" :model="addfrom" :rules="ruleValidate" :label-width="80">
					<FormItem label="月份" prop="month">
						<Select v-model="addfrom.month" @on-change="seleMonth" placeholder="请选择角色" style="width:300px" :label-in-value="true">
								<Option v-for="item in this.$store.state.monthList"  :value="item.month" :key="item.month">{{ item.monthName }}</Option>
						</Select>
					</FormItem>
					<FormItem label="" prop="communityName">
						<Input v-model="addfrom.communityName" style="width:300px" placeholder=""></Input>
					</FormItem>
					<FormItem label="租金收入" prop="num">
						<Input v-model="addfrom.num" style="width:300px" placeholder=""></Input>
					</FormItem>					
				</Form>
			</div>
		</Modal>
	
	</div>
	
</template>

<script>
	export default {
		name:"add_user",
		data(){
			return{
				loading:true,
				addmodal:false,
				roleList:[],
				ruleValidate:{
					month: [
							{ required: true, message: '请输入', trigger: 'blur' }
					],
					communityName: [
							{ required: true, message: '请输入', trigger: 'blur' },
					],
					password: [
							{ required: true, message: '请输入', trigger: 'blur' },
					],
				},

				addfrom:{
					communityName:this.$store.state.year.communityName,
					month:"",
					num:"",	
					year:this.$store.state.year,
				}
			}
		},
		methods:{
			//打开弹框
			// 提交
			seleMonth(e){
				
			},
			asyncOK() {
				// this.handleSubmit("addfrom")
					
			},

			handleSubmit(addfrom) {
				var that=this;
				that.$refs[addfrom].validate((valid) => {
						if (valid) {
// 							var params={
// 								month:this.addUserfrom.loginName,
// 								password:md5(this.addUserfrom.password),
// 								name:this.addUserfrom.name,
// 								userType:this.addUserfrom.roleId,
// 								roleName:this.addUserfrom.roleName
// 							}
							
						that.$api.registerUser(params).then(res=>{
							that.loading=false;
							that.addmodal=false;
							
							if(res.code==0){
								that.$emit("parReset")
								that.$Message.success(res.message)
								that.$emit("getList")
								
							}else{
								that.$Message.error(res.message)
							}
						})
							
						} else {
						
							that.loading=false;
								setTimeout(()=>{
								that.loading=true;
							},1000)
							
						}
				})
			},
			clearRole(){
				
			},
			//取消
			asyncCancel() {
// 					this.$Message.info('取消添加');
// 					this.$emit("parReset")
			},
			
		}
		
		
	}
</script>

<style>

</style>
