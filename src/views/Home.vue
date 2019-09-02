<template>
  <div class="home">
    <h1>Popular Planets</h1>
    <p center class="heading-underline"></p>
    <Planets />
  </div>
</template>

<script>
// @ is an alias to /src
import Planets from "@/components/Planets.vue";

export default {
  name: "home",
  components: {
    Planets
  }
};
</script>

<style scoped>
.home {
  margin-top: 5em;
}
.heading-underline {
  width: 200px;
  border-bottom: 8px solid black;
  padding: 0px 4px 9px;
  display: inline-block;
  /* margin-bottom: 2em; */
}
</style>
