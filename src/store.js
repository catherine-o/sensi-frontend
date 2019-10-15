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
    },
    createUser({ commit }){
      console.log(commit)
      fetch('https://sensi-backend.herokuapp.com/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'name': name,
        'password': password
        })
      })
      // .then(result => console.log(result))
    }
  }
})