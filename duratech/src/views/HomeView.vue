<template>
  <Header></Header>
  <Navbar></Navbar>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Header
    }
  }
  </script>
  