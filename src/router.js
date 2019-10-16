import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'

import Start from '@/views/Start'
import Login from '@/views/Login'
import Profile from '@/views/Profile'

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
      path: '/profile',
      meta: {
        requiresAuth: true
      },
      name: 'profile',
      component: Profile
    },

    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Store.state.user) {
      next({ name: 'login' })
    } else {
      next() 
    }
  } else {
    next()
  }
})


export default router

