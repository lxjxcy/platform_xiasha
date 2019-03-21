<template>
  <div class="search_comp">
			 <!-- <DatePicker 
			 type="year" 
			 :options="options"  
			
			 style="width: 200px"
			 format="yyyy" 
			 placeholder="请选择年份"
			 @on-change="onChangeDate"
			 :clearable = false
			 :value="selectdate">
			 </DatePicker> -->
			 <Select v-model="communityId"
				style="width:200px" 
				v-if="this.$store.state.showCommunity"
				:label-in-value="true" 
				@on-change="changeCommunityList">
			 		<Option v-for="item in communityList"  :value="item.communityId" :key="item.communityId">{{ item.communityName }}</Option>
			 </Select>
			 <Select v-model="typeName"
			 style="width:200px" 
				placeholder="请选择类型"
				v-if="this.$store.state.showType"
			 :label-in-value="true" 
			clearable
			 @on-clear="clearType"
			 @on-change="changeType">
			 	<Option v-for="item in this.$store.state.typelist"  :value="item.value" :key="item.value">{{ item.label }}</Option>
			 </Select>
  </div>
</template>
<script>
	import tool from "../common/js/tool.js"
export default {
  name: 'searchYear',
  data () {
    return {
			 options: {
						disabledDate (date) {
								return date && date.valueOf() > Date.now() - 8.64e6;
						}
				},
				typeName:"",
				getValue:false,
				// selectdate:tool.getlastmonth(),
				communityId:'',
// 				month:tool.getMonth(),
// 				year:tool.getYear(),
				communityList:[
					
				]
    }
  },
	created(){
		
	},
	mounted(){		
	},
 
	methods: {
		getCommunityList(){
			this.communityList=this.$store.state.getCommunityList;
			this.communityId=this.$store.state.communityId
		},
		
		changeType(e){
				if(!this.getValue){
					this.$store.state.typeValue=e.value;
				}else{
					this.$store.state.typeValue=''
				}
			this.getValue=false
			this.$emit("getMonth")
						
			
		},
		clearType(){
			this.getValue=true;
			this.$store.state.typeValue='';
			this.$emit("getMonth")
				return
		},
		
		clearData() {
			
		},
		changeCommunityList(e){
			this.communityId=e.value;
			this.$store.state.typeValue='';
			this.typeName='';
			this.$store.state.typelist=[];
			this.$store.state.communityId=e.value;
			this.$store.state.communityName=e.label;
			
			
			this.$emit("getMonth")	
		},
		onChangeDate(year){
			var month="";
			this.year=year;
			var years=this.year
			this.$store.state.typeValue='';
			this.typeName='';
			this.$store.state.typelist=[];
			this.$store.state.year=years
			this.$emit("getMonth")			
		},
		
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
