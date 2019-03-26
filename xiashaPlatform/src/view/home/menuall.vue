<template>
	<div>
		<Sider class="groll" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" >
			<Menu :active-name="activemenu" ref="side_menu" theme="dark" width="auto"  :open-names="open" @on-select="routeTo" accordion >
				<Submenu name="1">
						<template slot="title">
								<Icon type="md-grid" />
								数据墙
						</template>
						<MenuItem name="1-3">
							<Icon type="md-calculator"/>园区列表
						</MenuItem>
						<Submenu name="1-1">
								<template slot="title">
										<Icon type="md-grid" />
										领导驾驶舱
								</template>
								<MenuItem name="1-1-1">
									<Icon type="md-calculator" />月度租金收入
								</MenuItem>
								<MenuItem name="1-1-2">
									<Icon type="md-calculator" />租赁面积
								</MenuItem>
								<MenuItem name="1-1-3">
									<Icon type="md-calculator" />租金收入比对
								</MenuItem>
								<MenuItem name="1-1-4">
									<Icon type="md-calculator" />年度租金收入
								</MenuItem>
								<MenuItem name="1-1-5">
									<Icon type="md-calculator" />企业数量
								</MenuItem>
								<MenuItem name="1-1-6">
									<Icon type="md-calculator" />进驻客户数量
								</MenuItem>
								<MenuItem name="1-1-7">
									<Icon type="md-calculator" />进驻企业
								</MenuItem>
						</Submenu>
						
						<Submenu name="1-2">
								<template slot="title">
										<Icon type="md-grid" />
										企业数据
								</template>
								<MenuItem name="1-2-1">
									<Icon type="md-calculator" />进驻数量类型占比
								</MenuItem>
								<MenuItem name="1-2-2">
									<Icon type="md-calculator" />员工人数类型占比
								</MenuItem>
								<MenuItem name="1-2-3">
									<Icon type="md-calculator" />企业用电量
								</MenuItem>
								<MenuItem name="1-2-4">
									<Icon type="md-calculator" />企业经营
								</MenuItem>
								<MenuItem name="1-2-5">
									<Icon type="md-calculator" />企业融资情况
								</MenuItem>
								<MenuItem name="1-2-6">
									<Icon type="md-calculator" />知识产权
								</MenuItem>
								<MenuItem name="1-2-7">
									<Icon type="md-calculator" />企业人数
								</MenuItem>
								<MenuItem name="1-2-8">
									<Icon type="md-calculator" />国家计划项目
								</MenuItem>
								<MenuItem name="1-2-9">
									<Icon type="md-calculator" />人才计划项目
								</MenuItem>
								<MenuItem name="1-2-10">
									<Icon type="md-calculator" />企业资质
								</MenuItem>
						</Submenu>
						<Submenu name="1-3">
								<template slot="title">
										<Icon type="md-grid" />
										经营分析
								</template>
								<MenuItem name="1-3-1">
									<Icon type="md-calculator" />出租率
								</MenuItem>
								<MenuItem name="1-3-2">
									<Icon type="md-calculator" />进驻客户数量
								</MenuItem>
								<MenuItem name="1-3-3">
									<Icon type="md-calculator" />租金收入
								</MenuItem>
								<MenuItem name="1-3-4">
									<Icon type="md-calculator" />出租率分析
								</MenuItem>
								<MenuItem name="1-3-5">
									<Icon type="md-calculator" />空置面积占比分析
								</MenuItem>
								<MenuItem name="1-3-6">
									<Icon type="md-calculator" />空置天数占比分析
								</MenuItem>
								<MenuItem name="1-3-7">
									<Icon type="md-calculator" />招商需求分析
								</MenuItem>
								<MenuItem name="1-3-8">
									<Icon type="md-calculator" />企业政策需求排行
								</MenuItem>
								<MenuItem name="1-3-9">
									<Icon type="md-calculator" />企业服务需求排行
								</MenuItem>
								<MenuItem name="1-3-10">
									<Icon type="md-calculator" />企业排行
								</MenuItem>
						</Submenu>
						

								
											
				</Submenu>
				<Submenu name="2">
						<template slot="title">
								<Icon type="md-grid" />
								统计数据
						</template>
						<MenuItem name="2-1">
							<Icon type="md-calculator" />生成版本
						</MenuItem>
				</Submenu>
			</Menu>
		</Sider>
		<Layout :style="{marginLeft: '200px'}">
			<Content :style="{padding: '0 16px 16px'}">
				<Breadcrumb :style="{margin: '16px 0'}">
					<BreadcrumbItem>{{title}}</BreadcrumbItem>
					
				</Breadcrumb>
				<!-- <Card> -->
					<router-view/>

				<!-- </Card> -->
			</Content>
		</Layout>
	</div>
	
