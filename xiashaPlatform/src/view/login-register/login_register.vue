<template>
	<div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'100'}">
                <Menu mode="horizontal" theme="dark" active-name="1" @on-select="routeTo">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">                      
                       
						<MenuItem name="1">
							<Icon type="ios-navigate"></Icon>
							登录
						</MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
               <router-view/>
            </Content>
            <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
        </Layout>
    </div>
<!-- 	<div>
		<div>
					
		</div>
		<div>
			<router-view/>
		</div>
	</div> -->
	
</template>

<script>
	export default {
		name:"login_register",
		data(){
			return{
				
			}
		},
		methods:{
			routeTo(e){
				if(e==1){
					this.$router.push("/login");
				}else{
					this.$router.push("/register");
				}
				
			}
		}
	}
</script>

<style scoped>
	    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
	.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
		float: right;
	}
	

</style>
