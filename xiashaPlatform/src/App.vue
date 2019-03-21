<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background: #f5f6fa;
	height:100%;
	
/*  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.ivu-table td, .ivu-table th{
	height:35px !important;
}
.boxall{
	display: flex;
	justify-content: space-between;
}
*{
	padding: 0;
	margin:0;
}
ul{
	list-style: none;;
}
.r{
	float: right;
}
.l{
	float: left
}
.inputClass{
	font-size: 14px;	
	border:none;
	width:80px;
	text-align: center
}
	h3{
		/* line-height: 30px; */
		font-size: 14px;
		font-weight: 200px;
		padding-bottom: 3px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
		text-align: center;
	}
</style>
