<template>
<div>
   
<v-app id="withBg" >
     
    <v-card
      class="mx-auto"
      width="1000"
      
    >
     <carousel></carousel>
      <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="40%"
      ></v-img> -->
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
       <kaluli></kaluli>
    </v-card>
   
  </v-app>
</div>
    
</template>

<script>
import carousel from '@/components/carousel.vue'
import kaluli from '@/components/kaluli.vue'


export default {
    components:{
        carousel,
        kaluli
        },
     data: () => ({
    show: false,
  }),
}
</script>

<style>
#withBg{
    background: url(../assets/bg.jpg) no-repeat;
     background-size: cover;     
     -webkit-background-size: cover;
     -o-background-size: cover;
     background-position: center 0;
}
</style>