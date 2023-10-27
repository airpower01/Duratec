<template>
  <div v-if="$route.name !== 'login' && $route.name !== 'register'">
    <Header></Header>
    <Navbar></Navbar>
  </div>
  <RouterView />
  <div v-if="$route.name !== 'login' && $route.name !== 'admin' && $route.name !== 'register'">
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

import { onMounted } from "vue";

export default {
  name: "app",
  components: { Header, Navbar, Footer },
};
</script>


