<template>
  <div id="app">
    <h1>Paul's LPs</h1>
    <TopNav />
    <router-view />
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Rubik+Mono+One&display=swap");

body {
  /* background-color: #e5e5f7; */
  opacity: 1;
  background: repeating-linear-gradient(
    -45deg,
    #9094d7,
    #9094d7 2px,
    #e5e5f7 2px,
    #e5e5f7 5px
  );
  z-index: 0;
}
#app {
  font-family: "Cabin", Arial, Helvetica, sans-serif;
  /* background-color: white; */
}

h1,
h2,
h3 {
  font-family: "Rubik Mono One", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
}

h1 {
  background-color: white;
  margin: 10px;
  /* padding: 10px; */
  font-size: 3rem;
}
</style>
