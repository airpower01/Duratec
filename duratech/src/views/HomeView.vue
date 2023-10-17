<template>
  <Header></Header>
  <Navbar></Navbar>
  <Carousel></Carousel>
  <Footer></Footer>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue';
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Header,
      Footer,
      Carousel
    }
  }
  </script>
  