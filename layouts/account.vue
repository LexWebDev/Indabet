<template>
  <v-app id="indata">
    <v-app-bar app clipped-left flat>
      <app-navigation />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="d-block d-lg-none"
      app
      :mini-variant.sync="mini"
      expand-on-hover
      permanent
      clipped
    >
      <app-aside />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer"
      class="d-none d-lg-block"
      app
      clipped
    >
      <app-aside />
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <div class="wrap">
          <nuxt />
        </div>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import appAside from '@/components/account/aside'
import AppFooter from '@/components/main/footer'
import AppNavigation from '@/components/main/navigation'

export default {
  components: {
    AppNavigation,
    AppFooter,
    appAside
  },
  data: () => ({
    drawer: null,
    mini: true
  })
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
}
.v-main {
  background: #f5f5f5;
}
@media (max-width: 1263px) {
  .wrap {
    padding-left: 50px;
  }
}
</style>
