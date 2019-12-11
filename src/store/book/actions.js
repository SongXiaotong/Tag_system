// eslint-disable-next-line no-unused-vars
import * as mutations from './mutations'
import * as bookAPI from './../../api/book'

export const GET_BOOK_LIST = 'GET_BOOK_LIST'
export const GET_CHAP_LIST = 'GET_CHAP_LIST'
export const GET_MARK_DETAIL = 'GET_MARK_DETAIL'
export const GET_NEED_MARK = 'GET_NEED_MARK'
export const MARK = 'MARK'
export const START_MARK = 'START_MARK'
export const GET_NEXT_PIC = 'GET_NEXT_PIC'

export default {
  [GET_CHAP_LIST] ({commit, state}, info) {
    // info:{id: int, name: string}
    commit('SET_LOADING', true)
    bookAPI.get_chap_list(info).then((res) => {
      let data = {
        bookname: info.bookname,
        chapstate: res.data
      }
      commit('SET_BOOK', data)
      commit('SET_LOADING', false)
      return res
    })

  },
  [GET_BOOK_LIST] ({commit, state}, info) {
    // info:{id: int, name: string}
    let res = bookAPI.get_book_list()
    return res
  },
  [GET_MARK_DETAIL] ({commit, state}, info) {
    // info: id
    commit('SET_LOADING', true)
    bookAPI.get_mark_detail(info).then((res) => {
      let data = {
        currchap: info,
        markdetail: res.data
      }
      commit('SET_DETAIL', data)
      commit('SET_LOADING', false)
      return res
    })
  },
  [START_MARK] ({commit, state}, info) {
    // info: id
    return new Promise((resolve, reject) => {
      bookAPI.start_mark(info).then(res => {
        resolve(res)
      })
    })
  },
  [GET_NEXT_PIC] ({commit, state}, info) {
    // info: id
    let res = bookAPI.get_next_pic(info)
    return res
  },
  [GET_NEED_MARK] ({commit, state}, info) {
    // info: id
    bookAPI.get_need_mark(info).then((res) => {
      let data = {
        currchap: info,
        markdetail: res
      }
      commit('SET_DETAIL', data)
      return res
    })
  },
  [MARK] ({commit, state}, info) {
    let res = bookAPI.mark(info)
    return res
  }
}
