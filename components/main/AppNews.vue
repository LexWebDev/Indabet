<template>
  <section class="news">
    <h2 class="title text-center" v-text="title" />
    <v-container>
      <v-row>
        <v-col
          v-for="post in getNews.slice(0, 3)"
          :key="post.id"
          sm="4"
          cols="12"
          class="mb-3 mb-md-0"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              nuxt
              shaped
              :elevation="hover ? 9 : 6"
              class="transition-swing"
              :to="`/news/${post.slug}`"
            >
              <v-card-title>
                <div class="news__item-title">
                  {{ post.name }}
                </div>
              </v-card-title>
              <v-card-text>
                <div class="news__item-descr">
                  {{ post.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row v-if="showmore()">
        <v-col cols="12" class="text-right">
          <v-btn
            color="accent"
            nuxt
            to="/news"
          >
            Look More
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppNews',
  data: () => ({
    title: 'News'
  }),
  computed: {
    ...mapGetters('main/news', [
      'getNews'
    ])
  },
  mounted () {
    this.FETCH()
  },
  methods: {
    ...mapActions('main/news', [
      'FETCH'
    ]),
    showmore () {
      if (this.getNews.length > 3) {
        return this.getNews
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  background-color: #F5F5F5;
  padding: 40px 0;
}
.title {
  font-size: 1.5625rem !important;
  margin-bottom: 30px;
}
</style>
