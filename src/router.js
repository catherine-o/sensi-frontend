import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/views/Start'
import Login from '@/views/Login'
import Profile from '@/views/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    { path: '*', redirect: '/' }
  ]
})

// Router.beforeEach((to, from, next) => {
//   const publicPages = ['/', '/login']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')

//   if(authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next()
// })
