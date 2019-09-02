<template>
  <b-container fluid class="characters">
    <b-row>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <div class="more-characters">
        <button>View More</button>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import CharacterCard from "@/components/CharacterCard";
export default {
  name: "Characters",
  components: {
    CharacterCard
  }
};
</script>

<style scoped>
.characters {
  width: 70%;
  margin-bottom: 4em;
}
.more-characters {
  margin-top: 8em;
  margin: auto;
  text-align: center;
  width: 50%;
}
.more-characters button {
  border: 3px solid black;
  width: 100%;
  max-width: 400px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  border-radius: 5px;
}
/* .planet .card-title {
  position: relative;
  bottom: -260px;
} */
</style>
