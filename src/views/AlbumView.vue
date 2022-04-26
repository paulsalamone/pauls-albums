<template>
  <div class="card">
    <img :src="require(`../assets/${album[0].img}.jpeg`)" />
    <h1>{{ album[0].title }}</h1>
    <h2>{{ album[0].artist }}</h2>
    <h4>{{ album[0].description }}</h4>
    <p>
      <i>Favorited? : {{ album[0].favorite }} </i>
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    album() {
      return this.$store.state.albums.filter((e) => {
        return e.id === this.id;
      });
    },
  },
};
</script>

<style scoped>
div {
  background-color: white;
  padding: 10px;
  margin: 10px;
}
.card {
  padding: 40px;
  background-color: white;
}
img {
  /* border: 1px solid blue; */
  box-shadow: 0 0 5px grey;
}
</style>
