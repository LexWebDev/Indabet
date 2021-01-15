<template>
  <section class="info-data">
    <h2 class="title text-center" v-text="title" />
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in getSports"
          :key="i"
          lg="3"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card>
            <v-card-title>
              <v-icon
                class="icon"
              >
                {{ item.icon }}
              </v-icon>
              <span>Sport: {{ item.name }}</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  cols="6"
                >
                  <div class="card-value">
                    {{ item.oddsLinesStat | numberPerDigits }}
                  </div>
                  <div class="card-descr" v-text="'odds lines'" />
                </v-col>
                <v-col
                  cols="6"
                >
                  <div class="card-value">
                    {{ item.eventsStat | numberPerDigits }}
                  </div>
                  <div class="card-descr" v-text="'events'" />
                </v-col>
                <v-col
                  cols="6"
                >
                  <div class="card-value">
                    {{ item.leaguesStat | numberPerDigits }}
                  </div>
                  <div class="card-descr" v-text="'leagues'" />
                </v-col>
                <v-col
                  cols="6"
                >
                  <div class="card-value">
                    {{ item.seasonsStat | numberPerDigits }}
                  </div>
                  <div class="card-descr" v-text="'seasons'" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                nuxt
                text
                color="primary"
                :to="`sport/${item.slug}`"
              >
                Go to {{ item.name }} page
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppInfoData',
  filters: {
    numberPerDigits: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  },
  data: () => ({
    title: 'Information about saved data by sports'
  }),
  computed: {
    ...mapGetters('main/sport', [
      'getSports'
    ])
  },
  mounted () {
    this.DATA_SPORT()
  },
  methods: {
    ...mapActions('main/sport', [
      'DATA_SPORT'
    ])
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5625rem !important;
  margin-bottom: 10px;
}
.info-data {
  padding: 40px 0;
  background-color: #F5F5F5;
}
.icon {
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.87);
}
.card-value {
  color: #EA2845;
  font-size: 20px;
}
.card-descr {
  color: #232528;
  font-size: 14px;
}
.v-card__title {
  font-size: 1.1rem;
}
@media (max-width: 600px) {
  .card-value {
    font-size: 28px;
  }
}
</style>
