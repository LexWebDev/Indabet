<template>
  <div id="signup-page">
    <app-signup />
  </div>
</template>

<script>
import AppSignup from '@/components/auth/SignUp'

export default {
  components: {
    AppSignup
  }
}
</script>

<style lang="scss" scoped>
#signup-page {
  height: 100%;
}
</style>
