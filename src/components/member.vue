<template>
  <v-app>
    <v-container fluid>
      <v-row justify="space-around">
        <v-btn @click="add" color="primary" elevation="4">ADD</v-btn>
        <v-btn @click="del" color="red" elevation="4">DELETE</v-btn>
      </v-row>
      <v-row justify="center">
        <!--  <v-subheader>Good day</v-subheader> -->
       
          <v-expansion-panels popout v-for="index of ListNum" :key="index">
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      />
                      <v-icon
                        v-else
                        :color="message.color"
                        v-text="message.icon"
                      ></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="3">
                    <strong v-html="message.name"></strong>
                    <span v-if="message.total" class="grey--text">
                      &nbsp;({{ message.total }})
                    </span>
                  </v-col>

                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <v-chip
                      v-if="message.new"
                      :color="`${message.color} lighten-4`"
                      class="ml-0 mr-2 black--text"
                      label
                      small
                    >
                      {{ message.new }} new
                    </v-chip>
                    <strong v-html="message.title"></strong>
                  </v-col>

                  <v-col
                    v-if="message.excerpt"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ message.excerpt }}
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    add() {
        if(this.ListNum>10){
alert("you can only have ten members")
return 
        }
       
      this.ListNum++;
    },
    del() {
        if(this.ListNum<=0)
        return
      this.ListNum--;
    },
  },
  data: () => ({
    ListNum: 1,
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to 下北沢!",
        excerpt: "",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>