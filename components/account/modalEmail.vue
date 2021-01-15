<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
    >
      <v-card>
        <div class="close">
          <v-icon
            color="primary"
            @click="closeDialog()"
          >
            mdi-close
          </v-icon>
        </div>
        <v-card-title class="modal-title">
          <span class="headline">Change Email</span>
        </v-card-title>
        <v-form v-model="valid">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="oldEmail"
                    :rules="[rules.email]"
                    label="Enter your old email address"
                    placeholder="Old e-mail"
                    outlined
                    dense
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newEmail"
                    :rules="[rules.email]"
                    label="Enter a new email address"
                    placeholder="New e-mail"
                    outlined
                    dense
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    :rules="[rules.password]"
                    label="Enter your password"
                    placeholder="Password"
                    type="password"
                    outlined
                    dense
                    required
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              block
              :disabled="!valid"
              :loading="loading"
              @click="onSubmit"
            >
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ModalEmail',
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    oldEmail: '',
    newEmail: '',
    password: '',
    loading: false,
    valid: false,
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
  methods: {
    closeDialog () {
      let dialog = this.dialog
      dialog = false
      this.$emit('close', dialog)
    },
    async onSubmit () {
      if (this.valid) {
        try {
          this.loading = true
          const formData = {
            credentials: {
              email: this.oldEmail,
              password: this.password
            },
            changeEmail: this.newEmail
          }
          await this.$store.dispatch('auth/PROFILE_POST_EMAIL', formData)
          this.closeDialog()
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
.close {
  padding: 16px 24px 10px;
  text-align: right;
}
.modal-title {
  justify-content: center;
}
</style>
