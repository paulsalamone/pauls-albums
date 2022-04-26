<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: white;
  padding: 10px;
  margin: 10px;
  width: fit-content;
}

nav a {
  text-decoration: none;
  margin-right: 20px;
  color: black;
  font-weight: 900;
  font-size: 1.3rem;
}
</style>
