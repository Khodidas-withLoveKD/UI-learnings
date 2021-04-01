import Vue from 'vue'
import Vuex from 'vuex'
import profileDetailsStore from './profileDetailsStore'
import testStore from './test-store'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profileDetailsStore,
    testStore
  }
})
