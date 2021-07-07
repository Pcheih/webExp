<template>
  <div>
    <v-app id="withBg">
      <v-card img="../ssadsa" class="mx-auto mt-10" width="600">
        <carousel></carousel>
        <v-hover class="mb-10">
          <template v-slot:default="{ hover }">
            <v-card class="mt-10" color="#385F73" dark>
              <v-card-title class="text-h4"> SZU-FitnessRoom </v-card-title>
              <v-card-subtitle class="mt-2">
                The best fitness room in SZU(but also only)
              </v-card-subtitle>

              <v-card-actions>
                <v-btn text> Tap to Fit you Now </v-btn>
              </v-card-actions>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn href="https://szu.edu.cn">Tap to detail</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
            <login></login>
        <v-card-actions class="mt-5" @click="show = !show">
          <v-btn color="orange lighten-2" text> Explore Fitness Wiki! </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <kaluli></kaluli>
          </div>
        </v-expand-transition>
       

       <v-card-actions >
          <v-btn color="green lighten-2" text> 
              Location </v-btn>
</v-card-actions>
         
           <iframe width="600" height="200" class="mx-auto" src="/static/map.html"></iframe>
     
      </v-card>
      
     
    </v-app>
   
  </div>
  
</template>

<script>
import carousel from "@/components/carousel.vue";
import kaluli from "@/components/kaluli.vue";
import login from "@/components/login.vue";

export default {
  components: {
    carousel,
    kaluli,
    login
  },
  data: () => ({
    show: false,
  }),
  methods:{
      goPlayer(){
          this.$router.push({path: '/player'});
      }
  }
};
</script>

<style>

</style>