<template>
  <b-col sm="12" md="12" lg="6" class="character-card" v-bind:character="character">
    <div class="inner-card">
      <div class="character-image">
        <b-img
          :src="`/assets/images/character-${Math.ceil(Math.random() * 4)}.jpg`"
          left
          alt="Star Wars Logo"
          class="character--image"
        ></b-img>
      </div>
      <div class="character-info">
        <!-- <div class="inner"> -->
        <h4>
          <b>{{character.name}}</b>
        </h4>
        <h6>
          <em>Birth Date: {{character.birth_year.toUpperCase()}}</em>
        </h6>
        <h6>
          <em>{{character.gender.toUpperCase()}}</em>
        </h6>
        <p>
          Some quick example text to build on the card title and make up the bulk of the card's content...
          <span
            class="read-more"
          >
            <b>
              <router-link v-bind:to="character.url.split('https://swapi.co/api')[1]">Read More</router-link>
            </b>
          </span>
        </p>
      </div>
      <!-- </div> -->
    </div>
  </b-col>
</template>

<script>
export default {
  name: "CharacterCard",
  props: ["character"]
};
</script>

<style scoped>
.character-card {
  padding: 0px;
  text-align: left;
  margin-bottom: 3em;
}
.inner-card {
  margin: auto;
  width: 600px;
}
.character-image {
  width: 350px;
}
.character--image {
  /* height: 100%;
  width: 100%; */
  height: 350px;
  width: 350px;
  object-fit: cover;
}
.character-info {
  display: inline-block;
  background-color: #eee;
  height: 350px;
  width: 250px;
  padding: 60px 20px 10px;
}
.character-info p {
  padding-top: 15px;
  font-size: 0.9em;
}
.character-info h6 {
  font-size: 0.8em;
}
.read-more {
  /* text-decoration: underline; */
  border-bottom: 2px solid black;
  padding-bottom: 0px;
}
</style>
