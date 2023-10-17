<template>
  <Header></Header>

  <Navbar></Navbar>

  <Carousel></Carousel>

  <Services></Services>
  
  <Footer></Footer>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue';
  import Services from '@/components/Services.vue';
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Header,
      Footer,
      Carousel,
      Services
    }
  }
  </script>
  