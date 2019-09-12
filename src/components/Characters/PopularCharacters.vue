<template>
  <fragment>
    <b-container fluid class="characters" v-if="characters">
      <b-row>
        <CharacterCard
          v-bind:key="character.name"
          v-for="character in results"
          :character="character"
        />
      </b-row>
      <div class="text-center spinner2" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <div class="more-characters" v-else v-on:click="getMore">
        <button>View More</button>
      </div>
    </b-container>
    <div class="text-center spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </fragment>
</template>

<script>
import CharacterCard from "@/components/Characters/CharacterCard";
import { Fragment } from "vue-fragment";
import DataService from "../../services/DataServices";
export default {
  name: "PopularCharacters",
  components: {
    CharacterCard,
    Fragment
  },
  data() {
    return {
      characters: "",
      results: [],
      loading: false
    };
  },
  methods: {
    async getMore() {
      if (this.characters.next == null) {
        return;
      }
      this.loading = true;
      let url = this.characters.next.split("https://swapi.co")[1];

      let data = await DataService.getPosts(url);
      this.characters = data;
      this.results = [...this.results, ...data.results];
      this.loading = false;
    }
  },
  async created() {
    let url = "/api/people";
    let data = await DataService.getPosts(url);
    this.characters = data;
    this.results = data.results.slice(0, 4);
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
.spinner .spinner-border {
  margin: 10em;
}
.spinner2 .spinner-border {
  margin: 4em;
}
</style>
