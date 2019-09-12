<template>
  <b-col sm="12" md="12" lg="4" class="planet-card" v-bind:planet="planet">
    <router-link class="read-more" v-bind:to="planet.url.split('https://swapi.co/api')[1]">
      <b-img
        :src="`/assets/images/planet-${Math.ceil(Math.random() * 3)}.jpg`"
        left
        alt="Star Wars Logo"
        class="planet--image"
      ></b-img>
      <div class="image-text">
        <span>
          {{planet.name}}
          <br />
        </span>
        <span>
          Climate: {{planet.climate}}
          <br />
        </span>
        <span>Population: {{planet.population}}</span>
      </div>
    </router-link>
  </b-col>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  name: "PlanetsPageCard",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  props: ["planet"]
};
</script>


<style scoped>
.planet--image {
  width: 100%;
}
.image-text {
  color: white;
  position: relative;
  bottom: 100px;
  font-size: 1em;
  text-align: center;
}
.planet-card {
  /* position: relative; */
  padding: 0px;
  margin-bottom: 3em;
  margin-top: 3em;
  text-align: left;
  width: 350px;
  height: 350px;
  padding: 1em 1em;
}
.planet-card .inner-card {
  width: 350px;
  margin: auto;
}
.planet-card .card-title {
  font-size: 2em;
}
.planet-card .card-text {
  font-size: 0.9em;
}
.planet-card .btn {
  /* text-align: right; */
  display: block;
  margin-left: auto;
  border-radius: 0px;
  padding: 7px 26px;
  background-color: #c5c5c5;
  border: none;
}
.planet-card .btn:hover {
  background-color: #000000;
}
.planet-card-image {
  height: 250px;
  width: 350px;
  /* height: 350px;
    width: 350px; */
  object-fit: cover;
}
/* .planet--image {
  height: 100%;
  width: 350px;
} */
.planet--card-body {
  background-color: #c5c5c5;
  font-size: 0.8em;
  padding-bottom: 0.7em;
  width: 350px;
}
.planet--card-body p {
  font-size: 1.2em;
}
.planet--card-body .inner {
  background-color: #eee;
  margin-left: 0.7em;
  padding: 2em;
  width: 350px;
  height: 190px;
}
svg#right-arrow {
  font-size: 0.7em;
}
p.s-model {
  margin-top: -20px;
}
a.read-more {
  text-decoration: none;
}
</style>
