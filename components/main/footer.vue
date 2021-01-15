<template>
  <v-footer color="#fff" app class="footer">
    <v-row no-gutters align="center" justify="space-between">
      <v-col cols="12" sm="6">
        <div class="footer__items">
          <v-btn
            class="footer__item"
            link
            text
            to="/about"
            small
            exact
          >
            About Indatabet
          </v-btn>
          <v-btn
            class="footer__item"
            link
            text
            to="/about"
            small
          >
            Privacy
          </v-btn>
          <v-btn
            class="footer__item"
            link
            text
            to="/about"
            small
          >
            Term of use
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="footer__items-right">
          <v-btn
            class="footer__item"
            link
            text
            to="/about"
            small
          >
            Contact us
          </v-btn>
          <span class="footer__item">© Indatabet {{ new Date().getFullYear() }}</span>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #5F6368 !important;
}
.footer__item {
  color: #5F6368;
}
.footer__items-right {
  text-align: right;
}
span {
  font-size: 0.75rem;
  font-weight: 500;
}
@media (max-width: 600px) {
  .footer, .footer__items-right {
    text-align: center;
  }
}
</style>
