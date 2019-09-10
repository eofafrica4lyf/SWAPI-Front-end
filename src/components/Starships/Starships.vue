<template>
  <fragment>
    <b-container fluid class="starships" v-if="!loading">
      <h1 class="after-header">Starships</h1>
      <p center class="heading-underline"></p>
      <b-row>
        <b-col sm="12" md="12" lg="12" class="starship-card">
          <div class="filter-starship">
            <b-form-select v-model="selected_filter" v-on:change="getFilteredData" class="mb-3">
              <option :value="null">Please select an option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">Robot</option>
            </b-form-select>
          </div>
        </b-col>
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
    </b-container>
    <div class="text-center spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div class id="errorPage"></div>
  </fragment>
</template>

<script>
import StarshipCard from '../Starships/StarshipCard';
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
      pagination_control: true
    };
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
      console.log(data);
      this.starships = data;
      this.results = data.results;
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
}
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
</style>
