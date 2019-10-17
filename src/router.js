import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import Login from '@/views/Login'
import NewPost from '@/views/NewPost'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: {
        requiresAuth: false
      },
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      meta: {
        requiresAuth: false
      },
      name: 'login',
      component: Login
    },
    {
      path: '/newpost',
      meta: {
        requiresAuth: true
      },
      name: 'new post',
      component: NewPost
    },

    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({ name: 'login' })
    } else {
      next() 
    }
  } else {
    next()
  }
})


export default router

