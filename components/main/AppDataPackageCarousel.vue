<template>
  <section class="data-package">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="data-package__items">
            <div class="data-package__top-item">
              <h2 class="data-package__title">
                {{ sport }} data packages
              </h2>
              <h3 class="data-package__subtitle">
                {{ subtitle }}
              </h3>
            </div>
            <div class="data-package__bottom-item">
              <v-btn
                link
                color="accent"
                tile
                x-large
                to="/sport/soccer"
              >
                Go to {{ sport }} page
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-carousel
            height="300"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div v-if="item.title" class="carousel-title">
                {{ item.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AppDataPackageCarousel',
  data: () => ({
    subtitle: 'Historical odds and results',
    sport: 'Soccer',
    items: [
      {
        src: 'images/slider.jpg',
        title: 'Pinnacle data packages'
      },
      {
        src: 'images/slider.jpg',
        title: '1XBET data packages'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.data-package {
  padding: 35px 0;
}
.data-package__items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.data-package__title {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
.data-package__subtitle {
  font-size: 1.625rem;
  font-weight: 400;
}
.carousel-title {
  font-size: 1.25rem;
  color: #fff;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  padding: 10px;
  width: 100%;
  z-index: 1;
}
@media (max-width: 600px) {
  .data-package__top-item {
    margin-bottom: 20px;
  }
}
</style>
