import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/views/Welcome'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
