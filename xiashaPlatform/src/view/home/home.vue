<template>
 <div class="home">
    <header>
			<div style="margin-left: 200px;">
				 <DatePicker 
				 type="month" 
				 :options="options"  
				 :clearable = false
				 style="width:100px"
				 format="yyyy-MM" 
				 placeholder="请选择日期"
				 @on-change="onChangeDate"
				 :value="selectdate">
				 </DatePicker>
				 
				 <Select v-model="version"
				 style="width:150px" 
				 :label-in-value="true" 
				 @on-change="changeVersion">
				 <Option v-for="item in list"  :value="item.version" :key="item.id">
				 <span>v</span>
				 {{ item.version }}
				 </Option>
				 </Select>
				  <Tooltip content="将次版本更新至大屏">
							<Button @click="saveVersion">切换</Button>
					</Tooltip>		
			</div>
			<div>
				<Dropdown style="color: #fff;">
						<a href="javascript:void(0)" style="color: #fff;font-size: 16px">
					
							你好！
							<Icon type="md-contact" />
								{{this.$store.state.userInfo.username}}
								<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list" style="text-align: center;">
								<DropdownItem ><span @click="back()" style="display: block;">退出</span></DropdownItem>
						</DropdownMenu>
				</Dropdown>
			</div>
			
		</header>

	 <div class="layout">
       <menuall></menuall>
   </div>

</div>
</template>

<script>
	import tool from "../../common/js/tool.js"
	import menuall from "./menuall.vue"
	export default {
		name:"home",
		components:{
			menuall
		},
		data(){
			return{
				list:[],
				version:'',
				year:this.$store.state.year,
				month:this.$store.state.month,
				selectdate:this.$store.state.year+"-"+this.$store.state.month,
				options: {
						disabledDate (date) {
								return date && date.valueOf() > Date.now() - 8.64e6;
						}
				},
				
			}
		},
		mounted() {
			this.version=this.$store.state.version;
			this.getVersionList(this.year,this.month)

		},
		methods:{
			//改变时间
			onChangeDate(getmonth){
				this.list=[]
				this.version='';
				var date=new Date(getmonth);
				var year=date.getFullYear()
				this.$store.commit('saveYear',year)

				var months=date.getMonth()+1;
					var month=months>10?months:"0"+months;
					this.month=month;
					// this.$store.state.month=month;
					this.$store.commit('saveMonth',month)
					this.getVersionList(this.$store.state.year,this.$store.state.month)
			},
			//获取版本
			getVersionList(year,month){

					this.$api.getVersion(year,month).then(res=>{
						
					this.list=res.data.updateAfter;
					if(this.version==0){
						this.version=res.data.updateAfter[0].version;
						
					}
					this.$store.commit('saveVersion',this.version)
					if(res.data.updateAfter.length==0){
						this.$store.commit('saveVersion','0')
						return
					}
					

				})
			},
			// 改变版本
			changeVersion(){

				this.$store.commit('saveVersion',this.version)
					
			},
			//更新大屏
			saveVersion() {
				this.confirm ()
				
			},
			 confirm (){
						this.$Modal.confirm({
								title: '提示',
								content: '您确定将大屏数据更新为'+this.$store.state.year+'-'+this.$store.state.month+','+this.$store.state.version+'版本么？',
								onOk: () => {
										var params={
												month:this.$store.state.month,
												year:this.$store.state.year,
												version:this.$store.state.version
											}
										
										this.$api.switchVersion(params).then(res=>{
											
										})
								},
								onCancel: () => {
										
								}
						});
				},

	
			

				 back(){
					 this.$router.push("/login");
				 }
		}
	}
</script>
<style scoped>
	.home{
		display: flex;
		flex-direction:column;
		flex-basis: auto;
		box-sizing: border-box;
		min-width: 0;
		height:100%;
		/* overflow-x: hidden; */
		
	}
	 header {
		 height:60px;
		 width:100%;
		
		 line-height: 60px;
		 background: #00abf6;
		 display: flex;
		 justify-content: space-between;
		 padding-right: 2%;
  }
     .layout{
		 flex: 1;
        /* border: 1px solid #d7dde4; */
        background: #f5f7f9;
        /* position: relative; */
        border-radius: 4px;
				overflow:hidden;
				overflow-y:auto;
        /* overflow: hidden; */
		/* margin-top: 60px; */
		
		/* height:80%; */
    }
   
  

  	
  

  


	
	
</style>

