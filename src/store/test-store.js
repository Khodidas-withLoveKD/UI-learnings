import { mapGetters } from 'vuex'

export default ({
  namespaced: true,
  ...mapGetters({
    getDetails: 'profileDetailsStore/getProfileDetails'
  }),
  state: {
    value: 99
  },
  getters: {
    getState (state, getters) {
      console.log('state.value', state.value)
      return getters.getProfileDetails
      // return state.value
    }
  },
  mutations: {
  },
  actions: {
  }
})
