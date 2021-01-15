<template>
  <v-list dense>
    <v-list-item
      v-for="(item, i) in menuItems"
      :key="i"
      :to="item.to"
      link
      exact
    >
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {
        title: 'Home',
        icon: 'mdi-account',
        to: '/account'
      },
      {
        title: 'Settings',
        icon: 'mdi-account-cog',
        to: '/account/settings'
      },
      {
        title: 'Logout',
        icon: 'mdi-logout',
        to: '/account/logout'
      }
    ]
  })
}
</script>
