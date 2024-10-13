import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import tushufenleiList from '../pages/tushufenlei/list'
import tushufenleiDetail from '../pages/tushufenlei/detail'
import tushufenleiAdd from '../pages/tushufenlei/add'
import tushuxinxiList from '../pages/tushuxinxi/list'
import tushuxinxiDetail from '../pages/tushuxinxi/detail'
import tushuxinxiAdd from '../pages/tushuxinxi/add'
import chanpinfenleiList from '../pages/chanpinfenlei/list'
import chanpinfenleiDetail from '../pages/chanpinfenlei/detail'
import chanpinfenleiAdd from '../pages/chanpinfenlei/add'
import tushuchanpinList from '../pages/tushuchanpin/list'
import tushuchanpinDetail from '../pages/tushuchanpin/detail'
import tushuchanpinAdd from '../pages/tushuchanpin/add'
import discusstushuxinxiList from '../pages/discusstushuxinxi/list'
import discusstushuxinxiDetail from '../pages/discusstushuxinxi/detail'
import discusstushuxinxiAdd from '../pages/discusstushuxinxi/add'
import discusstushuchanpinList from '../pages/discusstushuchanpin/list'
import discusstushuchanpinDetail from '../pages/discusstushuchanpin/detail'
import discusstushuchanpinAdd from '../pages/discusstushuchanpin/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'tushufenlei',
					component: tushufenleiList
				},
				{
					path: 'tushufenleiDetail',
					component: tushufenleiDetail
				},
				{
					path: 'tushufenleiAdd',
					component: tushufenleiAdd
				},
				{
					path: 'tushuxinxi',
					component: tushuxinxiList
				},
				{
					path: 'tushuxinxiDetail',
					component: tushuxinxiDetail
				},
				{
					path: 'tushuxinxiAdd',
					component: tushuxinxiAdd
				},
				{
					path: 'chanpinfenlei',
					component: chanpinfenleiList
				},
				{
					path: 'chanpinfenleiDetail',
					component: chanpinfenleiDetail
				},
				{
					path: 'chanpinfenleiAdd',
					component: chanpinfenleiAdd
				},
				{
					path: 'tushuchanpin',
					component: tushuchanpinList
				},
				{
					path: 'tushuchanpinDetail',
					component: tushuchanpinDetail
				},
				{
					path: 'tushuchanpinAdd',
					component: tushuchanpinAdd
				},
				{
					path: 'discusstushuxinxi',
					component: discusstushuxinxiList
				},
				{
					path: 'discusstushuxinxiDetail',
					component: discusstushuxinxiDetail
				},
				{
					path: 'discusstushuxinxiAdd',
					component: discusstushuxinxiAdd
				},
				{
					path: 'discusstushuchanpin',
					component: discusstushuchanpinList
				},
				{
					path: 'discusstushuchanpinDetail',
					component: discusstushuchanpinDetail
				},
				{
					path: 'discusstushuchanpinAdd',
					component: discusstushuchanpinAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
