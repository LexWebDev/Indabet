<template>
  <section class="header_wrap text-center">
    <v-container>
      <h1 class="header_title">
        {{ sport.name }} Historical Data and Results
      </h1>
      <div class="line" />
      <div class="description">
        Start analyze sports events using historical data
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppDataHeader',
  props: {
    sport: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  background-color: #31a767;
  padding: 70px 0 100px;
  color: #fff;
}
.line {
  border-top: 1px solid #fff;
  width: 30%;
  margin: 30px auto;
}
.header_title {
  font-size: 2.25rem;
}
.description {
  font-size: 1.5rem;
}
</style>
