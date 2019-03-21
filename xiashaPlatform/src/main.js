// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'
import axios from "./axiosconfig/index.js"
// import axios from 'axios' //引入
import api from './api/'
Vue.prototype.$api = api





import 'babel-polyfill'
import iView from 'iview';
Vue.use(iView);
import 'iview/dist/styles/iview.css';
import searchMonth from "./components/searchMonth.vue"
import searchYear from "./components/searchYear.vue"
import tableYear from "./components/tableYear.vue"
import tableMonth from "./components/tableMonth.vue"
Vue.component(searchMonth.name, searchMonth)
Vue.component(searchYear.name, searchYear)
Vue.component(tableYear.name, tableYear)
Vue.component(tableMonth.name, tableMonth)





Vue.prototype.axios = axios
 router.beforeEach((to, from, next) => {
	 let token = store.state.token;
    if (to.matched.some(record => record.meta.Auth)) { // 判断该路由是否需要登录权限,能检测出带参数的路由
        if (token) {  // 通过vuex state获取当前的token是否存在
				 iView.LoadingBar.start();
            next()
        } else {
            next({
                path: '/',
                // query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
			iView.LoadingBar.start();
        next()
    }
})
router.afterEach(route => {
    iView.LoadingBar.finish();
});

Vue.config.productionTip = false



if (window.sessionStorage.getItem('Year')) {
  store.commit('saveYear', window.sessionStorage.getItem('Year'))
}
if (window.sessionStorage.getItem('Month')) {

  store.commit('saveMonth', window.sessionStorage.getItem('Month'))
}
if (window.sessionStorage.getItem('Version')) {
  store.commit('saveVersion', window.sessionStorage.getItem('Version'))
}
if (JSON.parse(window.sessionStorage.getItem('userInfo'))) {
	store.commit('saveUserInfo', JSON.parse(window.sessionStorage.getItem('userInfo')))

}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
	
  template: '<App/>',
	data:{
		eventHub:new Vue()
	}
})
