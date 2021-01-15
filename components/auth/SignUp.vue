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
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="firstname"
                required
                label="Firstname"
                name="Firstname"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                v-model="lastname"
                required
                label="Lastname"
                name="Lastname"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                required
                label="E-mail"
                name="email"
                prepend-icon="mdi-email"
                type="email"
              />

              <v-text-field
                id="password"
                v-model="password"
                :rules="[rules.password]"
                required
                label="Password"
                name="password"
                prepend-icon="mdi-lock-open"
                type="password"
              />
              <v-text-field
                id="ConfirmPassword"
                v-model="confirm_password"
                :rules="[rules.password]"
                :error="!validConfirm()"
                required
                label="Confirm Password"
                name="ConfirmPassword"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              link
              to="/account/login"
            >
              Login
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              @click="Register"
            >
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SignUpForm',
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
    displayLogin: false,
    displaySignUp: false,
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    confirm_password: '',
    rules: {
      required: valid => !!valid || 'Required',
      email: (valid) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(valid) || 'Invalid e-mail.'
      },
      password: (valid) => {
        const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/
        return pattern.test(valid) || 'Password must be valid.'
      }
    }
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
    async Register () {
      if (this.valid) {
        this.loading = true
        try {
          const formData = {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            password: this.password
          }
          await this.$store.dispatch('auth/SIGNUP', formData)
          await this.$router.push('/account/login')
        } catch (e) {
          this.loading = false
        }
      }
    },
    validConfirm () {
      return this.password === this.confirm_password
    }
  }
}
</script>

<style scoped>

</style>
