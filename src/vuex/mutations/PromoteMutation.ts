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
const PromoteMutation = {
    state: {
        // 查询条件
        searchKey : "FUCK YOU ",
        // 查询结果
        searchResultList : [{
            info:'1'
        },{
            info:'2'
        }]
    },
    mutations: {
        [DONE_COUNT](state, { id }) {
            console.log('更新视图')
            state.checkoutStatus = '2';
        }
    },
    actions: {
        checkout({ commit, state }) {
            console.log('a')
            //commit(DONE_COUNT,{ id:2 })
        }
    },
    getters: {
        PromoteGetterCheckoutStatus: state => {return state.count * 2}
    }
   
}

export default PromoteMutation