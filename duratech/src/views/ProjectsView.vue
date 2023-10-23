<template>
        <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" style="color: #636b6f;">Home</a></li>
      <li class="breadcrumb-item active">
        <a href="/projects" style="color: #636b6f;">Projects</a>
      </li>
    </ol>
    <Carousel></Carousel>
    <Jumbotron></Jumbotron>
    <Projects></Projects>
  
    Projects
</template>
<script>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Navbar from '@/components/Navbar.vue';
import Projects from '@/components/Projects.vue';

export default {
    name: 'ProjectsView',
    components: { Header, Navbar, Jumbotron, Projects, Footer, Carousel }
}
</script>