export const actions = {
  FETCH ({ commit }) {
    return this.$axios.$get(`${process.env.urlApi}/users/profile`)
      .then((data) => {
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  }
}
