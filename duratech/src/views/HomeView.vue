<template>
  <Header></Header>

  <Navbar></Navbar>

  <Carousel></Carousel>

  <Services></Services>

  <Projects></Projects>

  <Review></Review>

  <Volunteer></Volunteer>

  <Testimonial></Testimonial>

  <Jumbotron></Jumbotron>

  <Blog></Blog>

  <Footer></Footer>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue';
  import Services from '@/components/Services.vue';
  import Projects from '@/components/Projects.vue';
  import Review from '@/components/Review.vue';
  import Volunteer from '@/components/Volunteer.vue';
  import Testimonial from '@/components/Testimonial.vue';
  import Jumbotron from '@/components/Jumbotron.vue';
  import Blog from '@/components/Blog.vue';

  export default {
    name: 'HomeView',
    components: {
    Navbar,
    Header,
    Footer,
    Carousel,
    Services,
    Projects,
    Review,
    Volunteer,
    Testimonial,
    Jumbotron,
    Blog
  }
  }
  </script>
  