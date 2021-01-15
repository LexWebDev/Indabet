<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-alert
          v-model="alertArr[0].alertLogin"
          type="info"
          transition="slide-y-transition"
        >
          {{ alertArr[0].infoLogin }}
        </v-alert>
        <v-alert
          v-model="alertArr[1].alertLogout"
          type="success"
          transition="slide-y-transition"
        >
          {{ alertArr[1].infoLogout }}
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                label="E-mail"
                name="email"
                prepend-icon="mdi-account"
                type="email"
              />

              <v-text-field
                id="password"
                v-model="password"
                :rules="passwordRules"
                required
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              nuxt
              to="/account/forgot-password"
            >
              Forgot your password?
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              @click="onSubmit"
            >
              Login
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              color="primary"
              link
              text
              to="/account/signup"
            >
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'LoginForm',
  data: () => ({
    loading: false,
    valid: false,
    alertArr: [
      {
        alertLogin: false,
        infoLogin: 'You need to login!'
      },
      {
        alertLogout: false,
        infoLogout: 'You have successfully logged out!'
      }
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(v) || 'Password must be valid'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  mounted () {
    const { message } = this.$route.query
    switch (message) {
      case 'auth-info':
        this.alertArr[0].alertLogin = true
        if (this.alertArr[0].alertLogin) {
          this.hide_alert()
        }
        break
      case 'logout-info':
        this.alertArr[1].alertLogout = true
        if (this.alertArr[1].alertLogout) {
          this.hide_alert()
        }
        break
    }
  },
  methods: {
    hide_alert () {
      window.setInterval(() => {
        this.alertArr[0].alertLogin = false
        this.alertArr[1].alertLogout = false
      }, 3000)
    },
    async onSubmit () {
      if (this.valid) {
        this.loading = true
        try {
          const formData = {
            email: this.email,
            password: this.password
          }
          await this.$store.dispatch('auth/LOGIN', formData)
          await this.$router.push('/account')
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
