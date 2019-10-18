import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'
// const axios = require ('axios')

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: localStorage.getItem('user')
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
        localStorage.setItem('token', response.data.token)
      })
      .then(() => router.push({ path: '/newpost'}))
    },
    createUser({ commit }, user){
      axios.post('https://sensi-backend.herokuapp.com/api/users/signup', user)
      .then(function(response) {
        commit('setUser', response.data.user),
        localStorage.setItem('token', response.data.token)
      })
      .then(result => router.push({ path: '/newpost'}))
    },
    updatePosts({ commit }, user){
      commit('setUser', user)
    }
  }
})