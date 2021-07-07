<template>
<div>
   
<v-app id="withBg" >
     
    <v-card
        img="../ssadsa"
      class="mx-auto mt-10"
      width="600"
        
    >
     <carousel></carousel>
    
     <v-card class="mt-10"
              color="#385F73"
              dark
            >
              <v-card-title class="text-h4">
                下北沢 
              </v-card-title>
                The best fitness room in SZU</v-card-subtitle>
  
              <v-card-actions>
                <v-btn text>
                  Fit you Now
                </v-btn>
              </v-card-actions>
            </v-card>

     
  
      <v-card-actions class="mt-5"  @click="show = !show">
        <v-btn
          color="orange lighten-2"
          text
          
        >
          Explore Fitness Wiki!
          
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition >
        <div v-show="show">
          <v-divider></v-divider>
          <kaluli></kaluli>
<!--   
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text> -->
        </div>
      </v-expand-transition >
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