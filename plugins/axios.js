export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use((request) => {
    if (store.getters['auth/isAuthenticated'] && !request.headers.common.Authorization) {
      const token = store.getters['auth/token'].token.accessToken
      request.headers.common.Authorization = `Bearer ${token}`
    }
    return request
  })
}
