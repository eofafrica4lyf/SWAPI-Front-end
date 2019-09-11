<template>
  <div class="main">
    <div class="home">
      <Header />
      <h1 class="after-header">Popular Planets</h1>
      <p center class="heading-underline"></p>
      <PopularStarships />
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
export default {
  name: "home",
  components: {
    Header,
    PopularStarships,
    PopularCharacters
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
</style>
