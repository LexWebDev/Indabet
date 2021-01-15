<template>
  <div class="toolbar__content-inner">
    <v-row align="center">
      <v-col
        cols="6"
        lg="2"
      >
        <nuxt-link
          to="/"
        >
          <v-img
            src="../images/logo.svg"
            class="logo"
            alt="logo"
          />
        </nuxt-link>
      </v-col>
      <v-col
        lg="5"
        class="d-none d-lg-block"
      >
        <v-hover v-slot="{ hover }">
          <v-menu
            open-on-hover
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                exact
                text
                nuxt
                to="/sport"
                :color="hover ? 'accent' : ''"
                v-bind="attrs"
                class="transition-swing"
                v-on="on"
              >
                Data Packages
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(sport, i) in getSports"
                :key="i"
                nuxt
                :to="`/sport/${sport.slug}`"
              >
                <v-list-item-title>{{ sport.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            text
            :color="hover ? 'accent' : ''"
            to="/database-creator"
            class="transition-swing"
          >
            Database Creator
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            text
            :color="hover ? 'accent' : ''"
            to="sports-event-predictions"
            class="transition-swing"
          >
            Sports Event Predictions
          </v-btn>
        </v-hover>
      </v-col>
      <v-col
        lg="5"
        class="text-right d-none d-lg-block"
      >
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            outlined
            :color="hover ? 'accent' : ''"
            to="contact-sales"
            class="transition-swing"
          >
            Contact Sales
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            text
            :color="hover ? 'accent' : ''"
            to="faq"
            class="transition-swing"
          >
            F.A.Q
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            text
            :color="hover ? 'accent' : ''"
            to="support"
            class="transition-swing"
          >
            Support
          </v-btn>
        </v-hover>
        <v-hover v-if="!isAuthenticated" v-slot="{ hover }">
          <v-btn
            nuxt
            text
            :color="hover ? 'accent' : ''"
            to="/account/login"
            class="transition-swing"
          >
            Login
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            nuxt
            icon
            :color="hover ? 'accent' : 'rgba(0, 0, 0, 0.87)'"
            to="search"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-if="isAuthenticated" v-slot="{ hover }">
          <v-menu
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                :color="hover ? 'accent' : 'rgba(0, 0, 0, 0.87)'"
                v-bind="attrs"
                class="transition-swing"
                v-on="on"
              >
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                nuxt
                to="/account"
              >
                <v-list-item-title>
                  <v-icon
                    color="#000"
                  >
                    mdi-cog-outline
                  </v-icon>
                  Settings
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                nuxt
                to="/account/logout"
              >
                <v-list-item-title>
                  <v-icon
                    color="#000"
                  >
                    mdi-logout-variant
                  </v-icon>
                  Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-hover>
      </v-col>
      <v-col
        cols="6"
        class="d-block d-lg-none text-right"
      >
        <v-btn
          color="primary"
          icon
          @click="drawer = true"
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          class="text-left"
          height="1000px"
          right
        >
          <v-list-item
            v-if="!isAuthenticated"
            link
            class="text-center"
            to="/account/login"
          >
            <v-list-item-content>
              <v-list-item-title>
                Login
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-if="isAuthenticated"
            link
            class="text-center"
            to="/account"
          >
            <v-list-item-content>
              <v-list-item-title>
                Account
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list dense>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>Data Packages</v-list-item-title>
              </template>
              <v-list-item
                v-for="(sport, i) in getSports"
                :key="i"
                nuxt
                :to="`/sport/${sport.slug}`"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ sport.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item
              nuxt
              to="/database-creator"
            >
              <v-list-item-content>
                <v-list-item-title>Database Creator</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              nuxt
              to="/sports-event-predictions"
            >
              <v-list-item-content>
                <v-list-item-title>Sports Event Predictions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              nuxt
              to="/contact-sales"
            >
              <v-list-item-content>
                <v-list-item-title>Contact Sales</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              nuxt
              to="/faq"
            >
              <v-list-item-content>
                <v-list-item-title>F.A.Q</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              nuxt
              to="/support"
            >
              <v-list-item-content>
                <v-list-item-title>Support</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated'
    ]),
    ...mapGetters('main/sport', [
      'getSports'
    ])
  },
  methods: {}
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.nuxt-link-active {
  .v-btn {
    background-color: #EA2845;
    color: #fff;
  }
}
.v-btn {
  text-transform: none;
}
.toolbar__content-inner {
  width: 100%;
}
.logo {
  width: 127px;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
}
.v-overlay__scrim {
  height: 1000px;
}
@media (max-width: 1338px) {
  span.v-btn__content {
    font-size: 12px;
  }
}
</style>
