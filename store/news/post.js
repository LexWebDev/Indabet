export const actions = {
  FETCH ({ commit }) {
    return this.$axios.$get(`${process.env.urlApi}/news`)
      .then((data) => {
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  FETCH_BY_ID ({ commit }, id) {
    return this.$axios.$get(`${process.env.urlApi}/news/${id}`)
      .then((data) => {
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  }
}
