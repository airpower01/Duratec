<template>
       
    <NavigationPoster route="/about" page="ABOUT" pageTitle="About Us"/>
    <CompanyProfile></CompanyProfile>
    <Jumbotron/>
    <Review/>
    <Volunteer/>
    <Testimonial/>

</template>

<script>
import CompanyProfile from '@/components/CompanyProfile.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Navbar from '@/components/Navbar.vue';
import NavigationPoster from '@/components/NavigationPoster.vue';
import Review from '@/components/Review.vue';
import Testimonial from '@/components/Testimonial.vue';
import Volunteer from '@/components/Volunteer.vue';
export default {
    name:'AboutView',
    components: {
    Header,
    Navbar,
    Jumbotron,
    Review,
    Volunteer,
    Testimonial,
    Footer,
    NavigationPoster,
    CompanyProfile
}
}
</script>