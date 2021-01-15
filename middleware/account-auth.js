export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/account/login?message=auth-info')
  }
}
