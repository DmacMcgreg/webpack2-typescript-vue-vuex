// import {ADD_TO_CART,actions} from '../actions/HomeAction';
// //import {HomeGetter} from '../getters/HomeGetter';
// /**
//  * 默认的数据存储
//  */
// const state = {
//   added: [],
//   checkoutStatus: '1'
// }
// // getters
// const getters = {
//   checkoutStatus: state => state.checkoutStatus
// }
// const mutations = {
//   [ADD_TO_CART] (state, { id }) {

//   }
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
const DONE_COUNT = 'DONE_COUNT'
const FETCH_ALL = 'FETCH_ALL'
const TOGGLE_DONE = 'TOGGLE_DONE'
const GET_PRODUCTS = 'GET_PRODUCTS'
const moduleA = {
    state: {
        added: [],
        count: 1,
        checkoutStatus: '1'
    },
    mutations: {
        [DONE_COUNT](state, { id }) {
            console.log('更新视图')
            state.checkoutStatus = '2';
        }
    },
    actions: {
        checkout({ commit, state }) {
            commit(DONE_COUNT,{ id:2 })
        }
    },
    /*getters: {
        HomeGetterCheckoutStatus: state => {return state.count * 2}
    }*/
   getters  : {
  [GET_PRODUCTS] (state) {
    return state.count * 2
  }
}
}

export default moduleA