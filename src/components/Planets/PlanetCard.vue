<template>
  <fragment v-bind:planet="planet">
    <router-link class="read-more" v-bind:to="planet.url.split('https://swapi.co/api')[1]">
      <b-img
        :src="`/assets/images/planet-${Math.ceil(Math.random() * 3)}.jpg`"
        left
        alt="Star Wars Logo"
        class="planet--image"
      ></b-img>
      <div class="image-text">
        <span>{{planet.name}}<br></span>
        <span>Climate: {{planet.climate}}<br></span>
        <span>Population: {{planet.population}}</span>
      </div>
    </router-link>
  </fragment>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  name: "PlanetCard",
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
}
.glide__slide {
    width: 450px !important;
}
</style>
