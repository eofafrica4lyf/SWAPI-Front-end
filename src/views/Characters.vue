<template>
  <div class="main">
    <div class="characterss">
      <Header />
      <Characters />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from "@/components/Characters/Characters.vue";
import Header from "../components/Header";
export default {
  name: "characters",
  components: {
    Header,
    Characters
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
