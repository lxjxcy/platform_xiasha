import tool from "../common/js/tool.js"
export default{
	data(){
		return{
			hackReset:true,

		}
	},
	created(){
		this.$store.state.addModal=false;
		this.$store.state.month=tool.getMonth()
		this.$store.state.year=tool.getYear()
		let path = this.$route.matched[1].path ;
		 if(path.indexOf('/business-data/company_people_number')==0||path.indexOf('/business-data/company_manage')==0){
			
			
		 }else{
					this.columns2.push(
						{
						title: '操作',
						key: 'action',
						align: 'center',
						render: (h, params) => {
							return h('div', [
							 h('Button', {
									props: {type: 'error', size: 'small'},
								},[
									h('Poptip', {
										props: {
												confirm: true,
												transfer: true,
												placement: 'top',
												title: '确定要删除吗！',
												type: 'error',
												size: 'small',
												width: '200',
			
										},
										on: {
												'on-ok':  ()=>{
													
														this.deletData(params.row.id)
												},
												'on-cancel': function(){
														// this.$Message.info('取消删除')
												}
										}
									}, '删除')
									])
								]);
							}
						})

		 }
		this.columns1.unshift(
			 {			
							title:"序号",
                        type: 'index',
                        width: 60,
                        align: 'center'
             },
		);
		this.columns2.unshift(
			{			
					title:"序号",
					type: 'index',
					width: 60,
					align: 'center'
			},
		)

	},
	mounted(){
		this.dataToChild()
		if(this.showCommunity){
			this.getCommunityList(this.$store.state.version,this.$store.state.year,this.$store.state.month)
		}else{
			this.getlist();	
		}
	},
	watch: {
		"$store.state.version":function(ov,nv){
			if(ov!=nv){
				this.getlist()
				this.getCommunityList(this.$store.state.version,this.$store.state.year,this.$store.state.month)
			}
			
			
		}			 
	}, 
	methods:{
		resetModal(){
			this.hackReset = false
				this.$nextTick(() => {
				this.hackReset = true
			})
		},
		//打开弹框
		open(){
			

			this.$refs.addChild.openModal(this.typeNumber,this.$store.state.communityName,this.typeList,this.$store.state.communityId)
		},
		//获取园区列表
		getCommunityList(version,year,month){
			this.$api.getparkList(version,year,month).then(res=>{
				if(res.data.updateAfter.length==0){
					return
				}
				this.$store.state.communityId=res.data.updateAfter[0].communityId;
				this.$store.state.communityName=res.data.updateAfter[0].communityName;
				this.$store.state.getCommunityList=res.data.updateAfter;
				this.$refs.showChild.sendParkId()
				this.getlist();				
			})
		},
		
		//删除
		deletData(id){
			this.$api.delet(this.typeNumber,id).then(res=>{
				if(res.responseCode==0){
					var afterlist=this.updateAfter;
					var array=afterlist.filter(element=>element.id!=id)
					this.updateAfter=array;
					this.dataToChild()
					this.$Message.success(res.message)
					
				}else{
					this.$Message.error(res.message)
				}
				
			})
		},
		//向子组件传递参数
		dataToChild(){
			var param={
				columns1:this.columns1,
				columns2:this.columns2,
				updateAfter:this.updateAfter,
				updateBefore:this.updateBefore
			}
			this.$refs.showChild.getChild(param)
		},
		//获取年月
		showMonthYear(){
			this.getlist()
		},
		//修改table数值
		comUpdate(h, params,field){ 			
			var number=params.row[field];
			return h('input', {
				class:'inputClass',
				domProps: {
				value: params.row[field],
				type:'number'
				},
				on: {
				blur: (event)=> {
					if(event.target.value==""){
						this.$Message.error("不能为空，请重新输入")
						event.target.value=number
					}else
					if(params.row[field]!=event.target.value){
						params.row[field]= event.target.value
						this.confirm(params.row,number,field)
						
					}								  
				},
				},
				
			});
		},
		//确认是否修改
		confirm (row,number,field) {
			this.$Modal.confirm({
				title: '提示',
				content: '<p>是否确认修改？</p><p></p>',
				onOk: () => {
					this.$api.update(this.typeNumber,row.id,field,row[field]).then(res=>{
						if(res.responseCode==0){
							this.$Message.success("修改成功")
						}else{
							row[field]=number
							this.$Message.error("修改失败")
						}
					})
				},
				onCancel: () => {
					row[field]=number
				}
			});
		},
		
		//数组对象去重
		unique(arr,keys) {
			const res = new Map();
			return arr.filter((a) => !res.has(a[keys]) && res.set(a[keys], 1))
		},
		getFilters(data,keys){
			var arrs=this.unique(data,keys)
			var list=[];
			
			arrs.forEach((e,i,a)=>{
				var valueid=e[keys];
				if(keys=="typeName"){
					if(e[keys]==1){
						e[keys]="剩余租赁面积"
						valueid=1
					}else if(e[keys]==2){
						e[keys]="招商意向面积";
						valueid=2
					}
				}
				list.push({
					label:e[keys],
					value:valueid	
				})
			})
			return list;
		}
		

	

		
	},
}