<template>
  <div class="main">
    <div class="planets">
      <Header />
      <Planets />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Planets from "@/components/Planets/Planets.vue";
import Header from "../components/Header";
export default {
  name: "planets",
  components: {
    Header,
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
}
</style>
