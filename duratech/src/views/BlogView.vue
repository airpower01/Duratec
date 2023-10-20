<template>
    <Header></Header>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Blog></Blog>
    <Footer></Footer>
    Blog
</template>
<script>
import Blog from '@/components/Blog.vue';
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'BlogView',
    components: { Header, Navbar, Blog, Footer, Carousel }
}
</script>