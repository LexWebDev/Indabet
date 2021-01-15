<template>
  <section class="advantages">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="4"
          md
          class="mb-3 mb-md-0"
        >
          <div class="advantages__title">
            {{ item.title }}
          </div>
          <div class="advantages__descr">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppAdvantages',
  data: () => ({
    items: [
      {
        title: 'Bookmakers',
        description: 'Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers.'
      },
      {
        title: 'Odds Lines',
        description: 'Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers.'
      },
      {
        title: 'Seasons',
        description: 'Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers.'
      },
      {
        title: 'Updates',
        description: 'Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers.'
      },
      {
        title: 'File Formats',
        description: 'Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers. Available data from 25 bookmakers.'
      }
    ]
  })
}
</script>

<style scoped>
.advantages {
  padding: 40px 0;
  background-color: #F5F5F5;
}
.advantages__title {
  color: #232528;
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 700;
}
.advantages__descr {
  font-size: .8125rem;
  color: #5f6368;
}
</style>
