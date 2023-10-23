<template>
        <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" style="color: #636b6f;">Home</a></li>
      <li class="breadcrumb-item active">
        <a href="/blog" style="color: #636b6f;">Blog</a>
      </li>
    </ol>
    <Carousel></Carousel>
    <Blog></Blog>

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