export const actions = {
  FETCH ({ commit }) {
    return this.$axios.$get(`${process.env.urlApi}/sport/stat`)
      .then((data) => {
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  FETCH_BY_ID ({ commit }, slug) {
    return this.$axios.$get(`${process.env.urlApi}/sport/${slug}/stat`)
      .then((data) => {
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  }
}
