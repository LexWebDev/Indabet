<template>
  <v-col
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
          {{ sport.icon }}
        </v-icon>
        <span>Sport: {{ sport.name }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="6"
          >
            <div class="card-value">
              {{ sport.oddsLinesStat | numberPerDigits }}
            </div>
            <div class="card-descr" v-text="'odds lines'" />
          </v-col>
          <v-col
            cols="6"
          >
            <div class="card-value">
              {{ sport.eventsStat | numberPerDigits }}
            </div>
            <div class="card-descr" v-text="'events'" />
          </v-col>
          <v-col
            cols="6"
          >
            <div class="card-value">
              {{ sport.leaguesStat | numberPerDigits }}
            </div>
            <div class="card-descr" v-text="'leagues'" />
          </v-col>
          <v-col
            cols="6"
          >
            <div class="card-value">
              {{ sport.seasonsStat | numberPerDigits }}
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
          @click="openSport()"
        >
          Go to {{ sport.name }} page
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AppSport',
  filters: {
    numberPerDigits: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  },
  props: {
    sport: {
      type: Object,
      required: true
    }
  },
  methods: {
    openSport () {
      const slug = this.sport.slug
      this.$router.push(`/sport/${slug}`)
    }
  }
}
</script>

<style lang="scss" scoped>
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
