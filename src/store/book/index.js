import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const Book = {
  namespaced: true,
  state: {
    bookname: '请选择书籍',
    chapstate: [],
    loading: false,
    currchap: 0,
    markdetail: [],
    currpic: {}
  },
  actions,
  mutations,
  getters
}

export default Book
