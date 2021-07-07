<template>
  <v-app id="withBg">
    <v-card width="600" class="mx-auto">
      <kaluli></kaluli>

      <v-card-actions class="mt-5" @click="show = !show">
        <v-btn color="orange lighten-2" text> Details </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-container v-show="show"  class="mx-auto">
        <v-card-text class="mx-auto px-auto" >  
              <v-chip
              class="my-5"
              close
  close-icon="mdi-calendar-clock"
  color="blue"
  label
  outlined
>Choose your time</v-chip>
          <v-chip-group
            class="ml-8"
            
          
            center-active
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
        
            <v-chip>2:00PM</v-chip>
            <v-chip>3:00PM</v-chip>
            <v-chip>5:30PM</v-chip>
            <v-chip>7:30PM</v-chip>
            <v-chip>8:00PM</v-chip>
            <v-chip>8:30PM</v-chip>
          </v-chip-group>
        </v-card-text>
<v-chip
              class="my-5"
              close
  close-icon="mdi-emoticon-devil"
  color="orange"
  label
  outlined
>Choose your Coach</v-chip>
        <coach></coach>
        <contact class="mt-10" v-show="selection"></contact>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import kaluli from "@/components/kaluli.vue";
import coach from "@/components/coach.vue";
import contact from "@/components/contact.vue";
export default {
  components: { kaluli, coach, contact },
  data: () => ({
    show: false,
    selection: null,
  }),
};
</script>