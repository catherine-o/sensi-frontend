import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import Login from '@/views/Login'
import NewPost from '@/views/NewPost'
import Profile from '@/views/Profile'
import Smile from '@/views/Smile'
import Views from '@/views/Views'

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
    {
      path: '/profile',
      meta: {
        requiresAuth: true
      },
      name: 'profile',
      component: Profile
    },
    {
      path: '/smile',
      meta: {
        requiresAuth: true
      },
      name: 'smile',
      component: Smile
    },
    {
      path: '/views',
      meta: {
        requiresAuth: true
      },
      name: 'views',
      component: Views
    },

    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('vuex')) {
      next({ name: 'login' })
    } else {
      next() 
    }
  } else {
    next()
  }
})


export default router

