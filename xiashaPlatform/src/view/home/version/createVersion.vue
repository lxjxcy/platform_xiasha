<template>
	<Card>
		
	 <Tabs :animated="false" >
        <TabPane label="按月" style="min-height:300px;padding-top: 30px;">
				<Form  :label-width="80">
					<FormItem label="日期" >
						<DatePicker 
						type="month" 
						placeholder="选择日期" 
						v-model="month"
						style="width: 200px">
						</DatePicker>
					</FormItem>
					<FormItem label="版本号">
						<Input v-model="versionMonth" style="width:200px" placeholder=""></Input>
						<span>版本号如1.0, 1.1, 1.2等</span>
					</FormItem>
					<FormItem>
						<Button :loading="loadingMonth" style="width:200px" @click="createMonth()" type="primary" long>生成</Button>
					</FormItem>
									
				</Form>

		</TabPane>
        <TabPane label="全量" style="min-height:300px;padding-top: 30px;">
			<Form  :label-width="80">
				<FormItem label="版本号">
					<Input v-model="versionAll" style="width:200px" placeholder=""></Input>
					<span>版本号如1.0, 1.1, 1.2等</span>
				</FormItem>
				<FormItem>
					<Button :loading="loadingAll" style="width:200px" @click="createAll()" type="primary" long>生成</Button>
				</FormItem>	
			</Form>
		</TabPane>
		        <TabPane label="版本保存" style="min-height:300px;padding-top: 30px;">
						<Form  :label-width="80">
							<FormItem label="日期" >
								<DatePicker 
								type="month" 
								placeholder="选择日期" 
								v-model="yearMonth"
								style="width: 200px">
								</DatePicker>
							</FormItem>
							<FormItem label="版本号">
								<Input v-model="version" style="width:200px" placeholder=""></Input>
								<span>版本号如1.0, 1.1, 1.2等</span>
							</FormItem>
							<FormItem label="版本描述">
								<Input v-model="remark" style="width:200px" placeholder=""></Input>
							</FormItem>
							<FormItem>
								<Button :loading="loading" style="width:200px" @click="saveVersion()" type="primary" long>保存</Button>
							</FormItem>
											
						</Form>
		
				</TabPane>
		</Tabs>
	</Card>
	
</template>

<script>
	const moment = require('moment');
	export default {
		name:"createVersion",
		data(){
			return{
				month:'',
				versionMonth:"",
				loadingMonth:false,
				
				versionAll:'',
				loadingAll:false,
				
				yearMonth:'',
				version:'',
				remark:"",
				loading:false
				
				
				
			}
		},
		methods: {
			onChangeDate() {
				
			},
			//按月
			createMonth(){
				this.loadingMonth=true;
				if(this.month==""){
					this.$Message.warning('请选择时间');
				}
				if(this.versionMonth==""){
					this.$Message.warning('请输入版本号');
				}
				let date=new Date(this.month)
				let startTimes = date.setDate(1)//本月第一天
				let startTime=moment(startTimes).format('YYYY-MM-DD HH:mm:ss')
				let currentMonth=date.getMonth(); 
				let nextMonth=++currentMonth;
				let end=new Date(date.getFullYear(),nextMonth,1)//下个月第一天
				let endTime=moment(end).format('YYYY-MM-DD HH:mm:ss')
				var params={
					startTime:startTime,
					endTime:endTime,
					version:this.versionMonth
				}
				this.$api.createVersionMonth(params).then(res=>{
					if(res.responseCode==0){
						this.loadingMonth=false;
						this.month=="";
						this.versionMonth==""
						this.Massage.success(res.message)
					}
					
				})		
			},
			//全量
			createAll(){
				this.loadingAll=true;
				if(this.versionAll==""){
					this.$Message.warning('请输入版本号');
				}
				var params={
					version:this.versionAll
				}
				this.$api.createVersionAll(params).then(res=>{
					if(res.responseCode==0){
						this.loadingAll=false;
						this.versionAll==""
						this.Massage.success(res.message)
					}
					
				})

				
				
				
			},
			//版本保存
			saveVersion(){
				this.loading=true;
				if(this.yearMonth==""){
					this.$Message.warning('请选择时间');
				}
				if(this.version==""){
					this.$Message.warning('请输入版本号');
				}
				let date=new Date(this.yearMonth)
				let year=date.getFullYear()
				let currentMonth=date.getMonth()+1; 
				let month=moment(getMonth).format('MM')
				
				
				var params={
					year:year,
					month:month,
					version:this.version,
					remark:this.remark
				}
// 				this.$api.saveVersion(params).then(res=>{
// 					if(res.responseCode==0){
// 						this.loading=false;
// 						this.version==""
// 						this.remark==""
// 						this.yearMonth="";
// 						
// 					}
// 					
// 				})		
			},
			
		},
	}
</script>

<style>

</style>
