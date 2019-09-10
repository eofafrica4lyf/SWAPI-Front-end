<template>
  <b-col sm="12" md="12" lg="4" class="planet-card" v-bind:starship="starship">
    <div class="inner-card">
      <div class="planet-card-image">
        <b-img
          :src="`/assets/images/starship-${Math.ceil(Math.random() * 6)}.jpg`"
          left
          alt="Star Wars Logo"
          class="planet--image"
        ></b-img>
      </div>
      <div class="planet--card-body">
        <div class="inner">
          <p>
            <b>{{starship.name}}</b>, 
            <em><small><abbr>{{starship.model}}</abbr></small> </em>
          </p>
          <p>
           
          </p>
          <p><b>Capacity: </b>
            <abbr><abbr>{{starship.cargo_capacity}}</abbr></abbr>
          </p>

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
  name: "StarshipCard",
  props: ["starship"]
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
  /* height: 350px;
    width: 350px; */
  object-fit: cover;
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
  height: 190px;
}
</style>
