import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    }
  },
  actions: {
    loginUser({ commit }){
      fetch('https://sensi-backend.herokuapp.com/api/users')
      .then(users => {
        commit('setUsers', users)
      })
    }
  }
})