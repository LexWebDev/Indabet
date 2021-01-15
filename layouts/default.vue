<template>
  <v-app id="indata">
    <v-app-bar app flat>
      <app-navigation />
    </v-app-bar>
    <v-main>
      <v-alert
        v-model="alert.alertNotification"
        class="alert-error"
        type="error"
        max-width="500"
        transition="slide-y-transition"
      >
        {{ alert.alertMsg }}
      </v-alert>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppNavigation from '@/components/main/navigation'
import AppFooter from '@/components/main/footer'

export default {
  components: {
    AppFooter,
    AppNavigation
  },
  data: () => ({
    alert: {
      alertNotification: false,
      alertMsg: ''
    },
    drawer: false,
    items: [
      { title: 'Home' },
      { title: 'About' }
    ]
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (value) {
      this.alert.alertNotification = true
      this.alert.alertMsg = value
      if (this.alert.alertNotification) {
        this.hide_alert()
      }
    }
  },
  methods: {
    hide_alert () {
      window.setInterval(() => {
        this.alert.alertNotification = false
      }, 3000)
    },
    updateDrawer (drawer) {
      this.drawer = drawer
    }
  }
}
</script>

<style scoped lang="scss">
.alert-error {
  z-index: 100;
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>
