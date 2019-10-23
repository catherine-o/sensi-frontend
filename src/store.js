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
    user: null,
    welcome: false
  },
  mutations: {
    setUser(state, user){
      !user.posts
        ? state.user = user
        : (user.posts.reverse(),
          state.user = user,
          state.welcome = true)
    }
  },
  actions: {
    loginUser({ commit }, user){
      axios.post('https://sensi-backend.herokuapp.com/api/login', user)
        .then(function(response) {
          !response.data.user 
          ? alert("Incorrect username or password")
          : commit('setUser', response.data.user),
            localStorage.setItem('token', response.data.token)
        })
    },
    createUser({ commit }, user){
      axios.post('https://sensi-backend.herokuapp.com/api/users/signup', user)
        .then(function(response) {
          commit('setUser', response.data.user),
          localStorage.setItem('token', response.data.token)
        })
        // .then(result => router.push({ path: '/newpost' }))
    },
    updatePosts({ commit }, user){
      commit('setUser', user)
    }
  }
})