<template>
  <div class="header">
    <div id="nav">
      <div id="overlay">
        <a href="/">
          <b-img left :src="require('../assets/images/logo.png')" alt="Star Wars Logo" id="logo"></b-img>
        </a>
        <div right class="menu-items">
          <router-link to="/">Home</router-link> 
          <router-link to="/people">Characters</router-link> 
          <router-link to="/starships">Starships</router-link>
        </div>

        <b-container class="header-search-row">
          <b-row>
            <h1 id="intro-header">
              <span class="starjedi">Star</span>
              <span class="starjedi">
                Wars
                <span id="plain-text">&nbsp;Directory</span>
              </span>
            </h1>
            <p>Find your favorite Characters, Planets and Starships</p>
            <form @submit="submitSearch">
              <div>
                <b-input-group>
                  <b-form-select v-model="category">
                    <option :value="null">Please select an option</option>
                    <option value="people">Character</option>
                    <option value="planets">Planet</option>
                    <option value="starships">Starship</option>
                  </b-form-select>

                  <b-form-input
                    v-model="search_input"
                    id="header-search-text-input"
                    placeholder="Enter a search term..."
                  ></b-form-input>

                  <b-input-group-append>
                    <b-button
                      type="submit"
                      size="lg"
                      text="Button"
                      variant="dark"
                      id="header-search-submit-button"
                    >Search</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </form>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      category: "null",
      search_input: ""
    };
  },
  methods: {
    submitSearch(e) {
      e.preventDefault();
      if (this.category == "null") {
        return;
      }
      // eslint-disable-next-line
      let path = `/${this.category}`;
      this.$router.push({
        path,
        query: { query: this.search_input }
      });
    }
  }
};
</script>

<style scoped>
#nav {
  background-image: url("../assets/images/hero-banner.jpg");
  height: 700px;
}
#logo {
  width: 180px;
  padding: 50px;
  box-sizing: content-box;
}
#overlay {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
}
.header-search-row {
  clear: both;
  padding: 2em;
}
.header-search-row .row {
  display: block;
  color: white;
}
.header-search-row p {
  margin-top: 1em;
  margin-bottom: 2em;
}
.header-search-row .input-group {
  width: 70%;
  margin: auto;
}
.header-search-row input,
.header-search-row button,
.header-search-row select,
#header-search-dropdown button {
  height: 50px !important;
}
#intro-header {
  border-bottom: 4px white solid;
  padding: 0px 4px 3px;
  display: inline-block;
}
#intro-header .starjedi {
  text-align: left;
  font-size: 1.5em;
  display: block;
  margin-top: -20px;
}
#plain-text {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
.menu-items {
  float: right;
  padding-right: 4em;
  position: relative;
  top: 50px;
  font-size: 1.5em;
  color: white;
  margin-right: 25px;
}
.menu-items a {
  margin-right: 1em;
  text-decoration: none;
  color: white;
}
.isActive {
  border: 2px solid rgba(255, 255, 255, 0.822);
  border-radius: 15px;
  padding: 2px 5px;
}
</style>
