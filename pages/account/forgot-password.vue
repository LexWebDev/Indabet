<template>
  <div id="reset-password-page">
    <reset-password />
  </div>
</template>

<script>
import ResetPassword from '@/components/auth/forgotPassword'

export default {
  components: { ResetPassword }
}
</script>

<style lang="scss" scoped>
#reset-password-page {
  height: 100%;
}
</style>
