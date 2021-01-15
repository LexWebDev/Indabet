<template>
  <section class="information">
    <h2 class="title text-center" v-text="title" />
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="11"
          offset-md="1"
        >
          <v-row justify="center" class="text-center">
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <span class="information__value">{{ getSports.eventsStat | numberPerDigits }}</span>
              <span class="information__text" v-text="' / events'" />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <span class="information__value">{{ getSports.sportCount | numberPerDigits }}</span>
              <span class="information__text" v-text="' / sports'" />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <span class="information__value">{{ getSports.bookmakersStat | numberPerDigits }}</span>
              <span class="information__text" v-text="' / bookmakerts'" />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <span class="information__value">{{ getSports.seasonsStat | numberPerDigits }}</span>
              <span class="information__text" v-text="' / seasons'" />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <span class="information__value">{{ getSports.oddsLinesStat | numberPerDigits }}</span>
              <span class="information__text" v-text="' / odds lines'" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="date">
            As of {{ $moment.unix(getSports.updateTime).format("MMM D") }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppInformation',
  filters: {
    numberPerDigits: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  },
  data: () => ({
    title: 'Brief information about the historical data provided by Indatabet',
    date: 'May 2020'
  }),
  computed: {
    ...mapGetters('main/allSportInfo', [
      'getSports'
    ])
  },
  mounted () {
    this.ALL_DATA_SPORT()
  },
  methods: {
    ...mapActions('main/allSportInfo', [
      'ALL_DATA_SPORT'
    ])
  }
}
</script>

<style lang="scss" scoped>
.information {
  padding: 30px 0;
  background-color: #3c4043;
  color: #fff;
}
.title {
  font-size: 1.5625rem !important;
  font-weight: 400;
  color: #fff;
  margin-bottom: 40px;
}
.information__value {
  font-size: 2rem;
  color: #ea4335;
}
.information__text {
  font-size: 1.25rem;
}
.date {
  margin-top: 50px;
  text-align: right;
  color: #5f6368;
}
</style>
