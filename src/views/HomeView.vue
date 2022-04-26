<template>
  <div class="home">
    <AlbumsFilter />
    <AlbumsGrid />
  </div>
</template>

<script>
import AlbumsFilter from "../components/AlbumsFilter.vue";
import AlbumsGrid from "../components/AlbumsGrid.vue";

export default {
  name: "HomeView",
  components: {
    AlbumsFilter,
    AlbumsGrid,
  },
};
</script>
