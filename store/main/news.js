export const state = () => ({
  newsData: []
})

export const mutations = {
  setNews (state, data) {
    state.newsData = data
  }
}

export const actions = {
  FETCH ({ commit, dispatch }) {
    return this.$axios.$get(`${process.env.urlApi}/news`)
      .then((data) => {
        dispatch('setNews', data)
        return data
      })
      .catch((e) => {
        commit('Error', e)
        throw e
      })
  },
  setNews ({ commit }, data) {
    commit('setNews', data)
  }
}

export const getters = {
  getNews (state) {
    return state.newsData
  }
}
