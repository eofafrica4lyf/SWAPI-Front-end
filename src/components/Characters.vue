<template>
  <b-container fluid class="characters">
    <b-row >
      <CharacterCard v-bind:key="character.name" v-for="character in characters" :character="character"/>
    </b-row>
    <div class="more-characters">
      <button>View More</button>
    </div>
  </b-container>
</template>

<script>
import CharacterCard from "@/components/CharacterCard";
import axios from "axios";
export default {
  name: "Characters",
  components: {
    CharacterCard
  },
  data() {
    return {
      characters: []
    };
  },
  // data() {
  //   return {
  //     slide: 0,
  //     sliding: null
  //   };
  // },
  methods: {
    // onSlideStart(slide) {
    //   this.sliding = true;
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false;
    // }
  },
  created() {
    axios
      .get("/api/people")
      .then(res => {
        this.characters = res.data.results;
        // eslint-disable-next-line
        console.log(this.characters);
        return this.characters;
      })
      .catch(err =>
        // eslint-disable-next-line
        console.log(err.message)
      );
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
.planet .card-title {
  position: relative;
  bottom: -260px;
}
</style>
