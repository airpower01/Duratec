<template>
      
    <NavigationPoster route="/services" page="SERVICES" pageTitle="Our Services"  ></NavigationPoster>
    <Services></Services>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import NavigationPoster from '@/components/NavigationPoster.vue';
import Services from '@/components/Services.vue';
export default {
    name: 'ServicesView',
    components: {
    Header,
    Navbar,
    Services,
    Footer,
    NavigationPoster
}
}
</script>