import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
  { 
    path: '/', 
    name:'login',
    component: () =>import('@/view/login/index')
  },
//   { path: '/bar', component: Bar }
]

export default new Router({
  routes ,
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
