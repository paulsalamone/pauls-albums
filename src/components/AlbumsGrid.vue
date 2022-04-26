<template>
  <main>
    <div class="album-grid" v-if="filter === 'all'">
      <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
    </div>
    <div class="album-grid" v-else>
      <AlbumCard
        v-for="album in filteredAlbums"
        :key="album.id"
        :album="album"
      />
    </div>
  </main>
</template>

<script>
import AlbumCard from "../components/AlbumCard.vue";

export default {
  components: {
    AlbumCard,
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
    filter() {
      return this.$store.state.filter;
    },
    filteredAlbums() {
      return this.albums.filter((e) => {
        console.log("Genre:" + e.genre);
        console.log("Filter:" + this.$store.state.filter);

        return e.genre === this.$store.state.filter;
      });
    },
  },
};
</script>

<style scoped>
.album-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
}
</style>
