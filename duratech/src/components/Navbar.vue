<template>
  <nav class="navbar navbar-expand-lg navbar-green navbar-dark" style="height: 73px;">
    <div class="wrapper"></div>
    <div class="container-fluid all-show">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        MENU
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/services">Services</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects">Projects</RouterLink>

          </li>

          <li class="nav-item">
             <RouterLink class="nav-link" to="/blog">Blog</RouterLink>

          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>

          </li>
        </ul>
        <div class="d-flex flex-column">
          <small class="text-dark fw-bolder mr-5" style="letter-spacing: 2px; font-weight: bold;"> <iconify-icon icon="solar:hand-heart-linear" style="color: #7bd22b; margin-right: 2px;" width="17"></iconify-icon> DONATE NOW!</small>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap");

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
}

.navbar-nav > li > a {
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  margin-right: 20px;
  color: #fff;
}

.navbar-toggler {
  padding: 0.2rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  color: white;
}

.nav-link {
  color: #e1e9de !important;
}

.wrapper {
  width: 98.7%;
  position: absolute;
  height: 100%;
  background-color: #fff;
  clip-path: polygon(75% 0, 100% 0, 100% 50%, 100% 100%, 71% 100%);
  transition: 1s all;
}

.navbar-brand {
  color: #fff;
  font-family: "Allerta Stencil", sans-serif;
  margin-bottom: 4px;
  font-size: 27px;
}

.navbar-green {
  background-color: #73b925;
  color: #fff;
}

.all-show {
  z-index: 10;
}
</style>

<!-- <template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Your Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  
  </template>
  
  <script>
  export default {
      name: 'Navbar'
  }   
  </script> -->
