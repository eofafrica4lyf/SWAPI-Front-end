<template>
  <b-container fluid class="starships" v-if="starships">
    <b-row>
      <StarshipCard v-for="starship in results" v-bind:key="starship.name" :starship="starship" />
    </b-row>
    <div class="text-center spinner2" v-if="loading">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div class="more-starships" v-on:click="getMore" v-else>
      <button>View More</button>
    </div>
  </b-container>
  <div class="text-center spinner" v-else>
    <b-spinner label="Spinning"></b-spinner>
  </div>
</template>

<script>
import StarshipCard from "../Starships/StarshipCard";
import DataService from "../../services/DataServices";
export default {
  name: "PopularStarships",
  components: { StarshipCard },
  data() {
    return {
      starships: "",
      results: [],
      loading: true,
      currentPage: 1,
      totalCount: 0,
      selected_filter: "null",
      pagination_control: true
    };
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1];
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1);
    },
    async getMore() {
      if (this.starships.next == null) {
        return;
      }
      this.loading = true;
      let url = this.starships.next.split("https://swapi.co")[1];

      let data = await DataService.getPosts(url);
      // eslint-disable-next-line
      this.starships = data;
      this.results = [...this.results, ...data.results.splice(0, 9)];
      this.loading = false;
    }
  },
  async created() {
    let url;

    if (Object.keys(this.$route.query).length !== 0) {
      url = "/api/starships?search=" + this.$route.query.query;
    } else {
      url = "/api/starships";
    }
    try {
      let data = await DataService.getPosts(url);
      this.starships = data;
      this.results = data.results.slice(0, 6);
      this.currentPage = 1;
      this.totalCount = data.count;
      this.loading = false;
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

<style>
.starships {
  width: 70%;
  margin-bottom: 4em;
}
.more-starships {
  margin-top: 8em;
  margin: auto;
  text-align: center;
  width: 50%;
}
.more-starships button {
  border: 3px solid black;
  width: 100%;
  max-width: 400px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  border-radius: 5px;
}
.spinner .spinner-border {
  margin: 10em;
}
.spinner2 .spinner-border {
  margin: 4em;
}
</style>
