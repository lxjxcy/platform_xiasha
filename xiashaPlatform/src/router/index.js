import Vue from 'vue'
import Router from 'vue-router'

import login_register from "@/view/login-register/login_register.vue"
import login from "@/view/login-register/login.vue"
import home from "@/view/home/home.vue"
//月度租金收入
import month_rental_income from "@/view/home/dataWall/cockpit-navigation/month_rental_income.vue"
//租赁面积
import rental_area from "@/view/home/dataWall/cockpit-navigation/rental_area.vue"
//租金收入比对
import rental_lncome_than from "@/view/home/dataWall/cockpit-navigation/rental_lncome_than.vue"
//年度租金收入
import year_rental_income from "@/view/home/dataWall/cockpit-navigation/year_rental_income.vue"
//企业数量
import company_number from "@/view/home/dataWall/cockpit-navigation/company_number.vue"
//进驻客户数量
import enter_customer_number from "@/view/home/dataWall/cockpit-navigation/enter_customer_number.vue"
//进驻企业
import enter_company from "@/view/home/dataWall/cockpit-navigation/enter_company.vue"

//进驻数量类型占比
import enter_number_type from "@/view/home/dataWall/business-data/enter_number_type.vue"
//员工数量类型占比
import employees_number_type from "@/view/home/dataWall/business-data/employees_number_type.vue"
//企业用电量
import electricity from "@/view/home/dataWall/business-data/electricity.vue"
//企业经营
import company_manage from "@/view/home/dataWall/business-data/company_manage.vue"
//企业资质
import company_aptitude from "@/view/home/dataWall/business-data/company_aptitude.vue"
//企业融资
import company_financing from "@/view/home/dataWall/business-data/company_financing.vue"
//知识产权
import intellectual_property from "@/view/home/dataWall/business-data/intellectual_property.vue"

//企业人数
import company_people_number from "@/view/home/dataWall/business-data/company_people_number.vue"

//国家计划项目
import country_plan_project from "@/view/home/dataWall/business-data/country_plan_project.vue"

//人才计划项目
import person_plan_project from "@/view/home/dataWall/business-data/person_plan_project.vue"
//经营分析
//出租率
import occupancy_rate from "@/view/home/dataWall/operation-analysis/occupancy_rate.vue"
//进驻客户数
import park_enter_num from "@/view/home/dataWall/operation-analysis/park_enter_num.vue"
//租金收入
import park_rental_income from "@/view/home/dataWall/operation-analysis/park_rental_income.vue"
//出租率分析
import rental_rate_analysis from "@/view/home/dataWall/operation-analysis/rental_rate_analysis.vue"
//空置面积占比
import vacancy_area_than from "@/view/home/dataWall/operation-analysis/vacancy_area_than.vue"
//空置天数占比
import vacancy_days_than from "@/view/home/dataWall/operation-analysis/vacancy_days_than.vue"
//招商需求分析
import lnvestment_demand_analysis from "@/view/home/dataWall/operation-analysis/lnvestment_demand_analysis.vue"
//政策需求排行
import policy_demand_ranking from "@/view/home/dataWall/operation-analysis/policy_demand_ranking.vue"

//服务需求排行
import service_demand_ranking from "@/view/home/dataWall/operation-analysis/service_demand_ranking.vue"

//项目列表
import communityList from "@/view/home/dataWall/communityList.vue"
//版本生成
import createVersion from "@/view/home/version/createVersion.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
			redirect: '/login',
      name: 'login_register',
      component: login_register,
			
			children:[
				{
					path: '/login',
					name: 'login',
					component: login,
				},			
			]
    },
		
		{
			path: '/home',
			name: 'home',
			redirect: '/cockpit-navigation/month_rental_income',
			component: home,
			
			children:[
				{
					path: '/cockpit-navigation/month_rental_income',
					name: 'month_rental_income',
					meta: {title: '月度租金收入'},
					component: month_rental_income,
				},
				{
					path: '/cockpit-navigation/rental_area',
					name: 'rental_area',
					component: rental_area,
				},	
				{
					path: '/cockpit-navigation/rental_lncome_than',
					name: 'rental_lncome_than',
					component: rental_lncome_than,
				},
				{
					path: '/cockpit-navigation/year_rental_income',
					name: 'year_rental_income',
					component: year_rental_income,
				},
				{
					path: '/cockpit-navigation/company_number',
					name: 'company_number',
					component: company_number,
				},
				{
					path: '/cockpit-navigation/enter_customer_number',
					name: 'enter_customer_number',
					component: enter_customer_number,
				},
				{
					path: '/cockpit-navigation/enter_company',
					name: 'enter_company',
					component: enter_company,
				},
				{
					path: '/business-data/enter_number_type',
					name: 'enter_number_type-data',
					component: enter_number_type,
				},
				{
					path: '/business-data/employees_number_type',
					name: 'employees_number_type',
					component: employees_number_type,
				},
				{
					path: '/business-data/electricity',
					name: 'electricity',
					component: electricity,
				},
				{
					path: '/business-data/company_manage',
					name: 'company_manage',
					component: company_manage,
				},
				{
					path: '/business-data/company_aptitude',
					name: 'company_aptitude',
					component: company_aptitude,
				},
				{
					path: '/business-data/company_financing',
					name: 'company_financing',
					component: company_financing,
				},
				{
					path: '/business-data/intellectual_property',
					name: 'intellectual_property',
					component: intellectual_property,
				},
				{
					path: '/business-data/company_people_number',
					name: 'company_people_number',
					component: company_people_number,
				},
				{
					path: '/business-data/country_plan_project',
					name: 'country_plan_project',
					component: country_plan_project,
				},
				{
					path: '/business-data/person_plan_project',
					name: 'person_plan_project',
					component: person_plan_project,
				},
				
				{
					path: '/operation-analysis/occupancy_rate',
					name: 'occupancy_rate',
					component: occupancy_rate,
				},
				{
					path: '/operation-analysis/park_enter_num',
					name: 'park_enter_num',
					component: park_enter_num,
				},
				{
					path: '/operation-analysis/park_rental_income',
					name: 'park_rental_income',
					component: park_rental_income,
				},
				{
					path: '/operation-analysis/rental_rate_analysis',
					name: 'rental_rate_analysis',
					component: rental_rate_analysis,
				},
				{
					path: '/operation-analysis/vacancy_area_than',
					name: 'vacancy_area_than',
					component: vacancy_area_than,
				},
				{
					path: '/operation-analysis/vacancy_days_than',
					name: 'vacancy_days_than',
					component: vacancy_days_than,
				},
				{
					path: '/operation-analysis/lnvestment_demand_analysis',
					name: 'lnvestment_demand_analysis',
					component: lnvestment_demand_analysis,
				},
				{
					path: '/operation-analysis/policy_demand_ranking',
					name: 'policy_demand_ranking',
					component: policy_demand_ranking,
				},
				{
					path: '/operation-analysis/service_demand_ranking',
					name: 'service_demand_ranking',
					component: service_demand_ranking,
				},
				{
					path: '/createVersion',
					name: 'createVersion',
					component: createVersion,
				},
				{
					path: '/communityList',
					name: 'communityList',
					component: communityList,
				},
			]
		},
		
  ]
})
