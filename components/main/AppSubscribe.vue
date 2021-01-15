<template>
  <section v-if="!isAuthenticated || (isAuthenticated && subOnNews === false)" class="subscribe">
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          sm="5"
          lg="4"
          offset-lg="3"
          offset-sm="2"
        >
          <h3 class="subscribe__title" v-text="title" />
        </v-col>
        <v-col
          cols="12"
          lg="4"
          sm="4"
        >
          <div class="subscribe_block">
            <v-btn
              nuxt
              tile
              color="accent"
              large
              to="/account/login"
            >
              Subscribe
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'AppSubscribe',
  data: () => ({
    title: 'Sign up for the Indatabet newsletter'
  }),
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated'
    ]),
    ...mapState('auth', [
      'dataUser'
    ]),
    subOnNews: {
      get () {
        return this.dataUser.subscribeNews
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 25px 0;
  background-color: #3c4043;
}
.subscribe__title {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
}
@media (max-width: 600px) {
  .subscribe__title, .subscribe_block {
    text-align: center;
  }
}
</style>
