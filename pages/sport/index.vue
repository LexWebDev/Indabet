<template>
  <div class="sports">
    <v-container>
      <v-row>
        <app-sport
          v-for="(sport, i) in sports"
          :key="i"
          :sport="sport"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppSport from '~/components/sport-data/AppSport'
export default {
  components: { AppSport },
  async asyncData ({ store }) {
    const sports = await store.dispatch('sport-data/sport/FETCH')
    return { sports }
  }
}
</script>
