export default{
	data(){
		return{
			typeNumber:'',
			loading:true,
			addModal:false,

		}
	},
	methods:{
		
		asyncOK() {
			this.handleSubmit('addfrom')
			
		},
		//验证提交
		handleSubmit(addfrom) {
			// debugger
			var that=this;
			that.loading=true;
			// that.$refs[addfrom].validate((valid) => {
				
					// if (valid) {
						// debugger
						var versionParam={
							version:that.$store.state.version
						};
						var params=Object.assign(versionParam,that.addfrom)
					that.$api.add(params).then(res=>{
						// debugger
						that.loading=false;
						that.addmodal=false;
						if(res.responseCode==0){
							that.$emit("parReset")
							that.$Message.success(res.message)
							that.$emit("updataList")
						}else{
							that.$Message.error(res.message)
						}
					})							
// 					} else {
// 						debugger
// 						that.loading=false;
// 							setTimeout(()=>{
// 							that.loading=true;
// 						},1000)
// 						
// 					}
			// })
		},
		//取消
		asyncCancel(){
			this.$emit("parReset")
		},
		
		
	}
	
}