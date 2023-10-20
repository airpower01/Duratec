<template>
    <Header></Header>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Jumbotron></Jumbotron>
    <Review></Review>
    <Volunteer></Volunteer>
    <Testimonial></Testimonial>
    <Footer></Footer>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Navbar from '@/components/Navbar.vue';
import Review from '@/components/Review.vue';
import Testimonial from '@/components/Testimonial.vue';
import Volunteer from '@/components/Volunteer.vue';
export default {
    name:'AboutView',
    components: {
    Header,
    Navbar,
    Carousel,
    Jumbotron,
    Review,
    Volunteer,
    Testimonial,
    Footer
}
}
</script>