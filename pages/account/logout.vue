<template>
  <div>Clearing the data..</div>
</template>

<script>
export default {
  layout: 'account',
  middleware: ['account-auth'],
  beforeCreate () {
    this.$store.dispatch('auth/logout')
    this.$router.push('/account/login?message=logout-info')
  }
}
</script>
