<template>
  <fragment>
    <b-container fluid class="characters" v-if="characters">
      <b-row>
        <b-col sm="12" md="12" lg="12" class="character-card">
          <div class="filter-character">
            <b-form-select v-model="selected_filter" v-on:change="getFilteredData" class="mb-3">
              <option :value="null">Please select an option</option>
              <option value="Luke">Male</option>
              <option value="Anakin">Female</option>
              <option value="Leia">Robot</option>
            </b-form-select>
          </div>
        </b-col>
        <CharacterCard
          v-bind:key="character.name"
          v-for="character in results"
          :character="character"
        />
      </b-row>
    </b-container>
    <div class="text-center spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-button-group size="lg" class="mx-1 paginate">
      <p>{{((this.currentPage - 1) * 10) + 1}}-{{((this.currentPage - 1) * 10) + results.length}} of {{this.totalCount}}&nbsp;</p>
      <b-button id="previous" v-on:click="getPreviousPage"><</b-button>
      <b-button id="next" v-on:click="getNextPage">></b-button>
    </b-button-group>
  </fragment>
</template>

<script>
import CharacterCard from "../Characters/CharacterCard";
import { Fragment } from "vue-fragment";
import DataService from "../../services/DataServices";
export default {
  name: "Characters",
  components: {
    CharacterCard,
    Fragment
  },
  data() {
    return {
      characters: "",
      results: [],
      loading: false,
      currentPage: 1,
      totalCount: 0,
      selected_filter: "null"
    };
  },
  methods: {
    async getFilteredData() {
      let url = "/api/people?search=" + this.selected_filter;
      // let url = "/api/people";
      let data = await DataService.getPosts(url);
      console.log("data", data);
      this.characters = data;
      this.results = data.results;
      return;
    },
    async getNextPage() {
      if (this.currentPage === Math.ceil(this.totalCount / 10)) {
        return;
      }
      this.loading = true;
      let url = this.characters.next.split("https://swapi.co")[1];
      let data = await DataService.getPosts(url);
      // let urlArray = url.split("");
      this.characters = data;
      this.results = data.results;
      this.currentPage = Number(url[url.length - 1]);
      this.totalCount = data.count;
      this.loading = false;
      return;
    },
    async getPreviousPage() {
      if (this.currentPage === 1) {
        return;
      }
      this.loading = true;
      let url = this.characters.previous.split("https://swapi.co")[1];
      console.log("url", url);

      let data = await DataService.getPosts(url);
      this.characters = data;
      this.results = data.results;
      this.currentPage = Number(url[url.length - 1]);
      this.totalCount = data.count;
      this.loading = false;
      return;
    }
  },
  async created() {
    let url;
    console.log(this.$route.query, Object.keys(this.$route.query).length);

    if (Object.keys(this.$route.query).length !== 0) {
      // eslint-disable-next-line
      console.log(this.$route.query, Object.keys(this.$route.query));
      url = "/api/people?search=" + this.$route.query.query;
    } else {
      url = "/api/people";
    }
    try {
      let data = await DataService.getPosts(url);
      this.characters = data;
      this.results = data.results;
      this.currentPage = 1;
      this.totalCount = data.count;
      // this.$route.query = {};
      return;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      this.$router.push({
        path: "/people"
      });
    }
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
.paginate p {
  line-height: 29px;
  margin-top: 0.6em;
  margin-bottom: 0.5em;
}
.paginate button {
  color: black;
  background-color: white;
  border-width: 2px;
  font-weight: 900;
  font-size: 1em;
}
.paginate #previous {
  border-radius: 5px 0px 0px 5px;
}
.paginate #next {
  border-radius: 0px 5px 5px 0px;
}
.filter-character {
  display: block;
  border-radius: 5px;
  width: 250px;
}
.filter-character select {
  border: 2px solid black;
}
#character-filter-dropdown {
  width: 50%;
}
</style>
