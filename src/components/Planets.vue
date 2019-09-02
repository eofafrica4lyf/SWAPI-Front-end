<template>
  <b-container fluid class="planets">
    <b-row>
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <div class="more-characters">
        <button>View More</button>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import PlanetCard from "../components/PlanetCard";
export default {
  name: "Planets",
  components: { PlanetCard }
};
</script>

<style>
.planets {
  /* padding: 5em 10em; */
  width: 70%;
  margin-bottom: 4em;
}
.more-characters {
  margin: auto;
  text-align: center;
}
.more-characters button{
  border: 3px solid black;
  padding: 5px 190px;
  outline: none;
}
</style>
