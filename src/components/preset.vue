<template>
<v-app>


  <v-row>
    hhh
  </v-row>

</v-app>
</template>

<script>
  export default {
     name: 'preset',
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
  }
</script>