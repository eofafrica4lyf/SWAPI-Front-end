<template>
  <fragment>
    <Header />
    <fragment v-if="!loading">
      <b-container fluid class="planet">
        <p>
          <router-link v-bind:to="`/`">Back to Home Page</router-link>
        </p>
        <router-link v-bind:to="`/planets`">Back to Planets Page</router-link>
        <b-row>
          <b-jumbotron
            center
            :header="this.currentPage + `. ` + this.state.name"
            :lead="this.state.gender"
          >
            <hr class="my-4" />
            <p>
              <b>Name:</b>
              {{this.state.name}}
            </p>
            <p>
              <b>Rotation Period:</b>
              {{this.state.rotation_period}}
            </p>
            <p>
              <b>Orbital Period:</b>
              {{this.state.orbital_period}}
            </p>
            <p>
              <b>Diameter:</b>
              {{this.state.diameter}} km
            </p>
            <p>
              <b>Climate:</b>
              {{this.state.climate}}
            </p>
            <p>
              <b>Population:</b>
              {{this.state.population}}
            </p>
            <p>
              <b>Gravity:</b>
              {{this.state.gravity}}
            </p>
            <p>
              <b>Surface Water:</b>
              {{this.state.surface_water}}
            </p>
            <p>
              <b>Terrain:</b>
              {{this.state.terrain}}
            </p>
          </b-jumbotron>
        </b-row>
      </b-container>
      <b-button-group size="lg" class="mx-1 paginate">
        <b-button id="previous" v-on:click="getPreviousPage">&lsaquo;</b-button>
        <b-button id="next" v-on:click="getNextPage">&rsaquo;</b-button>
      </b-button-group>
    </fragment>
    <div class="text-center detail spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </fragment>
</template>

<script>
// import { Fragment } from "vue-fragment";
import DataService from "../services/DataServices";
// import Header from "../components/Header";
export default {
  name: "Planet",
  data() {
    return {
      state: {},
      loading: true,
      currentPage: "",
      totalCount: 0,
      nextPage: "",
      previousPage: ""
    };
  },
  methods: {
    async getPreviousPage() {
      if (this.currentPage == 1) {
        return;
      }
      this.loading = true;
      let url = `/api/planets/${Number(this.currentPage) - 1}`;
      try {
        let data = await DataService.getPosts(url);
        this.state = data;
        this.currentPage = Number(this.currentPage) - 1;
        this.loading = false;
        return;
      } catch (error) {
        this.loading = false;
        return;
      }
    },
    async getNextPage() {
      if (this.currentPage == 87) {
        //hard coded? I know...still trying to find a fix
        return;
      }
      this.loading = true;
      let url = `/api/planets/${Number(this.currentPage) + 1}`;
      try {
        let data = await DataService.getPosts(url);
        this.state = data;
        this.currentPage = Number(this.currentPage) + 1;
        this.loading = false;
        return;
      } catch (error) {
        this.loading = false;
        return;
      }
    }
  },
  async created() {
    let url = "/api/planets/" + this.$route.params.id;

    this.currentPage = this.$route.params.id;
    this.nextPage = Number(this.$route.params.id) + 1;
    this.previousPage = Number(this.$route.params.id) - 1;

    try {
      let data = await DataService.getPosts(url);
      console.log(data);
      this.state = data;
      this.loading = false;
      return;
    } catch (error) {
      return;
    }
  }
};
</script>

<style scoped>
.container-fluid {
  margin-top: 3em;
}
.jumbotron {
  margin: auto;
  width: 80%;
  max-width: 1000px;
  box-shadow: 3px 4px 5px;
  background-color: #0000001f;
}
.spinner.detail {
  width: 100%;
}
.spinner.detail .spinner-border {
  position: absolute;
  top: 48%;
  margin: auto;
}
</style>
