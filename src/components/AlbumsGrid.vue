<template>
  <main>
    <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
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
    // 	 doneTodosCount () {
    //     return this.$store.state.todos.filter(todo => todo.done).length
    //   }
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
}
</style>
