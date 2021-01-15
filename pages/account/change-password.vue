<template>
  <div id="change-password-page">
    <change-password />
  </div>
</template>

<script>
import ChangePassword from '@/components/auth/changePassword'

export default {
  components: { ChangePassword }
}
</script>

<style scoped>
#change-password-page {
  height: 100%;
}
</style>
