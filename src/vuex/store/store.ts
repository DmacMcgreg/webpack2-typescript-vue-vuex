import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import HomeMutation from '../mutations/HomeMutation';
import PromoteMutation from '../mutations/PromoteMutation';
export default new Vuex.Store({
 
  modules: {
    HomeMutation,
    PromoteMutation
  }
})
