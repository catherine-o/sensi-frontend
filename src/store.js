import Vue from 'vue'
import Vuex from 'vuex'
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
        console.log(response.data.user)
        commit('setUser', response.data.user),
        localStorage.setItem('token', response.data.token)
      })
    },
    createUser({commit}, user){
      axios.post('https://sensi-backend.herokuapp.com/api/users/signup', user)
      .then(function(response) {
        commit('setUser', response.data.user),
        localStorage.setItem('token', response.data.token)
      })
    }
  }
})