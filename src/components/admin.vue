<template>
  <v-app>
   <v-container>
       <v-row>
           <v-col>
               <member></member>
           </v-col>
           <v-col>
               <member></member>
           </v-col>
       </v-row>
   </v-container>
  </v-app>
</template>

<script>
import member from '@/components/member';
import Member from './member.vue';
export default {
    components:{
        member
        
    }
}
</script>