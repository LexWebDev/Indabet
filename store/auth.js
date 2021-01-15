import Cookie from 'cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null,
  dataUser: {}
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  },
  setDataUser (state, data) {
    state.dataUser = Object.assign({}, state.dataUser, data)
  }
}

export const actions = {
  LOGIN ({ commit, dispatch }, formData) {
    return this.$axios.$post(`${process.env.urlApi}/auth/signin`, formData)
      .then((token) => {
        if (token) {
          dispatch('setToken', token)
        }
        return token
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  SIGNUP ({ commit, dispatch }, formData) {
    return this.$axios.$post(`${process.env.urlApi}/auth/signup`, formData)
      .then((token) => {
        dispatch('setToken', token)
        return token
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  PROFILE ({ commit, dispatch }) {
    return this.$axios.$get(`${process.env.urlApi}/users/profile`)
      .then((data) => {
        dispatch('setDataUser', data)
        return data
      })
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  PROFILE_POST ({ commit, dispatch }, formData) {
    return this.$axios.$post(`${process.env.urlApi}/users/profile/changeInfo`, formData)
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  PROFILE_POST_EMAIL ({ commit, dispatch }, formData) {
    return this.$axios.$post(`${process.env.urlApi}/users/profile/changeEmail`, formData)
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  PROFILE_GET_PASSWORD ({ commit, dispatch }, query) {
    return this.$axios.$get(`${process.env.urlApi}/auth/email/reset-password?email=${query.email}&redirect=${query.redirect}`)
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  PROFILE_POST_PASSWORD ({ commit, dispatch }, formData) {
    return this.$axios.$post(`${process.env.urlApi}/auth/email/reset-password`, formData)
      .catch((e) => {
        commit('setError', e, { root: true })
        throw e
      })
  },
  setDataUser ({ commit }, data) {
    commit('setDataUser', data)
  },
  setToken ({ commit }, token) {
    commit('setToken', token)
    this.$cookies.set('jwt-token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  logout ({ commit }) {
    commit('clearToken')
    this.$cookies.remove('jwt-token')
  },
  autoLogin ({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']
    if (isJWTValid(token)) {
      dispatch('setToken', JSON.parse(token))
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token,
  getDataUser: state => state.dataUser
}

function isJWTValid (token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0
  return (new Date().getDate() / 1000) < expires
}
