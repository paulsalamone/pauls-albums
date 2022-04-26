<template>
  <div class="card">
    <img :src="require(`../assets/${album.img}.jpeg`)" />
    <h6>{{ album.id }}</h6>
    <h2>{{ album.title }}</h2>
    <h3>{{ album.artist }}</h3>
    <!-- <a href="#">read more></a> -->
    <router-link
      :to="{ name: 'album-show', params: { id: album.id } }"
      :album="album"
      :id="album.id"
      >read more</router-link
    >

    <AlbumLike />
  </div>
</template>

<script>
import AlbumLike from "../components/AlbumLike.vue";

export default {
  components: {
    AlbumLike,
  },
  props: {
    album: Object,
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  background-color: white;
}
img {
  /* border: 1px solid blue; */
  box-shadow: 0 0 5px grey;
}
</style>
