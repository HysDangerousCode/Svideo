import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component:()=>import('../views/Main.vue'),
    children:[
      {
        path:'/',
        name:'home',
        component:()=>import('../views/Home.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
