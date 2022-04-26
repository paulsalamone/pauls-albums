<template>
  <div class="add">
    <h2>Add album:</h2>
    <form action="submit" @submit.prevent="handleSubmit">
      <!-- <input type="text" v-model="id" placeholder="id" /> -->
      <input type="text" v-model="album.artist" placeholder="artist" />
      <input type="text" v-model="album.title" placeholder="title" />
      <input type="text" v-model="album.genre" placeholder="genre" />
      <input
        type="text"
        v-model="album.description"
        placeholder="description"
      />

      <input type="text" v-model="album.img" placeholder="img" />
      <button type="submit">submit</button>
    </form>
    <div>
      <h2>album:</h2>
      {{ album }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      album: {
        id: Math.floor(Math.random() * 10000),
        artist: "",
        title: "",
        genre: "",
        description: "",
        favorite: false,
        img: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // event.preventDefault();
      console.log("handle submit");
      console.log(this.album);
      this.$store.commit("createAlbum", this.album);
    },
  },
};
</script>

<style scoped>
.add {
  margin: 10px;
  padding: 30px;
  background-color: white;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 5px;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #bbb;
  box-shadow: inset 3px 3px 5px #eef;
  max-width: 300px;
}
button {
  background-color: #9094d7;
  width: 150px;
  color: white;
  font-size: 1.5rem;
  margin: 10px;
  padding: 20px 7px;
  border-radius: 5px;
  border-top-right-radius: 15px;
  border: 0px;
  box-shadow: inset 5px 4px 8px #bcbee9, inset -5px -4px 8px #8184b6;
}

button:hover {
  background-color: #a3a7eb;
}

button:active {
  box-shadow: inset 5px 4px 8px #8184b6, inset -5px -4px 8px #bcbee9;
}
</style>
