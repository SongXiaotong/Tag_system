import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import Book from './book/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: 0,
    username: 'aaa',
    LogPass: ''
  },
  actions,
  mutations,
  getters,
  modules: {
    Book: Book
  }
})
