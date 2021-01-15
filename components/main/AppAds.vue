<template>
  <div class="ads__block">
    <v-container>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
          md="8"
        >
          <a
            :href="linkTo"
            target="_blank"
          >
            <v-img :src="imageSrc" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AppAds',
  props: {
    linkTo: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
