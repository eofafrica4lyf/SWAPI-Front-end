<template>
  <div id="app">
    <div id="nav">
      <div id="overlay">
        <a href="/">
          <b-img left :src="require('./assets/images/logo.png')" alt="Star Wars Logo" id="logo"></b-img>
        </a>

        <!-- <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>-->

        <b-container class="header-search-row">
          <b-row>
            <h1 id="intro-header">Star Wars Directory</h1>
            <p>Find your favorite Characters, Planets and Starships</p>
            <form>
              <div>
                <b-input-group>
                  <b-dropdown slot="prepend" text="Choose" variant="secondary" id="header-search-dropdown">
                    <b-dropdown-item>Character</b-dropdown-item>
                    <b-dropdown-item>Planet</b-dropdown-item>
                    <b-dropdown-item>Spaceship</b-dropdown-item>
                  </b-dropdown>

                  <b-form-input id="header-search-text-input"></b-form-input>

                  <b-input-group-append>
                    <b-button size="lg" text="Button" variant="dark" id="header-search-submit-button">Search</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </form>
          </b-row>
        </b-container>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style>
@font-face {
  font-family: “StarJedi”, sans-serif;
  src: url("./assets/fonts/Starjedi.ttf") format("ttf");
}
/* h1 {
  font-family: "StarJedi";
} */
h1 {
  font-size: 4em;
}
p {
  font-size: 2em;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-image: url("./assets/images/hero-banner.jpg");
  height: 800px;
}
#logo {
  width: 250px;
  padding: 50px;
  box-sizing: content-box;
}
#overlay {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
}
.header-search-row {
  clear: both;
  padding: 2em;
}
.header-search-row .row {
  display: block;
  color: white;
}
.header-search-row .row * {
  margin-bottom: 1em;
}
.header-search-row input,
.header-search-row button {
  height: 70px !important;
}
#intro-header {
  border-bottom: 4px white solid;
  padding: 0px 4px 9px;
  display: inline-block;
}
</style>
