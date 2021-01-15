<template>
  <div id="login-page">
    <app-login />
  </div>
</template>

<script>
import AppLogin from '@/components/auth/Login'

export default {
  components: {
    AppLogin
  }
}
</script>

<style lang="scss" scoped>
#login-page {
  height: 100%;
}
</style>
