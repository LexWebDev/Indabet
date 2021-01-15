<template>
  <section class="bookmakers">
    <h2 class="title text-center" v-text="title" />
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          md="3"
          sm="6"
        >
          <v-img
            :src="item.imgSrc"
            :alt="item.bkName"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppBookmakers',
  data: () => ({
    title: 'Bookmakers',
    items: [
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      },
      {
        bkName: 'bet365',
        imgSrc: 'images/bet365.jpg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.bookmakers {
  padding: 50px 0;
}
.title {
  font-size: 1.5625rem !important;
  margin-bottom: 10px;
}
</style>
