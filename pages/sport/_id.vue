<template>
  <div class="data-result">
    <app-data-header
      :sport="sport"
    />
    <app-data-brief
      :sport="sport"
    />
    <app-subscribe />
  </div>
</template>

<script>
import AppDataHeader from '@/components/sport-data/AppDataHeader'
import AppDataBrief from '@/components/sport-data/AppDataBrief'
import AppSubscribe from '@/components/main/AppSubscribe'

export default {
  components: { AppSubscribe, AppDataBrief, AppDataHeader },
  validate ({ params }) {
    return Boolean(params.id)
  },
  async asyncData ({ store, params }) {
    const sport = await store.dispatch('sport-data/sport/FETCH_BY_ID', params.id)
    return { sport }
  }
}
</script>

<style lang="scss" scoped>

</style>
