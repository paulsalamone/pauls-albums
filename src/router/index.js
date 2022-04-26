import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddView from "../views/AddView.vue";
import AlbumView from "../views/AlbumView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
  {
    path: "/album/:id",
    name: "album-show",
    component: AlbumView,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
