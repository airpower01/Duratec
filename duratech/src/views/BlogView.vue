<template>
      <NavigationPoster route="/blog" page="BLOG" pageTitle="Our Blog"/>
    <Blog/>
</template>
<script>
import Blog from '@/components/Blog.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import NavigationPoster from '@/components/NavigationPoster.vue';

export default {
    name: 'BlogView',
    components: { Header, Navbar, Blog, Footer, NavigationPoster }
}
</script>