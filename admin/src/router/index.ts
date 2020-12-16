import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/courses/list',
        name: 'CoursesCrud',
        component: () => import('../views/courses/CourseCrud.vue')
      },
      // {
      //   path: '/courses/edit/:id',
      //   name: 'CoursesEdit',
      //   props: true,
      //   component: () => import('../views/courses/CourseEdit.vue')
      // },
      // {
      //   path: '/courses/create',
      //   name: 'CoursesCreate',
      //   component: () => import('../views/courses/CourseEdit.vue')
      // },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
