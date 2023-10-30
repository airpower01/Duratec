<template>
      <NavigationPoster route="/products" page="PRODUCTS" pageTitle="Our Products" />

    <Jumbotron/>
    <Projects/>

</template>
<script>

import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Navbar from '@/components/Navbar.vue';
import NavigationPoster from '@/components/NavigationPoster.vue';
import Projects from '@/components/Projects.vue';

export default {
    name: 'ProjectsView',
    components: { Header, Navbar, Jumbotron, Projects, Footer, NavigationPoster }
}
</script>