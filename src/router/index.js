import Vue from "vue"
import Router from "vue-router"
import Sider from '../components/Sider/index.vue'

Vue.use(Router)
const routes = [
  { 
    path: '/', 
    name:'login',
    component: () =>import('@/view/login/index')
  },
  {
    path:'/view',
    name:'Main',
    component:Sider,
    children:[
      { 
        path: '/chatWindow', 
        name:'chatWindow',
        component: () =>import('@/view/chatWindow') 
      }
    ]
  }
  
]

export default new Router({
  routes ,
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
