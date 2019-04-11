import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import router from '../router/index' 
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
