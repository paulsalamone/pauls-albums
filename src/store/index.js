import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},
  mutations: {
    setFilter(state, genreSelection) {
      state.filter = genreSelection;
      console.log(state.filter + " set to " + genreSelection);
    },
  },
  actions: {},
  modules: {},
  state: {
    filter: "all",
    albums: [
      {
        id: "001",
        artist: "Guided By Voices",
        title: "Bee Thousand",
        genre: "indie",
        description: "lofi short-form british invasion",
        favorite: false,
        img: "gbv1",
      },
      {
        id: "002",
        artist: "Merzbow",
        title: "Harsh Rainbow",
        genre: "noise",
        description: "skull-splitting feedback masking a weird beauty",
        favorite: false,
        img: "merz1",
      },
      {
        id: "003",
        artist: "Public Enemy",
        title: "Fear of a Black Planet",
        genre: "hip-hop",
        description: "dense urban poetry mixed with fiery rage",
        favorite: false,
        img: "pe1",
      },
    ],
  },
});
