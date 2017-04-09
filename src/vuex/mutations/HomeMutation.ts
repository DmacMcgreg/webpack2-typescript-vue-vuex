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
const ADD_TO_CART = 'ADD_TO_CART';
const moduleA = {
    state: {
        added: [],
        count: 0,
        checkoutStatus: '1'
    },
    mutations: {
        [ADD_TO_CART](state, { id }) {

        }
    },
    actions: {
        checkout({ commit, state }, products) {
            console.log('触发到这里来')
        }
    },
    getters: {
        checkoutStatus: state => state.checkoutStatus,
        doubleCount(state) {
            return state.count * 2
        }
    }
}

export default moduleA