<template>
  <div class="news">
    <v-container>
      <v-row>
        <app-post
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppPost from '~/components/news/AppPost'
export default {
  components: { AppPost },
  async asyncData ({ store }) {
    const posts = await store.dispatch('news/post/FETCH')
    return { posts }
  }
}
</script>
