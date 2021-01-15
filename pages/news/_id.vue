<template>
  <div class="post">
    <v-container>
      <v-row>
        <v-container>
          <v-card
            max-width="900"
            class="mx-auto"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{ post.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon>mdi-clock-outline</v-icon>
                  {{ $moment.unix(post.createdAt).format("MMMM D, YYYY") }}
                  at
                  {{ $moment.unix(post.createdAt).format("h:mm A") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <div class="content">
                {{ post.info }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                exact
                color="primary"
                to="/news"
              >
                Back To News
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return Boolean(params.id)
  },
  async asyncData ({ store, params }) {
    const post = await store.dispatch('news/post/FETCH_BY_ID', params.id)
    return { post }
  }
}
</script>

<style lang="scss" scoped>
.content {
  color: #000;
}
</style>
