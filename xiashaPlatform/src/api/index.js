import { post } from '../axiosconfig/'
import { get } from '../axiosconfig/'
var url='http://101.37.124.231:8081';


export default {
	
	//获取版本号
	getVersion(year,month){
		return get(url+'/audit/query?number=0&year='+year+'&month='+month)
	},
	//统计版本按月
	createVersionMonth(params){
		return post(url+'/audit/shell/runMonth',params )
	},
	//统计版本全量
	createVersionAll(params){
		return post(url+'/audit/shell/runAll',params )
	},
	//保存版本
	saveVersion(params){
		return post(url+'/audit/version/save',params )
	},
	//更新大屏数据
	switchVersion(params){
		return post(url+'/audit/version/switch',params )
	},
	//租金收入月度趋势
	getRentMonth(version,year,id) {
		return get(url+'/audit/query?number=21&year='+year+'&communityId='+id+'&version='+version)
	},
	//租金收入比对
	getRentCompare(version,year,month) {
		return get(url+'/audit/query?number=22&year='+year+'&month='+month+'&version='+version)
	},
	//凭租面积
	getRentArea(version,year) {
		return get(url+'/audit/query?number=24&year='+year+'&version='+version)
	},
	//年度租金收入
	getRentYear(version,year,month) {
		return get(url+'/audit/query?number=23&year='+year+'&month='+month+'&version='+version)
	},
	//驻进客户数量
	getCustomerNumber(version,year,type) {
		if(type==""){
			return get(url+'/audit/query?number=25&year='+year+'&version='+version)	
		}
		return get(url+'/audit/query?number=25&year='+year+'&clientType='+type+'&version='+version)
	},
	//驻进企业
	getCompanyDetail(version,year,month) {
		return  get(url+'/audit/query?number=26&year='+year+'&month='+month+'&version='+version)
	},
	//地图企业数量
	getCompanyNumber(version,year,month){
		return  get(url+'/audit/query?number=27&year='+year+'&month='+month+'&version='+version)
	},
	
	
	
	//企业数据


//企业知识产权
	getCompanynInnovation(version,year,month) {
		return  get(url+'/audit/query?number=7&year='+year+'&month='+month+'&version='+version)
	},
	//企业人数
	getCompanynmployeesNumn(version,year,month) {
		return  get(url+'/audit/query?number=8&year='+year+'&month='+month+'&version='+version)
	},
	//企业融资
	getCompanynFinancing(version,year,month) {
		return  get(url+'/audit/query?number=5&year='+year+'&month='+month+'&version='+version)
	},
	//企业经营
	getCompanynManage(version,year,month) {
		return  get(url+'/audit/query?number=3&year='+year+'&month='+month+'&version='+version)
	},
	//企业进驻数量占比top5
	getCompanyTopNume(version,year,month) {
		return  get(url+'/audit/query?number=1&year='+year+'&month='+month+'&version='+version)
	},
	//企业员工人数占比top5
	getopEmployeesNume(version,year,month) {
		return  get(url+'/audit/query?number=2&year='+year+'&month='+month+'&version='+version)
	},
	//企业用电量
	getCompanyElectric(params) {
		return get('http://122.224.207.90:8885/report/company/electric', params)
	},
	//企业资质
	getCompanyQualification(version,year,month) {
		return  get(url+'/audit/query?number=6&year='+year+'&month='+month+'&version='+version)
	},
	//国家计划项目
	getNationalProgram(version,year,month) {
		return  get(url+'/audit/query?number=10&year='+year+'&month='+month+'&version='+version)
	},
	//人才计划项目
	getCompanyHonor(version,year,month) {
		return  get(url+'/audit/query?number=9&year='+year+'&month='+month+'&version='+version)
	},
		
	//经营分析
	//出租频率分析14
	getArea(version,year,month,id) {
		// util.getMonth()
		return get(url+'/audit/query?number=14&year='+year+'&month='+month+'&communityId='+id+'&version='+version )
	},
	//出租概率11
	getReaBuilding(version,year,month,id) {
		return get(url+'/audit/query?number=11&year='+year+'&month='+month+'&communityId='+id+'&version='+version )	
	},
	//租金收入13
	getBuilding(version,year,id,type) {
		if(type==""){
			return get(url+'/audit/query?number=13&year='+year+'&communityId='+id+'&version='+version )	
		}
		return get(url+'/audit/query?number=13&year='+year+'&communityId='+id+'&buildingName='+type+'&version='+version )	
	},
	
	//招商需求分析17
	getIntention(version,year,id,type) {
		if(type==""){
				return get(url+'/audit/query?number=17&year='+year+'&communityId='+id+'&version='+version)	
		}
		return get(url+'/audit/query?number=17&year='+year+'&communityId='+id+'&typeName='+type+'&version='+version )	
	},
	//空置面积占比分析15
	getAreaRoom(version,year,month,id) {
		return get(url+'/audit/query?number=15&year='+year+'&month='+month+'&communityId='+id+'&version='+version )	
	},
	//空置天数占比分析16
	getDayRoom(version,year,month,id) {
			return get(url+'/audit/query?number=16&year='+year+'&month='+month+'&communityId='+id+'&version='+version )	},
	//企业政策需求排行18
	getPolicyNeed(version,year,month,id) {
		return get(url+'/audit/query?number=18&year='+year+'&month='+month+'&communityId='+id+'&version='+version )
	},
	//企业服务需求排行19
	getServiceNeed(version,year,month,id) {
		return get(url+'/audit/query?number=19&year='+year+'&month='+month+'&communityId='+id+'&version='+version )
	},
	//驻进客户数量12
	getcomeNumber(version,year,id,type) {
		if(type==""){
				return get(url+'/audit/query?number=12&year='+year+'&communityId='+id+'&version='+version)
	
		}
		 return get(url+'/audit/query?number=12&year='+year+'&communityId='+id+'&clientType='+type+'&version='+version )
	},
	//园区列表20
	getparkList(version,year,month) {
		return  get(url+'/audit/query?number=20&year='+year+'&month='+month+'&version='+version)
	},
	
	
	
	update(number,id,field,num){
		return  post(url+'/audit/update?number='+number+'&id='+id+'&field='+field+'&num='+num)
	},
	//删除
	delet(number,id){
		return  post(url+'/audit/delete?number='+number+'&id='+id)
	},
	add(params){
		return  post(url+'/audit/add',params)
	},
	
	
	
	
	

}