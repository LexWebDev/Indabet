export const state = () => ({
  sportData: []
})

export const mutations = {
  setSports (state, data) {
    state.sportData = data
  }
}

export const actions = {
  ALL_DATA_SPORT ({ commit, dispatch }) {
    return this.$axios.$get(`${process.env.urlApi}/sport/global-stat`)
      .then((data) => {
        dispatch('setSports', data)
        return data
      })
      .catch((e) => {
        commit('Error', e)
        throw e
      })
  },
  setSports ({ commit }, data) {
    commit('setSports', data)
  }
}

export const getters = {
  getSports (state) {
    return state.sportData
  }
}
