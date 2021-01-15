<template>
  <v-col
    cols="12"
    lg="4"
    sm="6"
  >
    <v-card>
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
        <div class="post-description">
          {{ post.description }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          color="primary"
          @click="openPost"
        >
          Read More..
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AppPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost () {
      const slug = this.post.slug
      this.$router.push(`/news/${slug}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-description {
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
