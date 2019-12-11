import Vue from 'vue'

export const GET_NEXT_PIC = 'GET_NEXT_PIC'

export default {
  [GET_NEXT_PIC] (state, getters, rootState) {
    return function (index) {
      for(let i = index+1; i < state.markdetail.length; ++i){
        if(!state.markdetail[i].ifmarked){
          return i
        }
      }
      return state.markdetail.length
    }
  }
}
