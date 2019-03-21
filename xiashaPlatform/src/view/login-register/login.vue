<template>
	<div class="login">
		<div class="login-con">
			<div class="form-con">
				<div class="login-title">
					用户登录
				</div>
				<Form ref="loginForm" :model="loginForm"  @keydown.enter.native="handleSubmit('loginForm')">
					<FormItem prop="username">
						<Input v-model="loginForm.username" placeholder="用户名">
				
						</Input>

					</FormItem>

					<FormItem prop="password">
						<Input type="password" v-model="loginForm.password" placeholder="密码为6-16数字和英文组合">
						
						</Input>
					</FormItem>
					
					<FormItem>
						<Button :loading="loading" @click="handleSubmit('loginForm')" type="primary" long>登录</Button>
					</FormItem>
				</Form>
				<!-- <p class="login-tip" @click="register()">新用户注册</p> -->
			</div>
		</div>
		
	</div>
</template>
<script>
	// import { requestLogin } from '../../mockapi/api';
	export default {
		name:"login",
		data(){
			return{
				loginMethod:"使用手机登录",
				loading:false,
				showtel:false,
				 value13: '',
				select3: 'day',
				loginForm: {
				username:"",
				password: '',
				tel:"",
				
				},

			}
		},
		methods:{			
			//登录
			handleSubmit () {	
				var that=this;	
				var User={
					username:that.loginForm.username,
					password:that.loginForm.password,
				};
				if(that.loginForm.username==""||that.loginForm.password==""){
					alert("邮箱或密码不能为空")
				}else if(that.loginForm.username=="admin"&&that.loginForm.password=="123456"){
					
					that.$store.commit('saveUserInfo',User)
					that.$router.push("/cockpit-navigation/month_rental_income");
				}else{
					alert("用户名或密码格式不正确")
				}
				
				
				
// 				if(that.loginMethod=="使用手机登录"){
// 				
// 					if(that.loginForm.email==""||that.loginForm.password==''){
// 						alert("邮箱或密码不能为空")
// 						return
// 					}
// 					if(!(/^[a-zA-Z0-9]{6,16}$/.test(that.loginForm.password))&&!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g).test(that.loginForm.email)){
// 						alert("邮箱和密码格式不正确")
// 						return
// 					}
// 					if(!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g).test(that.loginForm.email)){
// 						alert("邮箱格式不正确")
// 						return
// 					}
// 					if(!(/^[a-zA-Z0-9]{6,16}$/.test(that.loginForm.password))){
// 						alert("密码格式不正确")
// 						return
// 					}
// 					
// 					var loginParam={
// 						username:that.loginForm.email,
// 						password:that.loginForm.password,						
// 					}					
// 				}else{
// 					if(that.loginForm.tel==""||that.loginForm.password==''){
// 						alert("手机号或密码不能为空")
// 						return
// 					}
// 					if(!(/^[a-zA-Z0-9]{6,16}$/.test(that.loginForm.password))&&!(/^1(3|4|5|7|8)\d{9}$/.test(that.loginForm.tel))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(that.loginForm.tel)){
// 						alert("手机号和密码格式不正确")
// 						return
// 					}
// 					if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.loginForm.tel))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(that.loginForm.tel)){
// 						alert("手机号格式不正确")
// 						return
// 					}
// 					if(!(/^[a-zA-Z0-9]{6,16}$/.test(that.loginForm.password))){
// 						alert("密码格式不正确")
// 						return
// 					}
// 					var loginParam={
// 						username:that.loginForm.tel,
// 						password:that.loginForm.password,
// 					}
// 				}
// 				that.$refs[loginForm].validate((valid) => {
// 					if (valid) {
// 						// that.loading=true;										
// 						// console.log(loginParam)
// // 						requestLogin(loginParam).then(res=>{							
// // 							that.loading=false;
// // 							console.log(res)							
// // 							if(res.code==0){
// 								// that.$store.commit('saveUserinfo',res.user)
// 								that.$router.push("/cockpit-navigation/month_rental_price");
// // 							}else{
// // 								that.$Message.error(res.message);
// // 
// // 							}	
// // 						})
// 		
// 					}
// 				})
			}
		}
		
		
		
	}
</script>

<style scoped>
	.login{
		padding:50px;
	}
	.ivu-input{
		height:43px;
	}
	.ivu-card-body{
		padding:2%;
		
	}
	.login-con{
		width:30%;
		float: right;
		box-shadow:0px 0px 3px 0px #abcdef;
		border-top:3px solid #00abf6;
		height:400px
	}
	.form-con{
			padding: 10px 20px;
	}
	.login-title{
		height:60px;
		/* text-align: center; */
		line-height: 60px;
		font-size: 18px;
	}
	.login-tip{
		text-align: right;
		color:#00abf6;
		font-weight: 500;
		font-size: 14px;
		padding-right: 5px;
		
		cursor: pointer;
	}
	.login-method{
		color:#00abf6;
		cursor: pointer;
		position: absolute;
		right:5px;
		top:0;
		
	}
	.tel-method{
		position: absolute;
		top:0px;
		right:10px;
		color:#00abf6;
		cursor: pointer;
		z-index: 1000;
	}

</style>