</template>

<script>
	export default {
		name:'menuall',
		data(){
			return{
				activemenu:'1',
				open:['1','1-1','1-1-1'],
				title:"月度租金收入",
				nameslist:["1"],
				
			}
		},
		created() {
			
		},
		mounted() {
			this.menuList()
			this.$nextTick(() => {
			this.$refs.side_menu.updateOpened();
			this.$refs.side_menu.updateActiveName();
			});
		},
		methods:{

			routeTo(e){
				
				let path = this.$route.matched[1].path  
				if(path.indexOf('/communityList')!=0&&e=="1-3"){
					this.$router.push("/communityList");
					this.title="园区列表"
				}
				if(path.indexOf('/cockpit-navigation/month_rental_income')!=0&&e=="1-1-1"){
					this.$router.push("/cockpit-navigation/month_rental_income");
					
					this.title="领导驾驶舱——月度租金收入"
				}
				if(path.indexOf('/cockpit-navigation/rental_area')!=0&&e=="1-1-2"){
					this.$router.push("/cockpit-navigation/rental_area");
					this.title="领导驾驶舱——租赁面积"
				}
				if(path.indexOf('/cockpit-navigation/rental_lncome_than')!=0&&e=="1-1-3"){
					this.$router.push("/cockpit-navigation/rental_lncome_than");
					this.title="领导驾驶舱——租金收入比对"
				}
				if(path.indexOf('/cockpit-navigation/year_rental_income')!=0&&e=="1-1-4"){
					this.$router.push("/cockpit-navigation/year_rental_income");
					this.title="领导驾驶舱——年度租金收入"
				}
				if(path.indexOf('/cockpit-navigation/company_number')!=0&&e=="1-1-5"){
					this.$router.push("/cockpit-navigation/company_number");
					this.title="领导驾驶舱——企业数量"
				}
				if(path.indexOf('/cockpit-navigation/enter_customer_number')!=0&&e=="1-1-6"){
					this.$router.push("/cockpit-navigation/enter_customer_number");
					this.title="领导驾驶舱——进驻客户数量"
				}
				if(path.indexOf('/cockpit-navigation/enter_company')!=0&&e=="1-1-7"){
					this.$router.push("/cockpit-navigation/enter_company");
					this.title="领导驾驶舱——进驻企业"
				}
				if(path.indexOf('/business-data/enter_number_type')!=0&&e=="1-2-1"){
					this.$router.push("/business-data/enter_number_type");
					this.title="企业数据——进驻数量类型占比"
				}
				if(path.indexOf('/business-data/employees_number_type')!=0&&e=="1-2-2"){
					this.$router.push("/business-data/employees_number_type");
					this.title="企业数据——员工人数类型占比"
				}
				if(path.indexOf('/business-data/electricity')!=0&&e=="1-2-3"){
					this.$router.push("/business-data/electricity");
					this.title="企业数据——企业用电量"
				}
				if(path.indexOf('/business-data/company_manage')!=0&&e=="1-2-4"){
					this.$router.push("/business-data/company_manage");
					this.title="企业数据——企业经营"
				}
				if(path.indexOf('/business-data/company_financing')!=0&&e=="1-2-5"){
					this.$router.push("/business-data/company_financing");
					this.title="企业数据——企业融资情况"
				}
				if(path.indexOf('/business-data/intellectual_property')!=0&&e=="1-2-6"){
					this.$router.push("/business-data/intellectual_property");
					this.title="企业数据——知识产权"
				}
				if(path.indexOf('/business-data/company_people_number')!=0&&e=="1-2-7"){
					this.$router.push("/business-data/company_people_number");
					this.title="企业数据——企业人数"
				}
				if(path.indexOf('/business-data/country_plan_project')!=0&&e=="1-2-8"){
					this.$router.push("/business-data/country_plan_project");
					this.title="企业数据——国家计划项目"
				}
				if(path.indexOf('/business-data/person_plan_project')!=0&&e=="1-2-9"){
					this.$router.push("/business-data/person_plan_project");
					this.title="企业数据——人才计划项目"
				}
				if(path.indexOf('/business-data/company_aptitude')!=0&&e=="1-2-10"){
					this.$router.push("/business-data/company_aptitude");
					this.title="企业数据——企业资质"
				}
				if(path.indexOf('/operation-analysis/occupancy_rate')!=0&&e=="1-3-1"){
					this.$router.push("/operation-analysis/occupancy_rate");
					this.title="经营分析——出租率"
				}
				if(path.indexOf('/operation-analysis/park_enter_num')!=0&&e=="1-3-2"){
					this.$router.push("/operation-analysis/park_enter_num");
					this.title="经营分析——进驻客户数量"
				}
				if(path.indexOf('/operation-analysis/park_rental_income')!=0&&e=="1-3-3"){
					this.$router.push("/operation-analysis/park_rental_income");
					this.title="经营分析——租金收入"
				}
				if(path.indexOf('/operation-analysis/rental_rate_analysis')!=0&&e=="1-3-4"){
					this.$router.push("/operation-analysis/rental_rate_analysis");
					this.title="经营分析——出租率分析"
				}
				if(path.indexOf('/operation-analysis/vacancy_area_than')!=0&&e=="1-3-5"){
					this.$router.push("/operation-analysis/vacancy_area_than");
					this.title="经营分析——空置面积占比"
				}
				
				if(path.indexOf('/operation-analysis/vacancy_days_than')!=0&&e=="1-3-6"){
					this.$router.push("/operation-analysis/vacancy_days_than");
					this.title="经营分析——空置天数占比"
				}
				if(path.indexOf('/operation-analysis/lnvestment_demand_analysis')!=0&&e=="1-3-7"){
					this.$router.push("/operation-analysis/lnvestment_demand_analysis");
					this.title="经营分析——招商需求分析"
				}
				if(path.indexOf('/operation-analysis/policy_demand_ranking')!=0&&e=="1-3-8"){
					this.$router.push("/operation-analysis/policy_demand_ranking");
					this.title="经营分析——政策需求排行"
				}
				if(path.indexOf('/operation-analysis/service_demand_ranking')!=0&&e=="1-3-9"){
					this.$router.push("/operation-analysis/service_demand_ranking");
					this.title="经营分析——服务需求排行"
				}
				if(path.indexOf('/createVersion')!=0&&e=="2-1"){
					this.$router.push("/createVersion");
					this.title="统计版本——生成版本"
				}	
			},
			//刷新菜单高亮不变
			menuList(){ 				
				let path = this.$route.matched[1].path  
				// 获取到地址拦上#号后面的url地址
				if(path.indexOf('/communityList') == 0){
					this.activemenu = "1-3"
					this.open=['1','1-3'];
					this.title="园区列表"
				}
				if(path.indexOf('/cockpit-navigation/month_rental_income') == 0){
					this.activemenu = "1-1-1"
					this.open=['1','1-1','1-1-1'];
					this.title="领导驾驶舱——月度租金收入"
				}
				if(path.indexOf('/cockpit-navigation/rental_area') == 0){					
					this.activemenu = "1-1-2"
					this.open=['1','1-1','1-1-2'];
					this.title="领导驾驶舱——租赁面积"
				}
				if(path.indexOf('/cockpit-navigation/rental_lncome_than') == 0){					
					this.activemenu = "1-1-3"
					this.open=['1','1-1','1-1-3'];
					this.title="领导驾驶舱——租金收入比对"
				}
				if(path.indexOf('/cockpit-navigation/year_rental_income') == 0){					
					this.activemenu = "1-1-4"
					this.open=['1','1-1','1-1-4'];
					this.title="领导驾驶舱——年度租金收入"
				}
				if(path.indexOf('/cockpit-navigation/company_number') == 0){					
					this.activemenu = "1-1-5"
					this.title="领导驾驶舱——企业数量"
				}
				if(path.indexOf('/cockpit-navigation/enter_customer_number') == 0){					
					this.activemenu = "1-1-6"
					this.open=['1','1-1','1-1-6'];
					this.title="领导驾驶舱——进驻客户数量"
				}
				if(path.indexOf('/cockpit-navigation/enter_company') == 0){					
					this.activemenu = "1-1-7"
					this.open=['1','1-1','1-1-7'];
					this.title="领导驾驶舱——进驻企业"
					
				}
				
				
				if(path.indexOf('/business-data/enter_number_type') == 0){					
					this.activemenu = "1-2-1"
					this.open=['1','1-2','1-2-1'];
					this.title="企业数据——进驻数量类型占比"
					
				}
				if(path.indexOf('/business-data/employees_number_type') == 0){					
					this.activemenu = "1-2-2"
					this.open=['1','1-2','1-2-2'];
					this.title="企业数据——员工人数类型占比"
				}
				if(path.indexOf('/business-data/electricity') == 0){					
					this.activemenu = "1-2-3"
					this.open=['1','1-2','1-2-3'];
					this.title="企业数据——企业用电量"
				}
				if(path.indexOf('/business-data/company_manage') == 0){					
					this.activemenu = "1-2-4"
					this.open=['1','1-2','1-2-4'];
					this.title="企业数据——企业经营"
				}
				if(path.indexOf('/business-data/company_financing') == 0){					
					this.activemenu = "1-2-5"
					this.open=['1','1-2','1-2-5'];
					this.title="企业数据——企业融资情况"
				}
				
				if(path.indexOf('/business-data/intellectual_property') == 0){					
					this.activemenu = "1-2-6"
					this.open=['1','1-2','1-2-6'];
					this.title="企业数据——知识产权"
				}if(path.indexOf('/business-data/company_people_number') == 0){					
					this.activemenu = "1-2-7"
					this.open=['1','1-2','1-2-7'];
					this.title="企业数据——企业人数"
				}
				if(path.indexOf('/business-data/country_plan_project') == 0){					
					this.activemenu = "1-2-8"
					this.open=['1','1-2','1-2-8'];
					this.title="企业数据——国家计划项目"
				}
				if(path.indexOf('/business-data/country_plan_project') == 0){					
					this.activemenu = "1-2-9"
					this.open=['1','1-2','1-2-9'];
					this.title="企业数据——人才计划项目"
				}
				if(path.indexOf('/business-data/company_aptitude') == 0){					
					this.activemenu = "1-2-10"
					this.open=['1','1-2','1-2-10'];
					this.title="企业数据——企业资质"
				}
				
				if(path.indexOf('/operation-analysis/occupancy_rate') == 0){					
					this.activemenu = "1-3-1"
					this.open=['1','1-3','1-3-1'];
					this.title="经营分析——出租率"
				}
				if(path.indexOf('/operation-analysis/park_enter_num') == 0){					
					this.activemenu = "1-3-2"
					this.open=['1','1-3','1-3-2'];
					this.title="经营分析——进驻客户数量"
				}
				if(path.indexOf('/operation-analysis/park_rental_income') == 0){					
					this.activemenu = "1-3-3"
					this.open=['1','1-3','1-3-3'];
					this.title="经营分析——租金收入"
				}
				if(path.indexOf('/operation-analysis/rental_rate_analysis') == 0){					
					this.activemenu = "1-3-4"
					this.open=['1','1-3','1-3-4'];
					this.title="经营分析——出租率分析"
				}
				if(path.indexOf('/operation-analysis/vacancy_area_than') == 0){					
					this.activemenu = "1-3-5"
					this.open=['1','1-3','1-3-5'];
					this.title="经营分析——空置面积占比"
				}
				
				if(path.indexOf('/operation-analysis/vacancy_days_than') == 0){					
					this.activemenu = "1-3-6"
					this.open=['1','1-3','1-3-6'];
					this.title="经营分析——空置天数占比"
				}
				if(path.indexOf('/operation-analysis/lnvestment_demand_analysis') == 0){					
					this.activemenu = "1-3-7"
					this.open=['1','1-3','1-3-7'];
					this.title="经营分析——招商需求分析"
				}
				if(path.indexOf('/operation-analysis/policy_demand_ranking') == 0){					
					this.activemenu = "1-3-8"
					this.open=['1','1-3','1-3-8'];
					this.title="经营分析——政策需求排行"
				}
				if(path.indexOf('/operation-analysis/service_demand_ranking') == 0){					
					this.activemenu = "1-3-9"
					this.open=['1','1-3','1-3-9'];
					this.title="经营分析——服务需要排行"
				}
				if(path.indexOf('/createVersion') == 0){					
					this.activemenu = "2-1"
					this.open=['2','2-1'];
					this.title="统计版本——生成版本"
				}
				
						
			},
		}
	}
</script>

<style scoped>
	.layout-header-bar{
			background: #fff;
			box-shadow: 0 1px 1px rgba(0,0,0,.1);
	}
	.groll::-webkit-scrollbar {
			display: none;
	}

</style>
