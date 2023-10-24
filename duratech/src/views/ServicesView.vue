<template>
        <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" style="color: #636b6f;">Home</a></li>
      <li class="breadcrumb-item active">
        <a href="/services" style="color: #636b6f;">Services</a>
      </li>
    </ol>
    <Carousel></Carousel>
    <Services></Services>

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