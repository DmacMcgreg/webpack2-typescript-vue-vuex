const ADD_TO_CART = 'ADD_TO_CART';
const actions = {
  checkout ({ commit, state }, products) {
    console.log('触发到这里来')
  }
}

export {
  ADD_TO_CART,
  actions
};