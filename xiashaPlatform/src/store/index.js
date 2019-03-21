import Vue from 'vue'
import Vuex from 'vuex'
import tool from "../common/js/tool.js"

Vue.use(Vuex)
export default new Vuex.Store({
	 state: {
		 showCommunity:false,
		 showType:true,
		 typeValue:"",
		 version:"",
		month:tool.getMonth(),
		year:tool.getYear(),
		 communityId:"",
		 communityName:'',
		 typelist:[],
		 getCommunityList:[],
		 addModal:false,
		 monthList:[
		 	{
		 		month:'1',
		 		monthName:'1'
		 	},
		 	{
		 	month:'2',
		 	monthName:'2'
		 	},
		 	{
		 	month:'3',
		 	monthName:'3'
		 	},
		 	{
		 	month:'4',
		 	monthName:'4'
		 	},
		 	{
		 	month:'5',
		 	monthName:'5'
		 	},
		 	{
		 	month:'6',
		 	monthName:'6'
		 	},
		 	{
		 	month:'7',
		 	monthName:'7'
		 	},
		 	{
		 	month:'8',
		 	monthName:'8'
		 	},
		 	{
		 	month:'9',
		 	monthName:'9'
		 	},
		 	{
		 	month:'10',
		 	monthName:'10'
		 	},
		 	{
		 	month:'11',
		 	monthName:'11'
		 	},
		 	{
		 	month:'12',
		 	monthName:'12'
		 	},
		 	
		 ],
		 
		 userInfo:{
			 
		 },

	 },
	 mutations:{
		// 存年
		saveYear(state, year) {
			state.year = year;
			sessionStorage.setItem('Year', year)
		},
		// 存版本
		saveVersion(state, version) {
			state.version = version;
			sessionStorage.setItem('Version', version)
		},
		// 存月
		saveMonth(state, month) {
			state.month = month;

			sessionStorage.setItem('Month', month)
		},
		//用户信息
		saveUserInfo(state, userInfo) {
			state.userInfo = userInfo;
			sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
		},
		
		//退出
		exitUser(state) {	 
			state.version="0",
			state.month=tool.getMonth(),
			state.year=tool.getYear(),
			state.userInfo={},
			
			sessionStorage.removeItem('Year')
			sessionStorage.removeItem('Month')
			sessionStorage.removeItem('Version')
			sessionStorage.removeItem('userInfo')
		}
		
		 
	 },
	 actions:{
		 
		 
	 },
	 getters:{
		 
	 }
})