<template>
    <Header></Header>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Jumbotron></Jumbotron>
    <Projects></Projects>
    <Footer></Footer>
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