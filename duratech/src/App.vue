<template>
  <div v-if="$route.name !== 'login'">
    <Header></Header>
    <Navbar></Navbar>
  </div>
  <RouterView />
  <div v-if="$route.name !== 'login' && $route.name !== 'admin'">
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: { Header, Navbar, Footer },
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
