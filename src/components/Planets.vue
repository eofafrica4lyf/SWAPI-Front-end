<template>
  <b-container fluid class="planets">
    <b-row>
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <div class="more-planets">
        <button>View More</button>
      </div>

      <b-container>
        <b-row>
          <div class="overflow-auto">
            <b-pagination-nav
              :link-gen="linkGen"
              :page-gen="pageGen"
              :number-of-pages="links.length"
            ></b-pagination-nav>
          </div>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import PlanetCard from "../components/PlanetCard";
export default {
  name: "Planets",
  components: { PlanetCard },
  data() {
    return {
      links: ["#foo", "#bar", "#baz", "#faz"]
    };
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1];
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1);
    }
  }
};
</script>

<style>
.planets {
  width: 70%;
  margin-bottom: 4em;
}
.more-planets {
  margin-top: 8em;
  margin: auto;
  text-align: center;
  width: 50%;
}
.more-planets button {
  border: 3px solid black;
  width: 100%;
  max-width: 400px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  border-radius: 5px;
}
</style>
