<template>
  <div class="card">
    <img :src="require(`../assets/${album.img}.jpeg`)" />
    <h6>{{ album.id }}</h6>
    <h2>{{ album.title }}</h2>
    <h3>{{ album.artist }}</h3>
    <a href="#">read more></a>
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
  box-shadow: 2px 2px 10px rgba(255, 0, 0, 0.44),
    -2px -2px 10px rgba(0, 0, 200, 0.44);
  padding: 20px;
  background-color: white;
}
img {
  border: 1px solid blue;
}
</style>
