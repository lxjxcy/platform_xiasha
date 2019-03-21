<template>
  <div class="search_comp">
			<!-- <DatePicker 
			 type="month" 
			 :options="options"  
			:clearable = false
			 style="width: 200px"
			 format="yyyy-MM" 
			 placeholder="请选择日期"
			 @on-change="onChangeDate"
			 :value="selectdate">
			 </DatePicker> -->
			 <Select v-model="communityId"
			 v-if="this.$store.state.showCommunity"
			 style="width:200px" 
			 :label-in-value="true" 
			 @on-change="changeCommunityList">
			 	<Option v-for="item in communityList"  :value="item.communityId" :key="item.communityId">{{ item.communityName }}</Option>
			 </Select>
			 
  </div>
</template>

<script>
	import tool from "../common/js/tool.js"
export default {
  name: 'searchMonth',
  data () {
    return {
			 options: {
						disabledDate (date) {
								return date && date.valueOf() > Date.now() - 8.64e6;
						}
				},
				communityList:[],
// 				month:tool.getMonth(),
// 				year:tool.getYear(),
				communityId:'',
				// selectdate:tool.getlastmonth(),
    }
  },
	created(){
	
	},
	mounted(){
		if(this.$store.state.showCommunity){
			this.getCommunityList(this.$store.state.version,this.$store.state.year,this.$store.state.month)
		}
	},
	methods: {
			getCommunityList(){
				this.communityList=this.$store.state.getCommunityList;
				this.communityId=this.$store.state.communityId
			},
		clearData() {
			
		},
		changeCommunityList(e){
				this.communityId=e.value;
				this.$store.state.communityId=e.value;
				this.$store.state.communityName=e.label;
				this.$emit("getMonth")	
		},
// 		onChangeDate(getmonth){
// 			var date=new Date(getmonth);
// 			var year=date.getFullYear()
// 			// this.$store.state.year=year
// 			var months=date.getMonth()+1;
// 				var month=months>10?months:"0"+months;
// 				this.month=month;
// 				
// 				this.$store.state.month=month;
// 				this.$emit("getMonth")			
// 		},
		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_comp{
	margin-bottom: 5px;
	/* height:50px; */
}
</style>
