<template>
  <v-card
    class="card"
    flat
  >
    <v-form ref="form">
      <v-row>
        <v-col sm="6" cols="12">
          <v-text-field
            v-model="fName"
            outlined
            label="Firstname"
          />
          <v-text-field
            v-model="lName"
            outlined
            label="Lastname"
          />
        </v-col>
        <v-col sm="6" cols="12">
          <v-text-field
            v-model="email"
            outlined
            readonly
            :append-icon="'mdi-lead-pencil'"
            label="Email"
            @click:append="openEmailModal = true"
          />
          <v-sheet>
            <v-switch
              v-model="subOnNews"
              inset
              label="Subscribe to news"
            />
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <v-btn
            color="primary"
            width="200px"
            @click="onSubmit"
          >
            Save Changes
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          class="text-center"
        >
          <v-btn
            color="primary"
            width="200px"
            outlined
            @click="openPasswordModal = true"
          >
            Change Password
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <modal-email
      :dialog="openEmailModal"
      @close="updateEmailDialog"
    />
    <modal-password
      :dialog="openPasswordModal"
      @close="updatePasswordDialog"
    />
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import ModalEmail from '@/components/account/modalEmail'
import ModalPassword from '@/components/account/modalPassword'

export default {
  components: { ModalPassword, ModalEmail },
  layout: 'account',
  middleware: ['account-auth'],
  data: () => ({
    openEmailModal: false,
    openPasswordModal: false
  }),
  computed: {
    ...mapGetters('auth', [
      'getDataUser'
    ]),
    ...mapState('auth', [
      'dataUser'
    ]),
    fName: {
      set (firstName) {
        this.setDataUser({ firstName })
        // this.$store.commit('setDataUser', { firstName })
      },
      get () {
        return this.dataUser.firstName
      }
    },
    lName: {
      set (lastName) {
        this.setDataUser({ lastName })
      },
      get () {
        return this.dataUser.lastName
      }
    },
    email: {
      set (email) {
        this.setDataUser({ email })
      },
      get () {
        return this.dataUser.email
      }
    },
    subOnNews: {
      set (subscribeNews) {
        this.setDataUser({ subscribeNews })
      },
      get () {
        return this.dataUser.subscribeNews
      }
    }
  },
  mounted () {
    this.PROFILE()
  },
  methods: {
    ...mapActions('auth', [
      'PROFILE', 'setDataUser', 'PROFILE_POST'
    ]),
    updateEmailDialog (dialog) {
      this.openEmailModal = dialog
    },
    updatePasswordDialog (dialog) {
      this.openPasswordModal = dialog
    },
    async onSubmit () {
      try {
        const formData = {
          firstName: this.fName,
          lastName: this.lName,
          subscribeNews: this.subOnNews
        }
        await this.PROFILE_POST(formData)
      } catch (e) {
        // this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  overflow: hidden;
}
.radio {
  margin-top: 0;
  padding-top: 4px;
}
</style>
