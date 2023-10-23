

<template>
  <Header></Header>
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</template>
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';

export default {
    name: 'app',
    components: { Header, Navbar, Footer }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
}
</style>
