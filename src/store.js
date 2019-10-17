import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
const axios = require ('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
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
        commit('setUser', response.data.user),
        localStorage.setItem('user', response.data.user),
        localStorage.setItem('token', response.data.token)
      })
      .then(() => router.push({ path: 'profile'}))
    },
    createUser({commit}, user){
      axios.post('https://sensi-backend.herokuapp.com/api/users/signup', user)
      .then(function(response) {
        commit('setUser', response.data.user),
        localStorage.setItem('user', response.data.user),
        localStorage.setItem('token', response.data.token)
      })
      .then(result => router.push({ path: 'profile'}))
    }
  }
})