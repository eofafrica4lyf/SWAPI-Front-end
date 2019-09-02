<template>
  <b-col sm="12" md="12" lg="4" class="planet-card">
    <div class="inner-card">
      <div class="planet-card-image">
        <b-img
          :src="`/assets/images/starship-1.jpg`"
          left
          alt="Star Wars Logo"
          class="planet--image"
        ></b-img>
      </div>
      <div class="planet--card-body">
        <div class="inner">
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <b-button
            right
            size="md"
            text="Button"
            variant="dark"
            id="header-search-submit-button"
          >Read More</b-button>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
// import Image from "@/assets/images/logo.png";
export default {
  name: "PlanetCard"
};
</script>

<style scoped>
.planet-card {
  /* position: relative; */
  padding: 0px;
  margin-bottom: 3em;
  margin-top: 3em;
  text-align: left;
  width: 350px;
  /* background-color: #c5c5c5; */
}
.planet-card .inner-card {
  width: 350px;
  margin: auto;
}
.planet-card .card-title {
  font-size: 2em;
}
.planet-card .card-text {
  font-size: 0.9em;
}
.planet-card .btn {
  /* text-align: right; */
  display: block;
  margin-left: auto;
  border-radius: 0px;
  padding: 7px 26px;
  background-color: #c5c5c5;
  border: none;
}
.planet-card .btn:hover {
  background-color: #000000;
}
.planet-card-image {
  height: 250px;
  width: 350px;
}
.planet--image {
  height: 100%;
  /* width: 100%; */
  width: 350px;
}
.planet--card-body {
  background-color: #c5c5c5;
  font-size: 0.8em;
  padding-bottom: 0.7em;
  width: 350px;
}
.planet--card-body p {
  font-size: 1.2em;
}
.planet--card-body .inner {
  background-color: #eee;
  margin-left: 0.7em;
  padding: 2em;
  width: 350px;
}
</style>
