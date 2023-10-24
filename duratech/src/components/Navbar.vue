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
            <RouterLink class="nav-link" to="/">Home</RouterLink>
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
  color: #F4F2F2;
}

.navbar-toggler {
  padding: 0.2rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  color: #F4F2F2;
}

.nav-link {
  color: #E7E3E3 !important;
}

.nav-link::selection {
  color: white !important;
}



.navbar-brand {
  color: #fff;
  font-family: "Allerta Stencil", sans-serif;
  margin-bottom: 4px;
  font-size: 27px;
}

.all-show {
  z-index: 10;
}
</style>
