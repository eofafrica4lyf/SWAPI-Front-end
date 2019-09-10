<template>
  <div class="main">
    <div class="starships">
      <Header />
      <Starships />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Starships from "@/components/Starships/Starships.vue";
import Header from "../components/Header";
export default {
  name: "starships",
  components: {
    Header,
    Starships
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
