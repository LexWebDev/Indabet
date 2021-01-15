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
          v-model="alert"
          type="success"
          transition="slide-y-transition"
        >
          Success! Please check your e-mail!
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Forgot Password</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
            >
              <div class="text-center">
                Please enter your email to recover your password
              </div>
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                required
                label="E-mail"
                name="email"
                prepend-icon="mdi-email"
                type="email"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              block
              @click="onSubmit"
            >
              Reset Password
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ResetPassword',
  data: () => ({
    loading: false,
    alert: false,
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
    email: '',
    rules: {
      required: valid => !!valid || 'Required',
      email: (valid) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(valid) || 'Invalid e-mail.'
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
        this.alert = false
        this.alertArr[0].alertLogin = false
        this.alertArr[1].alertLogout = false
      }, 5000)
    },
    async onSubmit () {
      if (this.valid) {
        this.loading = true
        try {
          const query = {
            redirect: `${process.env.baseUrl}/account/change-password`,
            email: this.email
          }
          await this.$store.dispatch('auth/PROFILE_GET_PASSWORD', query)
          this.alert = true
          this.hide_alert()
          this.loading = false
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-enter {
  color: #000 !important;
  font-size: 20px;
}
</style>
