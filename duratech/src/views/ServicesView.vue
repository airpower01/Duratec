<template>
    <Header></Header>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Services></Services>
    <Footer></Footer>
<p>Services</p>

</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Services from '@/components/Services.vue';
export default {
    name: 'ServicesView',
    components: {
    Header,
    Navbar,
    Carousel,
    Services,
    Footer
}
}
</script>