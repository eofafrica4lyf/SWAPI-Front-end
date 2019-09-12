<template>
  <div class="main">
    <div class="home">
      <Header />
      
      <h1 class="after-header">Popular Starships</h1>
      <p center class="heading-underline"></p>
      <PopularStarships />

      <h1 class="after-header">Popular Planets</h1>
      <p center class="heading-underline"></p>
      <PopularPlanets />

      <h1 id="after-header">Popular Characters</h1>
      <p center class="heading-underline"></p>
      <PopularCharacters />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import PopularStarships from "@/components/Starships/PopularStarships.vue";
import PopularCharacters from "@/components/Characters/PopularCharacters.vue";
import Header from "../components/Header";
import PopularPlanets from "../components/Planets/PopularPlanets"
export default {
  name: "home",
  components: {
    Header,
    PopularStarships,
    PopularCharacters,
    PopularPlanets
  },
  data() {
    return {
      active: 4
    };
  }
};
</script>

<style scoped>
/* .home {
  margin-top: 5em;
} */
.heading-underline {
  width: 200px;
  border-bottom: 8px solid black;
  padding: 0px 4px 9px;
  display: inline-block;
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
