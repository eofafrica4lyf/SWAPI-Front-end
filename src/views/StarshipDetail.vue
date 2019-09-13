<template>
  <fragment>
    <Header />
    <fragment v-if="!loading">
      <b-container fluid class="starship">
        <p>
          <router-link v-bind:to="`/`">Back to Home Page</router-link>
        </p>
        <router-link v-bind:to="`/starships`">Back to Starships Page</router-link>
        <b-row>
          <b-jumbotron
            center
            :header="this.currentPage + `. ` + this.state.name"
            :lead="this.state.model"
          >
            <hr class="my-4" />
            <p>
              <b>Starship Class:</b>
              {{this.state.starship_class}}
            </p>
            <p>
              <b>Crew:</b>
              {{this.state.crew}}
            </p>
            <p>
              <b>Passengers:</b>
              {{this.state.passengers}}
            </p>
            <p>
              <b>Manufacturer:</b>
              {{this.state.manufacturer}}
            </p>
            <p>
              <b>Cost:</b>
              {{this.state.cost_in_credits}} credits
            </p>
            <p>
              <b>Consumables:</b>
              {{this.state.consumables}}
            </p>
            <p>
              <b>Cargo Capacity:</b>
              {{this.state.cargo_capacity}}
            </p>
            <p>
              <b>Maximum Atmosphering Speed:</b>
              {{this.state.max_atmosphering_speed}}
            </p>
            <p>
              <b>Hyperdrive Rating:</b>
              {{this.state.hyperdrive_rating}}
            </p>
            <p>
              <b>Length:</b>
              {{this.state.length}}
            </p>
          </b-jumbotron>
        </b-row>
      </b-container>
    </fragment>
    <div class="text-center detail spinner" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import DataService from "../services/DataServices";
export default {
  name: "Starship",
  components: {
    Fragment
  },
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
  async created() {
    let url = "/api/starships/" + this.$route.params.id;

    this.currentPage = this.$route.params.id;
    this.nextPage = Number(this.$route.params.id) + 1;
    this.previousPage = Number(this.$route.params.id) - 1;

    try {
      let data = await DataService.getPosts(url);

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
