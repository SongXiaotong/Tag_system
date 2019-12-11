import Vue from 'vue'

export const SET_BOOK = 'SET_BOOK'
export const SET_DETAIL = 'SET_DETAIL'
export const SET_LOADING = 'SET_LOADING'
export const SET_PIC = 'SET_PIC'

export default {
  [SET_BOOK] (state, info) {
    state.bookname = info.bookname
    state.chapstate = info.chapstate
    state.loading = false
  },
  [SET_DETAIL] (state, info) {
    state.currchap = info.currchap
    state.markdetail = info.markdetail
    state.loading = false
  },
  [SET_LOADING] (state, info) {
    state.loading = info
  },
  [SET_PIC] (state, info) {
    state.currpic = info
  }
}
