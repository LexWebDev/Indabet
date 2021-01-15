<template>
  <section class="info-sport">
    <h2 class="title text-center">
      Brief of {{ sport.name }} data
    </h2>
    <v-container>
      <v-row
        justify="center"
        class="text-center"
      >
        <v-col md="2" sm="4" cols="6">
          <span class="information__value">{{ sport.eventsStat | numberPerDigits }}</span>
          <span class="information__text" v-text="' / events'" />
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <span class="information__value">{{ sport.seasonsStat | numberPerDigits }}</span>
          <span class="information__text" v-text="' / seasons'" />
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <span class="information__value">{{ sport.oddsLinesStat | numberPerDigits }}</span>
          <span class="information__text" v-text="' / odds lines'" />
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <span class="information__value">{{ sport.leaguesStat | numberPerDigits }}</span>
          <span class="information__text" v-text="' / leagues'" />
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <span class="information__value">{{ sport.bookmakersStat | numberPerDigits }}</span>
          <span class="information__text" v-text="' / bookmakerts'" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="date">
            As of {{ $moment.unix(sport.updatedAt).format("MMM D") }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <div class="line" />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppDataBrief',
  filters: {
    numberPerDigits: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
  },
  props: {
    sport: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.info-sport {
  background-color: #F5F5F5;
  padding: 30px 0;
}
.title {
  font-size: 1.5625rem !important;
  font-weight: 400;
}
.information__value {
  font-size: 2rem;
  color: #ea4335;
}
.information__text {
  font-size: .75rem;
}
.date {
  text-align: right;
}
.line {
  border-bottom: 1px solid rgba(0,0,0,.3);
  width: 100%;
}
</style>
