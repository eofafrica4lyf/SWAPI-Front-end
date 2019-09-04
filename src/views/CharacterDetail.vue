<template>
  <fragment>
    <p>Character {{this.$route.params}}</p>
    <p>Name: {{this.state.name}}</p>
    <p>Birth Year: {{this.state.birth_year}}</p>
    <p>Eye Color: {{this.state.eye_color}}</p>
    <p>Hair Color: {{this.state.hair_color}}</p>
    <p>Height: {{this.state.height}}</p>
    <p>Skin Color: {{this.state.skin_color}}</p>
    <p>Height: {{this.state.height}}</p>

    <b-button-group size="lg" class="mx-1 paginate">
      <b-button id="previous" v-on:click="getPreviousPage"><</b-button>
      <b-button id="next" v-on:click="getNextPage">></b-button>
    </b-button-group>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import DataService from "../services/DataServices";
export default {
  name: "Character",
  data() {
    return {
      state: {},
      currentPage: "",
      totalCount: 0,
      nextPage: "",
      previousPage: ""
    };
  },
  methods: {
    getPreviousPage() {
      let path = `/people/${Number(this.currentPage) - 1}`;
      this.$router.push({
        path
      });
    },
    getNextPage() {
      let path = `/people/${Number(this.currentPage) + 1}`;
      // router.push("yourroutename")
      this.$router.replace({ name: path });
    }
  },
  async created() {
    let url = "/api/people/" + this.$route.params.id;
    this.currentPage = this.$route.params.id;
    this.nextPage = Number(this.$route.params.id) + 1;
    this.previousPage = Number(this.$route.params.id) - 1;

    try {
      let data = await DataService.getPosts(url);
      this.state = data;
      return;
    } catch (error) {
      return;
    }
  }
};
</script>
