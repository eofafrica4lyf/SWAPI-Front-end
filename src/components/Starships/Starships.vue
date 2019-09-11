<template>
  <fragment>
    <b-container fluid class="starships" v-if="!loading">
      <fragment v-if="results.length > 0">
        <h1 class="after-header">{{this.header}}</h1>
        <p center class="heading-underline"></p>
        <b-row>
          <StarshipCard
            v-for="starship in results"
            v-bind:key="starship.name"
            :starship="starship"
          />
        </b-row>
        <b-button-group size="lg" class="mx-1 paginate" v-if="pagination_control">
          <p>{{((this.currentPage - 1) * 10) + 1}}-{{((this.currentPage - 1) * 10) + results.length}} of {{this.totalCount}}&nbsp;</p>
          <b-button id="previous" v-on:click="getPreviousPage">&lsaquo;</b-button>
          <b-button id="next" v-on:click="getNextPage">&rsaquo;</b-button>
        </b-button-group>
      </fragment>

      <fragment v-else>
        <div class="not-found">
          <p>Not Found.</p>
        </div>
      </fragment>
    </b-container>
    <div class="text-center spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div class id="errorPage"></div>
  </fragment>
</template>

<script>
import StarshipCard from "../Starships/StarshipCard";
import DataService from "../../services/DataServices";
export default {
  name: "Starships",
  components: {
    StarshipCard
  },
  data() {
    return {
      starships: "",
      results: [],
      loading: true,
      currentPage: 1,
      totalCount: 0,
      selected_filter: "null",
      pagination_control: true,
      header: "Starships"
    };
  },
  methods: {
    async getNextPage() {
      if (this.currentPage === Math.ceil(this.totalCount / 10)) {
        document.querySelector("#errorPage").style.display = "block";
        document.querySelector("#errorPage").textContent =
          "You cannot navigate to the next page";
        setTimeout(() => {
          document.querySelector("#errorPage").style.display = "none";
        }, 3000);
        return;
      }
      this.loading = true;
      let url = this.starships.next.split("https://swapi.co")[1];

      let data = await DataService.getPosts(url);
      // let urlArray = url.split("");
      this.starships = data;
      this.results = data.results;
      this.currentPage = Number(url[url.length - 1]);
      this.totalCount = data.count;
      this.loading = false;
      return;
    },
    async getPreviousPage() {
      if (this.currentPage === 1) {
        document.querySelector("#errorPage").style.display = "block";
        document.querySelector("#errorPage").textContent =
          "You cannot navigate to the previous page";
        setTimeout(() => {
          document.querySelector("#errorPage").style.display = "none";
        }, 3000);
        return;
      }
      this.loading = true;
      let url = this.starships.previous.split("https://swapi.co")[1];

      let data = await DataService.getPosts(url);
      this.starships = data;
      this.results = data.results;
      this.currentPage = Number(url[url.length - 1]);
      this.totalCount = data.count;
      this.loading = false;
      return;
    }
  },
  async created() {
    let url;

    if (Object.keys(this.$route.query).length !== 0) {
      url = "/api/starships?search=" + this.$route.query.query;
      this.header = `Searching...`;
    } else {
      url = "/api/starships";
    }
    try {
      let data = await DataService.getPosts(url);
      this.starships = data;
      this.results = data.results;
      this.currentPage = 1;
      this.totalCount = data.count;
      this.loading = false;
      this.header =
        Object.keys(this.$route.query).length !== 0
          ? `Search Results`
          : `Starships`;
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
.filter-starship {
  display: block;
  border-radius: 5px;
  width: 250px;
}
.filter-starship select {
  border: 2px solid black;
}
#starship-filter-dropdown {
  width: 50%;
}
.heading-underline {
  width: 200px;
  border-bottom: 8px solid black;
  padding: 0px 4px 9px;
  display: inline-block;
}
#errorPage {
  color: red;
}
.not-found {
  margin: 5em auto;
}
</style>
