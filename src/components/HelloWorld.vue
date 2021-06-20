<template>
 <!--  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div> -->

   <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn small disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
