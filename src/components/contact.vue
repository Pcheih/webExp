<template>
      <div class="text-center">
      <v-bottom-sheet
      class="mt-20"
        v-model="sheet"
        persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Persistent
          </v-btn>
        </template>
        <v-sheet
          class="text-center"
          height="400px"
        >
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <v-container class="py-3" mx-auto>
            <v-row>
            <v-col class="text-h4">
              FE-Devloper
            </v-col>

           
            </v-row>
              <v-row>
            <v-col class="text-h6">
              Contact Or Pay
            </v-col>

           
            </v-row>
            <v-row>
               <img class="mx-auto" height="200px" src="../assets/wx.jpg" alt="">
            </v-row>
             
           
          </v-container>
        </v-sheet>
      </v-bottom-sheet>
    </div>

</template>

<script>
export default {
    
    data: () => ({
    sheet: false,
  }),
}
</script>