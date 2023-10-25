<template>
  <section
    class="hero-wrap hero-wrap-2"
    style="
      background-image: url('https://i.pinimg.com/originals/55/ce/2e/55ce2e686978a0cc84a8ca2d36e3b85e.jpg');
    "
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        class="row no-gutters slider-text align-items-center justify-content-center"
      >
      <p class="breadcrumbs">
        <span class="me-2"
          ><a  style="color: #F5F2F2; font-weight: bold; text-decoration: none; " href="/">HOME <i class="fa fa-chevron-right"></i></a
        ></span >
        <span  style="color: #F5F2F2; font-weight: bold; ">{{page}} <i class="fa fa-chevron-right"></i></span>
      </p>
        <div class="col text-center">
          <h1 class="mb-0 bread fw-bold" style="color: #F5F2F2; font-size: 60px; letter-spacing: 3px; margin-top: 200px;">{{ pageTitle }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavigationPoster",
  props: ["route", "page", "pageTitle"],
};
</script>

<style>
.hero-wrap.hero-wrap-2 {
  min-height: auto;
  height: 600px;
  background-position: center center;
  background-attachment: fixed;
}
.hero-wrap {
  height: 100vh;
  min-height: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  z-index: 0;
}
.breadcrumbs {
    font-size: 17px;
    letter-spacing: 2px;
}

</style>
