<template>
  <fragment>
    <b-container fluid class="planets" v-if="planets">
      <b-row>
        <vue-glide
          :perView="3"
          gap="10"
          autoplay="true"
          keyboard="true"
          hoverpause="true"
          animationDuration="5000"
          rewind="true"
          bound="true"
          v-model="results"
        >
          <vue-glide-slide v-for="planet in results" :key="planet.name">
            <PlanetCard :planet="planet" />
          </vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">prev</button>
            <button data-glide-dir=">">next</button>
          </template>
        </vue-glide>
      </b-row>
    </b-container>
    <div class="text-center spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </fragment>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import PlanetCard from "../Planets/PlanetCard";
import DataService from "../../services/DataServices";
export default {
  name: "PopularPlanets",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    PlanetCard
  },
  data() {
    return {
      planets: "",
      results: [],
      loading: false
    };
  },
  methods: {},
  async created() {
    let url = "/api/planets";
    let data = await DataService.getPosts(url);
    this.planets = data;
    this.results = data.results.slice(0, 6);
  }
};
</script>

<style scoped>
.planets {
  width: 70%;
}
.planet--image {
  width: 100%;
}
.image-text {
  color: white;
  position: relative;
  bottom: 100px;
  font-size: 2em;
}
</style>
