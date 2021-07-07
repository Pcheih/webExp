<template>
  <div>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Sports-Calorie</v-toolbar-title>
      </v-toolbar>
    
      <v-tabs vertical>
        <v-tab>
          <v-icon left> mdi-run-fast </v-icon>
          run
        </v-tab>
        <v-tab>
          <v-icon left> mdi-swim </v-icon>
          swim
        </v-tab>
        <v-tab>
          <v-icon left> mdi-dumbbell </v-icon>
          dumbbell
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
               250kcal/h

            </v-card-title>
            <v-card-text>
            
             <p>
                 Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).[1] This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting.
             </p>
            
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
               <v-card-title>
               400kcal/h

            </v-card-title>
            <v-card-text>
              <p>
               Swimming is the self-propulsion of a person through water, or a liquid substance, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body. Humans can hold their breath underwater and undertake rudimentary locomotive swimming within weeks of birth, as a survival response.
              </p>

              <p>
              Swimming is consistently among the top public recreational activities, and in some countries, swimming lessons are a compulsory part of the educational curriculum. As a formalized sport, swimming features in a range of local, national, and international competitions, including every modern Summer Olympics.
              </p>

            
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
               <v-card-title>
               114514cal/h

            </v-card-title>
            <v-card-text>
              <p>
                Fixed-weight dumbbells are weights created in a dumbbell shape. Inexpensive varieties consist of cast iron, sometimes coated with rubber or neoprene for comfort, and even cheaper versions consist of a rigid plastic shell that is filled with concrete.
              </p>

              <p>
               Adjustable dumbbells consist of a metal bar whose centre portion is often engraved with a crosshatch pattern (knurling) to improve grip. Weight plates are slid onto the outer portions of the dumbbell and secured with clips or collars. Shown to the right is a "spinlock" dumbbell, whose ends are threaded to accept large nuts as collars. Alternatively, a dumbbell may have smooth ends with plates being secured by a sprung collar.
              </p>

            </v-card-text>
          </v-card>
        </v-tab-item>
       
      </v-tabs>
      
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      text: "hhh",
    };
  },
};
</script>