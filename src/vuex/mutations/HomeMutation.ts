import {ADD_TO_CART,actions} from '../actions/HomeAction';
//import {HomeGetter} from '../getters/HomeGetter';
/**
 * 默认的数据存储
 */
const state = {
  added: [],
  checkoutStatus: '1'
}
// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}
const mutations = {
  [ADD_TO_CART] (state, { id }) {
    
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}