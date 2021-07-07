<template>
  
    <v-container fluid>
      <v-row justify="space-around" class="my-10">
        <v-btn @click="add" color="primary" elevation="4">ADD</v-btn>
        <v-btn @click="del" color="red" elevation="4">DELETE</v-btn>
      </v-row>
      <v-row justify="center">
      

        <v-expansion-panels
          popout
          v-for="index of ListNum"
          :key="index"
          class="my-2"
        >
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="3" sm="2">
                  <v-avatar size="36px" class="mb-5 ">
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    />
                  </v-avatar>
                </v-col>

                <v-col cols="5" sm="4">
                  <v-text-field
                    v-model="first"
                    label="First Name"
                    filled
                  ></v-text-field>
                </v-col>

                <v-col cols="5" sm="4">
                  <v-text-field
                    v-model="last"
                    label="Last Name"
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Text"
                :value="lorem"
              ></v-textarea>
              <!-- <v-card-text v-text="lorem"></v-card-text> -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
       <v-row class="mt-10" v-show="ListNum" justify="center">
           <v-btn @click="back" color="secondary" elevation="4">
               confirm
           </v-btn>
       </v-row>
    </v-container>
  
</template>

<script>
export default {
  methods: {
      back(){
          this.$router.push({path: '/'});
      },
    add() {
      if (this.ListNum > 10) {
        alert("you can only have ten members");
        return;
      }

      this.ListNum++;
    },
    del() {
      if (this.ListNum <= 0) return;
      this.ListNum--;
    },
  },
  data: () => ({
    ListNum: 1,
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to SZU!",
        excerpt: "",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>