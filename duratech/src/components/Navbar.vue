<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #73b925;">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name: 'home'}">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name:'about'}">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name:'services'}">Services</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name:'projects'}">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name:'blog'}">Blog</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{name:'contact'}">Contact</RouterLink>
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
