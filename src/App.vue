<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


export default {
  name: "App",
  components: {
    // Header
  }
};
</script>

<style>
/* body {
  margin-top: -80px;
} */
@font-face {
  font-family: "StarJedi";
  src: url("/assets/fonts/Starjedi.ttf") format("truetype");
}
h1 {
  font-size: 2.5em;
}
.starjedi {
  font-family: "StarJedi";
}
p {
  font-size: 1.3em;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  margin-bottom: 4em;
}
* {
  outline: none;
}
.after-header{
  margin-top: 2em;
}
</style>
