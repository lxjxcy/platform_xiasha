

export default {
	//上个月
		 getMonth:function (){
			 var firstdate = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1);
			 	var date=new Date(firstdate);
			 	var month=date.getMonth()+1				
					
				return month;
		},
		//上个月年
		getlastmonth:function (){
			var firstdate = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1);
				var yeardate=new Date(firstdate);
				var year=yeardate.getFullYear()	
				var monthdate=new Date(firstdate);
				var month=monthdate.getMonth()+1	
				return year+"-"+month
		},
		//当前年份
		getnowYear:function (){
			
				var date=new Date();
				var year=date.getFullYear()					
				return year;
		},
		getYear:function (){
				var firstdate = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1);
				var yeardate=new Date(firstdate);
				var year=yeardate.getFullYear()	
				return year;
		},

};
