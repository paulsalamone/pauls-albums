<template>
  <div class="filters">
    <p>Filter by genre:</p>
    <select name="filters" id="" @change="setFilter" v-model="genreSelection">
      <option value="all">all</option>
      <option v-for="genre in genres" :key="genre">
        {{ genre }}
      </option>
    </select>
    <!-- <p>Selected: {{ filter }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      genreSelection: "all",
    };
  },
  methods: {
    setFilter() {
      //   console.log("filter set");
      this.$store.commit("setFilter", this.genreSelection);
    },
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    genres() {
      let allAlbums = this.$store.state.albums;
      let genres = [];
      for (let i = 0; i < allAlbums.length; i++) {
        if (!genres.includes(allAlbums[i].genre)) {
          genres.push(allAlbums[i].genre);
        }
      }
      return genres;
    },
  },
  // 	 doneTodosCount () {
  //     return this.$store.state.todos.filter(todo => todo.done).length
  //   }
};
</script>

<style>
.filters {
  padding: 10px;
  padding-right: 30px;
  background-color: white;
  margin: 10px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
}
select {
  height: 30px;
  margin: 6px;
  margin-right: 20px;
  font-size: 1.2rem;
}
option {
  font-size: 1.2rem;
}
</style>
