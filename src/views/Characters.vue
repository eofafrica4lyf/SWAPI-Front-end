<template>
  <div class="home">
    <h1>Characters</h1>
    <p center class="heading-underline"></p>
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from "@/components/Characters.vue";

export default {
  name: "home",
  components: {
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
