<template>
  <v-app id="withBg">
   <v-container>
       <v-row>
           <v-col>
              <v-text class="text-h2 yellow">
                  Editing members
              </v-text>
               <member></member>
           </v-col>
           <v-col>
                <v-text class="text-h2 yellow">
                  Editing Trainers
              </v-text>
               <member></member>
           </v-col>
       </v-row>
      
   </v-container>
  </v-app>
</template>

<script>
import member from '@/components/member';
export default {
    components:{
        member
        
    }
}
</script>