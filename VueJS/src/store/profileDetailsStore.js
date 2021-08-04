export default ({
  namespaced: true,
  state: {
    profileDetails: {
      name: 'No name here at the beginning',
      email: 'Nothing here initially'
    }
  },
  getters: {
    getProfileDetails (state) {
      console.log('INSIDE getProfileDetails:')
      return state.profileDetails
    }
  },
  mutations: {
    SET_PROFILE_DETAILS (state, data) {
      state.profileDetails = data
    }
  },
  actions: {
    editProfileDetails ({ dispatch }, profileObject) {
      dispatch('attempt', profileObject)
    },
    async attempt ({ commit }, profileObject) {
      commit('SET_PROFILE_DETAILS', profileObject)
    }
  }
})
