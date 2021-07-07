<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-link to="/user">Go to User</router-link> -->
 
 <router-view/>
  </div>
  
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
}
#withBg {
     padding-top:20px ;
      padding-bottom:20px ;
  background: url(assets/bg.jpg) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>
