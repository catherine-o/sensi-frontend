import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: localStorage.getItem('vuex')
  },
  mutations: {
    setUser(state, user){
        state.user = user
    }
  },
  actions: {
    loginUser({ commit }, user){
      axios.post('https://sensi-backend.herokuapp.com/api/login', user)
        .then(function(response) {
          !response.data.user 
          ? alert("Incorrect username or password")
          : commit('setUser', response.data.user),
            localStorage.setItem('token', response.data.token),
            router.push({ path: '/newpost' })
        })
    },
    createUser({ commit }, user){
      axios.post('https://sensi-backend.herokuapp.com/api/users/signup', user)
        .then(function(response) {
          commit('setUser', response.data.user),
          localStorage.setItem('token', response.data.token)
        })
        .then(result => router.push({ path: '/newpost' }))
    },
    updatePosts({ commit }, user){
      commit('setUser', user)
    },
    // getPosts({ commit }, user){
    //   let token = localStorage.getItem('token')
    //   axios.post('http://localhost:8080/api/users/' + user.id, {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   })
    //     .then(response => console.log(response.data))
    //     // .then(function(response) {
    //     //   commit('setUser', response.data.user)
    //     // })
    //     // .then(result => router.push({ path: '/profile' }))
    // }
  }
})