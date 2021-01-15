<template>
  <h1>Hello!</h1>
</template>

<script>

export default {
  layout: 'account',
  middleware: ['account-auth']
}
</script>
