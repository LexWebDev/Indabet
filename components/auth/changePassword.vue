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
            <v-toolbar-title>Change Password</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
            >
              <div class="text-center">
                Please enter your new password
              </div>
              <v-text-field
                v-model="password"
                :rules="[rules.password]"
                required
                label="New password"
                name="newPassword"
                prepend-icon="mdi-lock-open"
                type="password"
              />
              <v-text-field
                v-model="confirm_password"
                :rules="[rules.password]"
                :error="!validConfirm()"
                required
                label="Confirm Password"
                name="ConfirmPassword"
                prepend-icon="mdi-lock-open"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              block
              @click="Submit"
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
  name: 'ChangePassword',
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
    confirm_password: '',
    rules: {
      required: valid => !!valid || 'Required',
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
    console.log(this.$route.query.code)
  },
  methods: {
    hide_alert () {
      window.setInterval(() => {
        this.alertArr[0].alertLogin = false
        this.alertArr[1].alertLogout = false
      }, 3000)
    },
    async Submit () {
      if (this.valid) {
        this.loading = true
        try {
          const formData = {
            newPassword: this.password,
            passwordToken: this.$route.query.code
          }
          await this.$store.dispatch('auth/PROFILE_POST_PASSWORD', formData)
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

<style lang="scss" scoped>
.text-enter {
  color: #000 !important;
  font-size: 20px;
}
</style>
