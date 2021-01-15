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
          <span class="headline">Password Change</span>
        </v-card-title>
        <v-card-subtitle class="agree-text">
          <span>New password will be sent to your mail, do you agree?</span>
        </v-card-subtitle>
        <v-card-actions>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-btn
                  color="primary"
                  block
                  @click="onSubmit"
                >
                  Send Password
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  color="primary"
                  block
                  @click="closeDialog()"
                >
                  Cancel
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ModalPassword',
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState('auth', [
      'dataUser'
    ]),
    email: {
      set (email) {
        this.setDataUser({ email })
      },
      get () {
        return this.dataUser.email
      }
    }
  },
  mounted () {
    this.PROFILE()
  },
  methods: {
    ...mapActions('auth', [
      'PROFILE', 'setDataUser'
    ]),
    closeDialog () {
      let dialog = this.dialog
      dialog = false
      this.$emit('close', dialog)
    },
    async onSubmit () {
      try {
        const query = {
          redirect: `${process.env.baseUrl}/account/change-password`,
          email: this.email
        }
        await this.$store.dispatch('auth/PROFILE_GET_PASSWORD', query)
      } catch (e) {
        this.loading = false
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
.agree-text {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
}
</style>
